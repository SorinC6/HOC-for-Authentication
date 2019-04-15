import react, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const registerUser = () => {
    const userCreds = {
      name,
      password,
      email,
      role
    };
  };
  axios
    .post(
      "https://kitchen-soup-backend.herokuapp.com/api/users/register",
      userCreds
    )
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });

  return (
    <Wrapper>
      <h1>Register </h1>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-image: url(${background});
  background-size: cover;
  height: 86vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 14vh;
`;
