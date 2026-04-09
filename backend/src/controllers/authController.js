const jwt = require("jsonwebtoken");
const Teacher = require("../models/Teacher");
const Student = require("../models/Student");

const generateToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || "7d",
  });
};

const normalizeEmail = (value) => value.trim().toLowerCase();

const getAccountModel = (role) => {
  return role === "teacher" ? Teacher : Student;
};

const toUserPayload = (user, roleOverride) => ({
  _id: user._id,
  name: user.name,
  email: user.email,
  role: roleOverride || user.role,
});

const findAccountByEmail = async (email) => {
  const normalizedEmail = normalizeEmail(email);

  const teacher = await Teacher.findOne({ email: normalizedEmail });
  if (teacher) {
    return { user: teacher, role: "teacher" };
  }

  const student = await Student.findOne({ email: normalizedEmail });
  if (student) {
    return { user: student, role: "student" };
  }

  return null;
};

const registerUser = async (req, res) => {
  const { name, email, password, role } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please provide name, email and password");
  }

  const normalizedRole = role === "teacher" ? "teacher" : "student";
  const normalizedEmail = normalizeEmail(email);

  const existingAccount = await findAccountByEmail(normalizedEmail);
  if (existingAccount) {
    res.status(400);
    throw new Error("Email already exists");
  }

  const AccountModel = getAccountModel(normalizedRole);

  const user = await AccountModel.create({
    name,
    email: normalizedEmail,
    password,
    role: normalizedRole,
  });

  res.status(201).json({
    success: true,
    message: `Welcome ${name}! Your account has been created successfully.`,
    token: generateToken(user._id, normalizedRole),
    user: toUserPayload(user, normalizedRole),
  });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const accountResult = await findAccountByEmail(email || "");
  if (!accountResult || !(await accountResult.user.matchPassword(password))) {
    res.status(401);
    throw new Error("Invalid email or password");
  }

  res.status(200).json({
    success: true,
    message: "Login successful",
    token: generateToken(accountResult.user._id, accountResult.role),
    user: toUserPayload(accountResult.user, accountResult.role),
  });
};

const getMe = async (req, res) => {
  res.status(200).json({
    success: true,
    user: toUserPayload(req.user, req.user.role),
  });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
