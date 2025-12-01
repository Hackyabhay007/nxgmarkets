import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home";
import AMLPolicy from "./pages/aml-policy";
import ContactUs from "./pages/contact-us";
import PrivacyPolicy from "./pages/privacy-policy";
import RefundPolicy from "./pages/refund-policy";
import TermsConditions from "./pages/terms-conditions";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Dashboard from "./pages/dashboard";
import CryptoChill from "./pages/crypto-chill";
import Invoice from "./pages/invoice";
import { Toaster } from "react-hot-toast";
import { ProtectedRoute } from "./components/ProtectedRoute";


function App() {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <main className="w-full flex-1">
        <Toaster position="top-right" />
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Protected Routes */}
          <Route
            path="/user/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/user/deposit/crypto-chill"
            element={
              <ProtectedRoute>
                <CryptoChill />
              </ProtectedRoute>
            }
          />
          <Route
            path="/user/invoice"
            element={
              <Invoice />
            }
          />

          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/aml-policy" element={<AMLPolicy />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
