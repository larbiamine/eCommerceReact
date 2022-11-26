import { useState } from "react";
import styled from "styled-components";
import { addProduct } from "../redux/cartRedux";
import { addProductw } from "../redux/wishlistRedux";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userRequest } from "../requestMethodes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  const user = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();

  const addToCart = (item) => {
    const size = item.size[0];
    const color = item.color[0];
    const quantity = 1;
    dispatch(addProduct({ ...item, quantity, color, size }));

    toast.info(`Item added to Cart: ${item.title}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const addToWishlist = async (item) => {
    const toastSetup = {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    };
    if (!user) navigate("/login");
    else {
      try {
        const res = await userRequest.post(`wishlist/${user._id}`, {
          productId: item._id,
        });
        if (res.data === "Product already exists") {
          toast.info(`Product already exists`, toastSetup);
        } else {
          dispatch(addProductw(item));
          toast.success(`Item added to Wishlist: ${item.title}`, toastSetup);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Container>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
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
        <Icon
          onClick={() => {
            addToWishlist(item);
          }}
        >
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
}

export default Product;
