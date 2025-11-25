import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/css/main.css";
import Homepage from "./pages/Homepage/index.jsx";
import SignInPage from "./pages/SignInPage/index.jsx";
import Header from "./components/Header/index.jsx";
import Footer from "./components/Footer/index.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import UserPage from "./pages/UserPage/index.jsx";

const isLogged = false;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        {isLogged && <Route path="/user" element={<UserPage />} />}
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
);
