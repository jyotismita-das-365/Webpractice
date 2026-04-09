import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import { useAuth } from "../context/AuthContext";

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({ email: "", password: "" });
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
      const authPayload = await login(formData);
      const nextPath =
        location.state?.from ||
        (authPayload.user.role === "teacher"
          ? "/teacher-host"
          : "/student-store");
      navigate(nextPath, { replace: true });
    } catch (requestError) {
      setError(requestError?.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthForm
      title="Welcome back"
      fields={[
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
          placeholder: "Enter your password",
          required: true,
        },
      ]}
      actionLabel="Login"
      footerText="New to the site?"
      footerLinkLabel="Create an account"
      footerLinkTo="/signup"
      onSubmit={handleSubmit}
      submitLoading={loading}
      error={error}
    />
  );
};

export default LoginPage;
