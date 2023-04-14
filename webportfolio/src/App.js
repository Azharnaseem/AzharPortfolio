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

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/about" Component={About} />

        {/* <Header /> */}
        {/* <Home /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
