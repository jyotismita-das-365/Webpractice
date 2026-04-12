const jwt = require("jsonwebtoken");
const Teacher = require("../models/Teacher");
const Student = require("../models/Student");

const findUserByRoleAndId = async (role, id) => {
  if (role === "teacher") {
    return Teacher.findById(id).select("-password");
  }

  if (role === "student") {
    return Student.findById(id).select("-password");
  }

  return null;
};

const findUserFromAnyStore = async (id) => {
  const teacher = await Teacher.findById(id).select("-password");
  if (teacher) {
    return teacher;
  }

  const student = await Student.findById(id).select("-password");
  if (student) {
    return student;
  }

  return null;
};

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    let user = null;
    let role = decoded.role;

    if (decoded.role) {
      user = await findUserByRoleAndId(decoded.role, decoded.id);
    }

    if (!user) {
      user = await findUserFromAnyStore(decoded.id);
      if (user) {
        if (user.constructor.modelName === "Teacher") {
          role = "teacher";
        } else if (user.constructor.modelName === "Student") {
          role = "student";
        }
      }
    }

    if (!user) {
      res.status(401);
      throw new Error("Not authorized, token failed");
    }

    user.role = role;
    req.user = user;
    next();
  } catch (error) {
    res.status(401);
    throw new Error("Not authorized, token failed");
  }
};

const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
      res.status(403);
      throw new Error("Not authorized for this action");
    }

    next();
  };
};

module.exports = { protect, authorizeRoles };
