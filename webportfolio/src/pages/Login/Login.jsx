import React from "react";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../Redux/Actions";

const Login = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const isLogin = useSelector((state) => state.user.user);
  console.log("user data is ", isLogin);
  const dispatch = useDispatch();
  // const handleLogin = () => {
  //   dispatch(userLogin({ name: "azhar" }));
  //   // navigate("/Home");
  // };

  return (
    <div className="container  text-center ">
      <h1> Login Page Page </h1>
      <a
        //   onClick={handleLogin()}
        // href={Resume}
        className="btnn btn-outline-light fw-bold"
        type="submit"
      >
        Login
      </a>
    </div>
  );
};
export default Login;
