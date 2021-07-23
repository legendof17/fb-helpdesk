import React from "react";
import "./Chatscontainer.css";
import { RiMenu2Line as Menu } from "react-icons/ri";
import { AiOutlineReload as Reload } from "react-icons/ai";

const Chatscontainer = () => {
  return (
    <div className="chats-body">
      <div className="blocks chats-container">
        <div className="conversations">
          <Menu className="blocks menu" />
          <h3 className="blocks ctitle">Conversations</h3>
          <Reload className="blocks reload" />
        </div>
        <div className="conversations-list">
          <h1>List</h1>
        </div>
      </div>
      <div className="blocks messages-body">
        <div className="messages-header">
          <h4>Amit RG</h4>
          <div className="messages">This is api data</div>
        </div>
      </div>
      <div className="blocks client-contact-body">
        <div className="client-contact">
          <h3>Clients</h3>
        </div>
        <div className="client-contact-list">
          <h3>List</h3>
        </div>
      </div>
    </div>
  );
};

export default Chatscontainer;
