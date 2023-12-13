import React from "react";
import Card from "./Card";

const List = (props) => {
  // Optional: Log statements outside of return
  // console.log(props);

  return (
    <>
      {props.userInfo.length > 0 ? (
        props.userInfo.map((info) => {
          // console.log(info); // Log statement for each user info
          return (
            <Card css={"card-mt"} key={info.email}>
              <div className="list">
                <p>Name : {info.name}</p>
                <p>From : {info.live}</p>
                <p>Email : {info.email}</p>
              </div>
            </Card>
          );
        })
      ) : (
        <Card css={"card-mt"}>
          <div className="list">Please add new user</div>
        </Card>
      )}
    </>
  );
};

export default List;
