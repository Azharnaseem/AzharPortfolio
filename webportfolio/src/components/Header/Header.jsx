import React from "react";
import "./styles.css";
import TypeMe, { LineBreak, Delete, Delay } from "react-typeme";
import { AppDev, Profile } from "../../assets";

function Header() {
  return (
    <div className="header-wraper">
      <div className="main-info">
        <div className="profileImage">
          <img
            src={Profile}
            alt="hero-img"
            className="img-fluid"
            style={{
              width: "190px",
              borderRadius: "60%",
              // width: 200px;
              height: "190px",
            }}
          />
        </div>
        <h1>
          hello I AM{" "}
          <TypeMe
            typingSpeed={200}
            loop
            backspaceDelay={2000}
            className={"type"}
            strings={["AZHAR NASEEM", <Delete />, <Delay ms={2000} />]}
          />
        </h1>
        <h1>Web and Mobile App Developer(IOS & android)</h1>
        <TypeMe
          typingSpeed={200}
          loop
          backspaceDelay={10}
          className={"type"}
          //   deleteSpeed={2000}
          strings={[
            // <Speed ms={40} />,
            "React responsive websites",
            // <LineBreak />,
            <Delay ms={2000} />,
            <Delete />,
            "React Native mobile Apps Android and ios ",
            <Delay ms={1000} />,
          ]}
        />
      </div>
    </div>
  );
}

export default Header;
