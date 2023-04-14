import React from "react";
import "./styles.css";
import Navbar from "../../components/navbar/Navbar";
import { App, AppDev } from "../../assets";
import Header from "../../components/Header/Header";
import ServicesSection from "../../components/servicesSection/ServicesSection";

const Home = () => {
  return (
    <div>
      <Header />
      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="col-md-6 ">
              <div className="text">
                Azhar Naseem Frontend Developer in React & React Native
              </div>
              <div className="buttons">
                <a href="#" className="btn btn-primary">
                  Contact
                </a>
                <a href="#" className="btn btn-outline-secondary ms-1">
                  About Me
                </a>
              </div>
            </div>

            <div className="col-md-6">
              <img src={AppDev} alt="hero-img" className=" img-fluid" />
            </div>
          </div>
        </div>
      </section>
      <ServicesSection />
      {/* <Navbar /> */}
    </div>
  );
};

export default Home;
