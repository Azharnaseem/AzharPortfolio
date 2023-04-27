import { Route, Routes } from "react-router-dom";
import Home from "../../pages/HomePage/HomePage";
import About from "../../pages/About/About";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/footer";
import UserRoute from "../../routes/UserRoute";
import Login from "../../pages/Login/Login";

function AuthLayout() {
  return <Login />;
}

export default AuthLayout;
