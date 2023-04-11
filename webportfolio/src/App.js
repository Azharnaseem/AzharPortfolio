import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "../../webportfolio/src/components/heroSection";
// import { Navbar } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
    </>
  );
}

export default App;
