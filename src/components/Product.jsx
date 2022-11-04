import React from 'react'
import styled from 'styled-components'
import {FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
// import SearchIcon from '@mui/icons-material/SearchIcon'

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-height: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FFCDB2;
    position: relative;
`
const Image = styled.img`
    height: 75%;
    z-index: 2;
`
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
    &:hover{
        opacity: 1;
    }
`
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
    &:hover{
        background-color: #FFCDB2;
        transform: scale(1.2);
        cursor: pointer;
    }

`

function Product({item}) {
  return (
    <Container>
        {/* <Circle/> */}
        <Image src={item.img} />
        <Info>
            <Icon>
                <ShoppingCartOutlined/>
            </Icon>
            <Icon>
                <SearchOutlined/>
            </Icon>
            <Icon>
                <FavoriteBorderOutlined/>
            </Icon>
        </Info>
    </Container>
  )
}

export default Product