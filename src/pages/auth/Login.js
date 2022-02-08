import React, { useState } from "react";
import LoginForm from "../../components/forms/LoginForm";
import Button from "../../components/homepage/Button";
import "./auth.css";

const Login = ({ openLoginModal }) => {
  const [show, setShow] = useState(false);
//   const auth = useSelector((state) => state.auth);
//   const { data, isAuthenticated } = auth;

//   if (isAuthenticated) {
//     return <Redirect to='/app/dashboard' />;
//   }

  return (
    <div>
      <LoginForm openLoginModal={openLoginModal} />
    </div>
  );
};

export default Login;
