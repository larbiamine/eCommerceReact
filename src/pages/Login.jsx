import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(#457b9d82, #457b9d2c),
    url("https://images.pexels.com/photos/3944690/pexels-photo-3944690.jpeg")
      center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
`;
const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({
    width: "80%",
  })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;
const Error = styled.span`
  color: red;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #457b9d;
  color: white;
  cursor: pointer;
  margin: 10px;
  &:disabled {
    background-color: gray;
    cursor: not-allowed;
  }
`;
// const Link = styled.a`
//   margin: 5px 0px;
//   font-size: 12px;
//   text-decoration: underline;
//   cursor: pointer;
// `;

const StyledLink = styled(Link)`
  color: black;
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const { isFetching, error } = useSelector((state) => state.user);

  const handleChange = (e) => {
    if (e.target.placeholder === "Password") {
      setPassword(e.target.value);
    } else {
      setUsername(e.target.value);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username: username, password: password });
  };
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <Form>
          <Input
            onChange={(e) => {
              handleChange(e);
            }}
            placeholder="Username"
          />
          <Input
            onChange={(e) => {
              handleChange(e);
            }}
            type="password"
            placeholder="Password"
          />

          <Button onClick={handleClick} disabled={isFetching}>
            Login
          </Button>
          {error && <Error> Something went Wrong</Error>}
          <StyledLink>Forgot Password</StyledLink>
          <StyledLink to="/register">Create a new account</StyledLink>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default Login;
