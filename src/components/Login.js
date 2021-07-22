import React from "react";
import { FacebookOutlined } from "@ant-design/icons";
import firebase from "firebase/app";
import { auth } from "../auth/firebase";

const Login = () => {
  return (
    <div id="login-page">
      <div id="login-card">
        <h2>Welcome to Helpdesk</h2>
        <div
          className="login-button facebook"
          onClick={() =>
            auth
              .signInWithPopup(new firebase.auth.FacebookAuthProvider())
              // .then((res) => console.log(res.credential.accessToken))
              .then((res) =>
                sessionStorage.setItem("Token", res.credential.accessToken)
              )
          }
        >
          <FacebookOutlined /> Sign In with Facebook
        </div>
      </div>
    </div>
  );
};

export default Login;
