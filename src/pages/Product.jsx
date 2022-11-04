import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcements from '../components/Announcements'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'
import imgsrc from "../imgs/categories/2.jpg"
import { Add, Remove } from '@mui/icons-material'
import { mobile } from '../responsive'

const Container = styled.div`

`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({
      padding: "10px",
      flexDirection: "column"
    })}
`
const ImageContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 100%; 
    height: 90vh;
    object-fit: cover;
    ${mobile({
      height: "40vh",
    })}
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({
      padding: "10px",
    })}
`
const Title = styled.h1`
    font-weight: 200;
`
const Description = styled.p`
    margin: 20px 0px;
`
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`
const FilterContainer = styled.div`
    display: flex;
    margin: 30px 0px;
    justify-content: space-between;
    width: 50%;
    ${mobile({
      width: "100%",
    })}
`
const Filter = styled.div`
    display: flex;
    align-items: center;
`

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color };
    margin: 0px 5px;
    cursor: pointer;
`

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`

const FilterSizeOption = styled.option``

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({
      width: "100%",
    })}
`

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`

const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    border-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        border-color: #dde1ef;
    }
`


function Product() {
  return (
    <Container>
        <Announcements/>
        <Navbar/>
        <Wrapper>
            <ImageContainer>
                <Image src={imgsrc} />
            </ImageContainer>
            <InfoContainer>
                <Title>
                    Praesent dapibus eros 
                </Title>
                <Description>
                    Ut mollis eu eros ut placerat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas fermentum tincidunt dui, in scelerisque elit finibus gravida. Vestibulum sit amet odio ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia 
                </Description>
                <Price>
                    20$
                </Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color = "black" />
                        <FilterColor color = "teal" />
                        <FilterColor color = "red" />
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>Xs</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                            </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove/>
                        <Amount>1</Amount>
                        <Add/>
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>

            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
       
    </Container>
  )
}

export default Product