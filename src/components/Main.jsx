import React from "react";
import FormBox from "./FormBox";
import List from "./List";
import { useState } from "react";

const Main = () => {
  const [userInfo, setUserInfo] = useState([]);
  // console.log(userInfo);

  const getUserInfo = (userInfoObj) => {};
  // console.log(userInfoObj);
  setUserInfo([...userInfo, userInfoObj]); //userInfoObj is new addeded data// user ...userInfo to store both old and new data
  // When you pass [...userInfo, userInfoObj] to setUserInfo, you're telling React to replace the current state of userInfo with this new array.
  return (
    <>
      <section>
        <div className="main">
          <FormBox getUserInfo={getUserInfo}></FormBox>
          <List userInfo={userInfo}></List>
        </div>
      </section>
    </>
  );
};

export default Main;
