import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "../../webportfolio/src/components/heroSection";
import Home from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
// import Hero from "./pages/home/home";
// import { Navbar } from "./components";

function App() {
  return (
    <>
      <Navbar />

      <Header />
      <Home />
      {/* <HeroSection /> */}
    </>
  );
}

export default App;
