import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";

const Login = props => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = () => {
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
        props.history.push("/home");
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <Wrapper>
      <LoginContainer>
        <ImageContainer />
        <Title>Soup Kitchen</Title>
        <LoginForm
          onSubmit={e => {
            e.preventDefault();
            loginUser();
          }}
        >
          <InputText
            type="text"
            placeholder="name"
            onChange={e => setName(e.target.value)}
          />
          <InputText
            type="password"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
          />
          <LoginButton type="submit" value="Log In" />
          <LinkButton to="/register" className="link-button">
            New User? Register here.
          </LinkButton>
        </LoginForm>
      </LoginContainer>
    </Wrapper>
  );
};
export default withRouter(Login);

const Wrapper = styled.div`
  background-color: lightgoldenrodyellow;
  background-size: cover;
  height: 86vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 14vh;
`;

const LoginContainer = styled.div`
  margin: 30px 0 0 0;
  width: 100%;
  height: 450px;
  background: #fff;
  border: 1px solid #e2e2e2;
  border-radius: 3px;
  box-shadow: 0 0 30px black;
`;

// const RegisterContainer = styled.div`
//   margin: 30px 0 0 0;
//   width: 100%;
//   height: 580px;
//   background: #fff;
//   border: 1px solid #e2e2e2;
//   border-radius: 3px;
//   box-shadow: 0 0 30px black;
// `;

const ImageContainer = styled.div`
  width: 54%;
  margin: 21px auto;
`;

// const Image = styled.img`
//   width: 100%;
//   height: auto;
// `;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 6px 10%;
`;

const InputText = styled.input`
  height: 33px;
  margin: 0 0 7px 0;
  padding: 0 0 0 9px;
  border: 1px solid #edecec;
  background: #f9f9f9;
  border-radius: 3px;
  -webkit-appearance: none;
  font-size: 14px;
`;

const LoginButton = styled.input`
  height: 32px;
  background: #d66565;
  color: #fff;
  opacity: 0.65;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
`;

const LinkButton = styled(Link)`
  color: blue;
  border-radius: 5px;
  border: none;
  background-color: white;
  padding: 10px;
  margin-top: 20px;
  text-decoration: none;
  color: purple;
`;

const Title = styled.h1`
  text-align: center;
  letter-spacing: 0.5px;
  font-weight: normal;
  color: #5a0c0c;
  font-size: 1.8rem;
`;
