import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/index.jsx";
import Homepage from "./pages/Homepage/index.jsx";
import SignInPage from "./pages/SignInPage/index.jsx";
import UserPage from "./pages/UserPage/index.jsx";
import Footer from "./components/Footer/index.jsx";
import { useSelector } from "react-redux";
import { isLoggedInSelector } from "./store.js";

function App() {
  const isLoggedIn = useSelector(isLoggedInSelector);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        {isLoggedIn && <Route path="/user" element={<UserPage />} />}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
