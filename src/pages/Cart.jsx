import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Announcements from '../components/Announcements'

import img1 from '../imgs/cart/1.png'
import img2 from '../imgs/cart/2.png'
import { Add, Remove } from '@mui/icons-material'

const Container = styled.div`

`
const Wrapper = styled.div`
    padding: 20px;
`
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props) => props.type === "filled" && "none" };
    background-color: ${(props) => props.type === "filled" ? "black" : "transparent"};
    color: ${(props) => props.type === "filled" && "white" };
`
const TopTexts = styled.div`

`
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px ;
`
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`
const Info = styled.div`
    flex: 3;
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    
    `
const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    `
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    `
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    `
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200px;
    `


const ProductDetail = styled.div`
    flex: 2;
    display: flex;
    
    `
const Image = styled.img`
    width: 200px;
    
    `
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    `
const ProductName = styled.span``

const ProductId = styled.span``

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  `
const ProductSize = styled.span``

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray ;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`
const SummaryTitle = styled.h1`
    font-weight: 100;
`

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" && "500"};
    font-size: ${props => props.type === "total" && "24px"};
`

const SummaryItemText = styled.span``

const SummaryItemPrice = styled.span``

const SummaryButton = styled.button`
    width: 100%;
    background-color: black;
    color: white;
    padding: 10px;
    font-weight: 600;
`

function Cart() {
  return (
    <Container>
        <Announcements/>
        <Navbar/>
        <Wrapper>
            <Title>Your Bag</Title>
                           
            <Top>
                <TopButton>Continue shopping</TopButton>
                <TopTexts>
                    <TopText>Shopping bag(2)</TopText>
                    <TopText>Your Wishlist</TopText>
                </TopTexts>
                <TopButton type='filled' >Checkout now</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <Image src={img1} ></Image>
                        <ProductDetail>
                            <Details>
                                <ProductName> <b>Product</b> Nike </ProductName>
                                <ProductId> 547641656 </ProductId>
                                <ProductColor color='grey' />
                                <ProductSize> <b>Size</b> 42 </ProductSize>

                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>2</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                        <ProductPrice>25$</ProductPrice>    
                        </PriceDetail>
                    </Product>
                    <Hr/>
                    <Product>
                        <Image src={img2} ></Image>
                        <ProductDetail>
                            <Details>
                                <ProductName> <b>Product</b> Shoes </ProductName>
                                <ProductId> 547647556 </ProductId>
                                <ProductColor color='brown' />
                                <ProductSize> <b>Size</b> 42 </ProductSize>

                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>1</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                        <ProductPrice>35$</ProductPrice>    
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>50$</SummaryItemPrice>
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
                        <SummaryItemText  >Total</SummaryItemText>
                        <SummaryItemPrice>55$</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryButton>Check Out Now</SummaryButton>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer />
    </Container>
  )
}

export default Cart