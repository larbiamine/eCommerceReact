import { React, useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Announcements from "../components/Announcements";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { ShoppingCartOutlined } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import { userRequest } from "../requestMethodes";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cartRedux";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({
    padding: "10px",
  })}
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
const TopTexts = styled.div`
  ${mobile({
    display: "none",
  })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
  ${mobile({
    display: "none",
  })}
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({
    flexDirection: "column",
  })}
`;
const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({
    flexDirection: "column",
  })}
`;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({
    margin: "5px 15px",
  })}
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200px;
  ${mobile({
    marginBottom: "20px",
  })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;

const ProductId = styled.span``;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;

function Wishlist() {
  const currentUserId = useSelector((state) => state.user.currentUser?._id);
  const [wishlistProducts, setWishlistProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const getList = async () => {
      try {
        const res = await userRequest.get(`wishlist/find/${currentUserId}`);
        setWishlistProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getList();
  }, []);

  const [empty, setEmpty] = useState(true);

  const navigate = useNavigate();

  const deleteProduct = async (e, pid) => {
    e.preventDefault();
    var ls = wishlistProducts;
    ls.pop(pid);
    setWishlistProducts(ls);
    setWishlistProducts(wishlistProducts.filter((p) => p !== pid));
    try {
      const res = await userRequest.put(`wishlist/edit/${currentUserId}`, {
        product_id: pid,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const addToCart = (e, item) => {
    e.preventDefault();
    const size = item.size[0];
    const color = item.color[0];
    const quantity = 1;

    dispatch(addProduct({ ...item, quantity, color, size }));
  };
  useEffect(() => {
    setEmpty(wishlistProducts.length > 0);
  }, [wishlistProducts.length]);

  return (
    <Container>
      <Announcements />
      <Navbar />
      <Wrapper>
        {empty && <Title>Your Wishlist</Title>}
        {!empty && <Title>Your Wishlist is empty</Title>}

        <Top>
          <TopButton onClick={() => navigate("/")}>Continue shopping</TopButton>

          {/* {empty && <TopButton type="filled">Checkout now</TopButton>} */}
          {!empty && <Title></Title>}
        </Top>
        <Bottom>
          <Info>
            {wishlistProducts.map((product, index) => (
              <Product key={index}>
                <ProductDetail>
                  <Image src={product.img}></Image>
                  <Details>
                    <ProductName>
                      {" "}
                      <b>Product</b> {product.title}{" "}
                    </ProductName>
                    <ProductId> {product._id} </ProductId>
                    <ProductColor color={product.color} />
                    <ProductSize>
                      {" "}
                      <b>Size</b> {product.size}{" "}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <IconButton
                      onClick={(e) => {
                        deleteProduct(e, product._id);
                      }}
                    >
                      <DeleteIcon
                        style={{
                          color: "#E62946",
                        }}
                      />
                    </IconButton>
                    <IconButton
                      onClick={(e) => {
                        addToCart(e, product);
                      }}
                    >
                      <ShoppingCartOutlined
                        style={{
                          color: "#497b9d",
                          marginLeft: "15px",
                        }}
                      />
                    </IconButton>
                  </ProductAmountContainer>
                  <ProductPrice>{product.price}$</ProductPrice>
                </PriceDetail>
              </Product>
            ))}
            <Hr />
          </Info>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
}

export default Wishlist;
