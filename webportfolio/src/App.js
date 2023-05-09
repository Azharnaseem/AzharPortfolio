import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "../../webportfolio/src/components/heroSection";
import Home from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
// import Hero from "./pages/home/home";
// import { Navbar } from "./components";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Footer from "./components/footer/footer";
import SiteLayout from "./layout/siteLayout/SiteLayout";
import AuthLayout from "./layout/authLayout/AuthLayout";
// import SiteLayout from "./layout/siteLayout/SiteLayout";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";

function App() {
  const user = useSelector((state) => state.user.user);

  // console.log(user);

  return <>{!user ? <AuthLayout /> : <SiteLayout />}</>;
}

export default App;
