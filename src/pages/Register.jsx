import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient( #afbbf286, #afbbf24c ), url("https://images.pexels.com/photos/10002660/pexels-photo-10002660.jpeg")
      center;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    
`
const Wrapper = styled.div`
    width: 40%;
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
    flex-wrap: wrap;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`
const Agreement = styled.span`
  font-size: 20px;
  margin: 20px 0px;
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: #8fa1f1;
    color: white;
    cursor: pointer;
`

function Register() {
  return (
    <Container>

        <Wrapper>
          <Title>Create an account</Title>
          <Form>
            <Input placeholder = "name" />
            <Input placeholder = "lastname" />
            <Input placeholder = "username" />
            <Input placeholder = "email" />
            <Input placeholder = "password" />
            <Input placeholder = "confirm password" />
            <Agreement>
              Donec tristique risus eu scelerisque faucibus. Duis vulputate mi eget ante <b>consequat rutrum.</b>  
            </Agreement>
            <Button>Create Account</Button>
          </Form>
        </Wrapper>
    </Container>
  )
}

export default Register