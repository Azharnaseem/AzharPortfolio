import React from "react";
import "./styles.css";
import TypeMe, { LineBreak, Delete, Delay } from "react-typeme";

function Header() {
  return (
    <div className="header-wraper">
      <div className="main-info">
        <h1>Web development and Mobile Apps (IOS & android)</h1>
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