import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../components/provider/userProvider.component";
import "./loginPage.css";
import libr from "../../assets/images/libr.jpg";
const LoginPage = () => {
  const { handleUserLogin, user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      window.google.accounts.id.initialize({
        client_id:
          "1048529575002-k9cleke1b0v0b9iv27olb4illkqu66mm.apps.googleusercontent.com",
        callback: handleUserLogin,
      });
      window.google.accounts.id.renderButton(
        document.getElementById("signInDiv"),
        {
          theme: "outline",
          size: "large",
        }
      );
    }
  }, []);
  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else if (user) {
      navigate("/library");
    }
  }, [user]);
  return (
    <div className="login">
      <img src={libr} alt="" />
      <form>
        <h2> Welcome! </h2>
        <h4 className="login-text">Please, sign in</h4>
        <input className="input" type="email" placeholder="Email" />
        <input className="input" type="password" placeholder="Password" />
        <button className="btn">Sign in</button>
        <div className="google-signin">
          <h5>Sign in with google</h5>
          <span id="signInDiv"></span>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
