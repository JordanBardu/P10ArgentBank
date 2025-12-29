import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/index.jsx";
import Homepage from "./pages/Homepage/index.jsx";
import SignInPage from "./pages/SignInPage/index.jsx";
import UserPage from "./pages/UserPage/index.jsx";
import Footer from "./components/Footer/index.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/profile" element={<UserPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
