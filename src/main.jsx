import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/css/main.css";
import Homepage from "./pages/Homepage/index.jsx";
import SignInPage from "./pages/SignInPage/index.jsx";
import DashboardPage from "./pages/DashboardPage/index.jsx";
import Header from "./components/Header/index.jsx";
import Footer from "./components/Footer/index.jsx";
import '@fortawesome/fontawesome-free/css/all.min.css';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        {/*Route à condtionner si on a bien un token (que l'utilisateur est loggé)*/}
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </StrictMode>,
);
