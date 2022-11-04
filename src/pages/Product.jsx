import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcements from '../components/Announcements'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'
import imgsrc from "../imgs/categories/2.jpg"

const Container = styled.div`

`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`
const ImageContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 100%; 
    height: 90vh;
    object-fit: cover;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
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
`

const FilterSize = styled.select``

const FilterSizeOption = styled.option``


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

            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
       
    </Container>
  )
}

export default Product