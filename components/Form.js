import { useState } from "react";
import Router, { useRouter } from "next/router";
import { FormContainer } from "./StyledElements";
import { setSession, checkSession } from "../utils/session";

export default function Form() {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const router = useRouter();
  console.log(router);

  function handleChange(e) {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  }

  function clearStateAndRedirect(sessionName, userData) {
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

  async function handleSubmit(e) {
    e.preventDefault();
    const sessionName = "user";
    if (router.pathname === "/register") {
      if (userInfo.password !== userInfo.repeatPassword) {
        return;
      }
      const userData = userInfo;
      delete userData.repeatPassword;
      userData.id = Math.floor(Math.random() * 6);
      clearStateAndRedirect(sessionName, userData);
    }
    if (router.pathname === "/login") {
      const userData = userInfo;
      delete userData.repeatPassword;
      delete userData.firstName;
      delete userData.lastName;
      delete userData.username;
      userData.id = Math.floor(Math.random() * 6);

      clearStateAndRedirect(sessionName, userData);
    }
  }
  return (
    <FormContainer onSubmit={(e) => handleSubmit(e)}>
      {router.pathname === "/register" ? (
        <>
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
        </>
      ) : (
        <>
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
          />{" "}
        </>
      )}
      <input type="submit" value="Submit" />
    </FormContainer>
  );
}
