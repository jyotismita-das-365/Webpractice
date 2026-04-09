import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import { useAuth } from "../context/AuthContext";

const SignupPage = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const authPayload = await signup({
        ...formData,
      });
      navigate(
        authPayload.user.role === "teacher"
          ? "/teacher-host"
          : "/student-store",
        { replace: true },
      );
    } catch (requestError) {
      setError(requestError?.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthForm
      title="Create your account"
      subtitle="Choose student or teacher account when you sign up."
      fields={[
        {
          name: "name",
          label: "Full Name",
          type: "text",
          value: formData.name,
          onChange: handleChange,
          placeholder: "Enter your name",
          required: true,
        },
        {
          name: "email",
          label: "Email Address",
          type: "email",
          value: formData.email,
          onChange: handleChange,
          placeholder: "you@example.com",
          required: true,
        },
        {
          name: "password",
          label: "Password",
          type: "password",
          value: formData.password,
          onChange: handleChange,
          placeholder: "Create a password",
          required: true,
          minLength: 6,
        },
        {
          name: "role",
          label: "Account Type",
          type: "select",
          value: formData.role,
          onChange: handleChange,
          required: true,
          options: [
            { value: "student", label: "Student" },
            { value: "teacher", label: "Teacher" },
          ],
        },
      ]}
      actionLabel="Sign Up"
      footerText="Already have an account?"
      footerLinkLabel="Log in"
      footerLinkTo="/login"
      onSubmit={handleSubmit}
      submitLoading={loading}
      error={error}
    />
  );
};

export default SignupPage;
