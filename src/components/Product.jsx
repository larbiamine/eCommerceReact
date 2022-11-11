import React from "react";
import styled from "styled-components";
import { addProduct } from "../redux/cartRedux";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
// import SearchIcon from '@mui/icons-material/SearchIcon'

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-height: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffcdb2;
  position: relative;
`;
const Image = styled.img`
  height: 75%;
  z-index: 2;
  mix-blend-mode: multiply;
`;
const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #ffb4a14b;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  &:hover {
    opacity: 1;
  }
`;
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #ffcdb2;
    transform: scale(1.2);
    cursor: pointer;
  }
`;

function Product({ item }) {
  const dispatch = useDispatch();

  const addToCart = (item) => {
    const size = item.size[0];
    const color = item.color[0];
    const quantity = 1;

    dispatch(addProduct({ ...item, quantity, color, size }));
  };

  return (
    <Container>
      {/* <Circle/> */}
      <Image src={item.img} />
      <Info>
        <Icon
          onClick={() => {
            addToCart(item);
          }}
        >
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <Link to={`/product/${item._id}`}>
            <SearchOutlined />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
}

export default Product;
