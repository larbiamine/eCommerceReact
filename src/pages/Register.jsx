import { React, useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { publicRequest } from "../requestMethodes";
import { Link } from "react-router-dom";
import { login } from "../redux/apiCalls";
import { useDispatch } from "react-redux";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(#afbbf286, #afbbf24c),
    url("https://images.pexels.com/photos/10002660/pexels-photo-10002660.jpeg")
      center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
`;
const Wrapper = styled.div`
  width: 40%;
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
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
const Agreement = styled.span`
  font-size: 20px;
  margin: 20px 0px;
  text-decoration: none;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #8fa1f1;
  color: white;
  cursor: pointer;
`;
const Error = styled.span`
  flex: 1;
  color: #bc5656;
  margin-top: 15px;
`;

function Register() {
  const [registerError, setRegisterError] = useState("");
  const [validError, setvalidError] = useState(false);
  const [pwderror, setpwderror] = useState(false);
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const dispatch = useDispatch();

  const handleCpassword = (e) => {
    setCpassword(e.target.value);
    setpwderror(!(e.target.value === password));
  };

  const handleClick = (e) => {
    e.preventDefault();

    const register = async () => {
      const user = {
        name: name,
        lastname: lastname,
        username: username,
        email: email,
        password: password,
      };
      var res;
      try {
        res = await publicRequest.post("auth/register", user);
        // navigate("/login");
        login(dispatch, { username: username, password: password });
      } catch (error) {
        setRegisterError(error.response.data);
        console.log(error.response.data);
      }
    };

    if (!cpassword || !password || !email || !username || !lastname || !name) {
      setvalidError(true);
    } else {
      setvalidError(false);
      register();
    }

    //
  };

  return (
    <Container>
      <Wrapper>
        <Title>Create an account</Title>
        <Form>
          <Input onChange={(e) => setName(e.target.value)} placeholder="name" />
          <Input
            onChange={(e) => setLastname(e.target.value)}
            placeholder="lastname"
          />
          <Input
            onChange={(e) => setUsername(e.target.value)}
            placeholder="username"
          />
          <Input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
          />
          <Input
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
          <Input
            onChange={(e) => {
              setCpassword(e.target.value);
              handleCpassword(e);
            }}
            placeholder="confirm password"
          />
          {validError && <Error> Please Fill in all fields </Error>}
          {pwderror && <Error> Passwords dont match </Error>}
          {registerError && <Error> {registerError} </Error>}
          <Agreement>
            By creating an account, I agree to the
            <Link to="/tos">
              <b> Terms of service.</b>
            </Link>
          </Agreement>
          <Button onClick={(e) => handleClick(e)}>Create Account</Button>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default Register;
