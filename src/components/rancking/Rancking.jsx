import React, { useState, useEffect } from "react";

import "../rancking/rancking.css";
function Rancking() {
  const [listUsers, setListUsers] = useState([]);
  const userCuantity = listUsers.length;

  const getListUsers = async () => {
    await fetch("https://teal-api.up.railway.app/users", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setListUsers(data.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getListUsers();
  }, []);

  return (
    <div className="rancking-container">
      <h2 className="title-rancking">Rancking de clientes</h2>
      {listUsers.map((users, i) => {
        let percentage = (userCuantity - i) * 10;
        percentage = percentage>=60?60:percentage;
        return (
          <div className="rancking-user_container">
            <h3 className="rancking-user_position">{i + 1}</h3>
            <img
              className="rancking-user_image"
              src="../../../assets/pagesImages/user.png"
              alt="user"
            />
            <p className="rancking-user_name">
              {users.firtName + " " + users.lastName}
            </p>
            <h3 className="rancking-user_sale">{percentage}%</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Rancking;
