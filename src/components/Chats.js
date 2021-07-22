import React from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../auth/firebase";

const Chats = () => {
  const history = useHistory();

  const handlelogout = async () => {
    await auth.signOut();
    history.push("/");
  };
  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">Helpdesk</div>
        <div onClick={handlelogout} className="logout-tab">
          Logout
        </div>
      </div>
      <h1>Helpdesk</h1>
    </div>
  );
};

export default Chats;
