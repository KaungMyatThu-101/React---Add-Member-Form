import React, { useState } from "react";
import FormBox from "./FormBox";
import List from "./List";

const Main = () => {
  const [userInfo, setUserInfo] = useState([]);

  const getUserInfo = (userInfoObj) => {
    setUserInfo([...userInfo, userInfoObj]); // Now correctly placed inside the function
  };

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
