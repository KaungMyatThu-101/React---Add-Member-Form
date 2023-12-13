import React, { useState } from "react";
import Card from "./Card";

const FormBox = (props) => {
  const [name, setName] = useState("");
  const [live, setLive] = useState("");
  const [email, setEmail] = useState("");

  const addUser = (event) => {
    event.preventDefault();

    if (
      name.trim().length === 0 ||
      live.trim().length === 0 ||
      email.trim().length === 0
    ) {
      window.confirm("Please enter user data");
      return;
    } else {
      setName("");
      setLive("");
      setEmail("");
    }
    const userInfo = { name, live, email };
    // console.log(userInfo);

    props.getUserInfo(userInfo);
  };

  return (
    <Card>
      <form onSubmit={addUser}>
        <div className="form-div">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>
        <div className="form-div">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            value={live}
            onChange={(event) => {
              setLive(event.target.value);
            }}
          />
        </div>
        <div className="form-div">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <div className="btn">
          <button className="add">Add User</button>
        </div>
      </form>
    </Card>
  );
};

export default FormBox;
