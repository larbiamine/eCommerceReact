import { React, useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Announcements from "../components/Announcements";
import { Link } from "react-router-dom";
import { Add, Remove } from "@mui/icons-material";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { useNavigate } from "react-router-dom";
import { userRequest } from "../requestMethodes";

const KEY = import.meta.env.VITE_STRIPE;
// const KEY =
//   "pk_test_51M0rOFITtvnG3529kM8UUelzpLaxIREcrnBKoLh8SdJqLarIPNxidd75y4HFuKTxUml1dlA68e9bg4woiIZVYNbF004uzzDXfY";

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

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;
const SummaryTitle = styled.h1`
  font-weight: 100;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const SummaryButton = styled.button`
  width: 100%;
  background-color: black;
  color: white;
  padding: 10px;
  font-weight: 600;
`;

function Cart() {
  const cart = useSelector((state) => state.cart);
  const currentUserId = useSelector((state) => state.user.currentUser?._id);

  const [empty, setEmpty] = useState(true);

  const [stripetoken, setStripetoken] = useState(null);

  const navigate = useNavigate();

  const onToken = (token) => {
    setStripetoken(token);
  };

  useEffect(() => {
    setEmpty(cart.products.length > 0);
  }, [cart.products.length]);

  useEffect(() => {
    const makerequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripetoken.id,
          amount: cart.total * 100,
        });
        navigate("/success", {
          stripeData: res.data,
          products: cart,
        });
        const address = {
          name: stripetoken.card.name,
          address_line1: stripetoken.card.address_line1,
          state: stripetoken.card.address_state,
          zip: stripetoken.card.address_zip,
          city: stripetoken.card.address_city,
          country: stripetoken.card.address_country,
        };
        await userRequest.post("orders/", {
          userId: currentUserId,
          products: cart.products,
          amount: cart.total,
          address: address,
        });
      } catch (error) {
        console.log(error);
      }
    };
    stripetoken && makerequest();
  }, [cart, stripetoken, cart.total, navigate, currentUserId]);

  return (
    <Container>
      <Announcements />
      <Navbar />
      <Wrapper>
        {empty && <Title>Your Bag({cart.products.length})</Title>}
        {!empty && <Title>Your Cart is empty</Title>}

        <Top>
          <TopButton onClick={() => navigate("/")}>Continue shopping</TopButton>
          <TopTexts>
            <Link to="/wishlist" className="link">
              <TopText>Your Wishlist</TopText>
            </Link>
          </TopTexts>
          {/* {empty && <TopButton type="filled">Checkout now</TopButton>} */}
          {!empty && <Title></Title>}
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product) => (
              <Product key={product._id}>
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
                    <Add />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>
                    {product.price * product.quantity}$
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}
            <Hr />
          </Info>
          {empty && (
            <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>${cart.total}</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Shipping</SummaryItemText>
                <SummaryItemPrice>10$</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Discount</SummaryItemText>
                <SummaryItemPrice>-5$</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type="total">
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice>{cart.total + 10 - 5}$</SummaryItemPrice>
              </SummaryItem>
              {/*  */}
              <StripeCheckout
                name="ecommerce"
                image="https://avatars.githubusercontent.com/u/51280073?s=400&u=49d37ca9632a53164f288c6c109e508df9076651&v=4"
                billingAddress
                shippingAddress
                description={`Your total is$${cart.total}`}
                amount={cart.total * 100}
                token={onToken}
                stripeKey={KEY}
              >
                <SummaryButton>Check Out Now</SummaryButton>
              </StripeCheckout>
            </Summary>
          )}
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
}

export default Cart;
