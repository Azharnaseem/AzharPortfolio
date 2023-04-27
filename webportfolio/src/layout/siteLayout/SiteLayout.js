import { Route, Routes } from "react-router-dom";
import Home from "../../pages/HomePage/HomePage";
import About from "../../pages/About/About";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/footer";
import UserRoute from "../../routes/UserRoute";

function SiteLayout() {
  return (
    <>
      <Navbar />
      <UserRoute />
      <Footer />
    </>
  );
}

export default SiteLayout;
