import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../components/provider/userProvider.component";

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
  return <div id="signInDiv">LoginPage</div>;
};

export default LoginPage;
