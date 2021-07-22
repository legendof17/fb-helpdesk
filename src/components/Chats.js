import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../auth/firebase";
import { useAuth } from "../contexts/AuthContext";
import Logo from "../static files/image.png";
import { FaInbox as Inbox } from "react-icons/fa";
import { IoMdPeople as Friends } from "react-icons/io";
import Graphw from "../static files/graphw.png";
import Graphb from "../static files/graphb.png";

const Chats = () => {
  const history = useHistory();

  const { user } = useAuth();

  const [messagehoverColor, setmessagehoverColor] = useState("white");
  const [friendshoverColor, setfriendshoverColor] = useState("white");
  const [graphImage, setgraphImage] = useState(Graphw);
  const [userPicture, setuserPicture] = useState(null);

  useEffect(() => {
    try {
      let accessToken = sessionStorage.getItem("Token");
      setuserPicture(user.photoURL + "?access_token=" + accessToken);
    } catch (e) {}
  }, [user]);

  //   console.log(user);

  const handlelogout = async () => {
    await auth.signOut();
    history.push("/");
  };
  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">
          <img className="logo" src={Logo} alt="Helpdesk" />
        </div>
        <div className="logo-tab inbox-tab">
          <Inbox
            fill={messagehoverColor}
            onMouseEnter={() => {
              setmessagehoverColor("#074c94");
            }}
            onMouseLeave={() => {
              setmessagehoverColor("white");
            }}
            style={{ height: "20px", padding: "18px" }}
          />
        </div>
        <div className="logo-tab inbox-tab">
          <Friends
            fill={friendshoverColor}
            onMouseEnter={() => {
              setfriendshoverColor("#074c94");
            }}
            onMouseLeave={() => {
              setfriendshoverColor("white");
            }}
            style={{ width: "46px", padding: "12px" }}
          />
        </div>
        <div className="inbox-tab graph-tab">
          <img
            src={graphImage}
            onMouseEnter={() => {
              setgraphImage(Graphb);
            }}
            onMouseLeave={() => {
              setgraphImage(Graphw);
            }}
            alt="Analytics"
          />
        </div>
        <div onClick={handlelogout} className="logout-tab">
          <img
            className="profile-picture"
            src={userPicture}
            alt="ProfilePicture"
          />
          <span class="logged-in">●</span>
        </div>
      </div>
      {/* <h1>Helpdesk</h1> */}
    </div>
  );
};

export default Chats;
