import React from "react";
import "./styles.css";
import TypeMe, { LineBreak, Delete, Delay } from "react-typeme";
import ServicesCard from "../ServicesCard/ServiceCard";

function ServicesSection() {
  return (
    <section className="setup">
      <div className="container">
        <div className="text-header text-center">
          <h3>Our Services</h3>
          <p>We provide best Work to worlwide Clients</p>
        </div>
        <div className="item ">
          <div className="row ">
            <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center align-items-center">
              <ServicesCard
                title="Web Development"
                subtitle="React responsive"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center align-items-center">
              <ServicesCard title="App Development" />
            </div>
            <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center align-items-center">
              <ServicesCard title="UI/UX" subtitle="Mobile & Web" />
            </div>
            <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center align-items-center">
              <ServicesCard title="WordPress" subtitle="e-Commerce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
