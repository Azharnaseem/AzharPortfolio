import { Route, Routes } from "react-router-dom";
// import Home from "../../pages/HomePage/HomePage";

import Home from "../pages/HomePage/HomePage";
import About from "../pages/About/About";
// import Navbar from "../../components/navbar/Navbar";
// import Footer from "../../components/footer/footer";

function UserRoute() {
  return (
    <Routes>
      <Route exact path="/" Component={Home} />
      <Route path="/about" Component={About} />

      {/* <Header /> */}
      {/* <Home /> */}
    </Routes>
  );
}

export default UserRoute;
