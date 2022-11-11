import { React, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({
    height: "20vh",
  })}
  filter: brightness(75%);
  filter: ${(props) => props.darken === true && "brightness(45%)"};
  transition: filter 150ms linear;
`;
const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: black;
  cursor: pointer;
  font-weight: 500;
  font-size: 15px;
  border-radius: 10px;
  &:hover {
    background-color: #dadada;
  }
`;
function CategoryItem({ item }) {
  const [btnHover, setBtnHover] = useState(false);
  return (
    <Container>
      <Link to={`products/${item.category}`}>
        <Image darken={btnHover} src={item.img} />
        <Info>
          <Title> {item.title} </Title>
          <Button
            onMouseEnter={() => setBtnHover(true)}
            onMouseLeave={() => setBtnHover(false)}
          >
            Shop Now
          </Button>
        </Info>
      </Link>
    </Container>
  );
}

export default CategoryItem;
