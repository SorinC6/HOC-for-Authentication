import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = () => {
    const userCreds = {
      name,
      password
    };

    axios
      .post(
        "https://kitchen-soup-backend.herokuapp.com/api/users/login",
        userCreds
      )
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <Wrapper>
      <h1>Login </h1>
    </Wrapper>
  );
};
export default Login;

const Wrapper = styled.div`
  background-color: lightgoldenrodyellow;
  background-size: cover;
  height: 86vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 14vh;
`;
