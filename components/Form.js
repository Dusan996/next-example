import { useState } from "react";
import Router from "next/router";
import styled from "styled-components";

import { setSession, checkSession } from "../utils/session";

const FormContainer = styled.form`
  width: 70%;
  margin: auto;
  & input {
    border: 1px solid #d3d3d3;
    width: 80%;
    margin: 0 auto 15px auto;
    display: block;
    padding: 5px;
    border-radius: 5px;
    color: black;
  }
  ,
  & label {
    width: 80%;
    margin: 2px auto;
    display: block;
  }
`;

export default function Form() {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }

  function handleChange(e) {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  }

  const isAnyEmpty = (curr) => curr === "";
  async function handleSubmit(e) {
    e.preventDefault();
    const sessionName = "user";

    if (userInfo.password !== userInfo.repeatPassword) {
      return;
    }
    const userData = userInfo;
    delete userData.repeatPassword;
    userData.id = Math.floor(Math.random() * 6);
    setSession(sessionName, userData);
    setUserInfo({
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      repeatPassword: "",
    });
    checkSession(sessionName, () => {
      Router.push("/");
    });
  }
  return (
    <FormContainer onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="firstName">First Name:</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        onChange={(e) => handleChange(e)}
        value={userInfo.firstName}
      />
      <label htmlFor="lastName">Last Name:</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        onChange={(e) => handleChange(e)}
        value={userInfo.lastName}
      />
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        name="username"
        onChange={(e) => handleChange(e)}
        value={userInfo.username}
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        onChange={(e) => handleChange(e)}
        value={userInfo.email}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        onChange={(e) => handleChange(e)}
        value={userInfo.password}
      />
      <label htmlFor="repeatPassword">Password Repeat:</label>
      <input
        type="password"
        id="repeatPassword"
        name="repeatPassword"
        onChange={(e) => handleChange(e)}
        value={userInfo.repeatPassword}
      />
      <input type="submit" value="Submit" />
    </FormContainer>
  );
}
