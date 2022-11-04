import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient( #457b9d82, #457b9d2c ), url("https://images.pexels.com/photos/3944690/pexels-photo-3944690.jpeg")
      center;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
`
const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
    ${mobile({
      width: "80%",
    })}
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: #457B9D;
    color: white;
    cursor: pointer;
    margin: 10px;
`
const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`

function Login() {
  return (
    <Container>

        <Wrapper>
          <Title>Sign In</Title>
          <Form>
            <Input placeholder = "Email" />
            <Input placeholder = "Password" />

            <Button>Login</Button>
            <Link>Forgot Password</Link>
            <Link>Create a new account</Link>
          </Form>
        </Wrapper>
    </Container>
  )
}

export default Login