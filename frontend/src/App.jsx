import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import DepartmentPage from "./pages/DepartmentPage";
import AboutPage from "./pages/AboutPage";
import FacilitiesPage from "./pages/FacilitiesPage";
import PlacementPage from "./pages/PlacementPage";
import EventsPage from "./pages/EventsPage";
import AdmissionsPage from "./pages/AdmissionsPage";
import ContactPage from "./pages/ContactPage";
import TeacherHostPage from "./pages/TeacherHostPage";
import StudentStorePage from "./pages/StudentStorePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <PublicRoute>
                <SignupPage />
              </PublicRoute>
            }
          />
          <Route path="/" element={<HomePage />} />
          <Route path="/department" element={<DepartmentPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/facilities" element={<FacilitiesPage />} />
          <Route path="/placement" element={<PlacementPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route
            path="/teacher-host"
            element={
              <ProtectedRoute allowedRoles={["teacher"]}>
                <TeacherHostPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/student-store"
            element={
              <ProtectedRoute allowedRoles={["student"]}>
                <StudentStorePage />
              </ProtectedRoute>
            }
          />
          <Route path="/admissions" element={<AdmissionsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
