import React from "react";
import img1 from "../assets/images/monkey.png";

export default function SuccessMessage(props) {
  return (
    <div style={{ color: "#fff" }}>
      <h2>You have succesfully registered!</h2>
      <img src={img1} alt="Monkey Illustration" />
      <h4>Your information:</h4>
      <p>First Name: {props.data.firstName}</p>
      <p>Last Name: {props.data.lastName}</p>
      <p>Username: {props.data.username}</p>
      <p>Email: {props.data.email}</p>
    </div>
  );
}
