import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcements from '../components/Announcements'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import { mobile } from '../responsive'

const Container = styled.div`

`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Title = styled.div` 
    margin: 20px;
`
const Filter = styled.h1`
    margin: 20px;
    ${mobile({
      display: "flex",
      flexDirection: "column" , 
      width: "0px 20px",
    })}
`
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({
        marginRight: "0px",
    })}
`
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({
        margin: "10px 0px",
    })}
`

const Option = styled.option``

function ProductList() {
  return (
    <Container>
        <Announcements/>
        <Navbar/>
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products</FilterText>
                <Select>
                    <Option selected disabled >Color</Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Red</Option>
                    <Option>Yellow</Option>
                </Select>
                <Select>
                    <Option selected disabled >Size</Option>
                    <Option>Xs</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products</FilterText>
                <Select>
                    <Option selected >Newest</Option>
                    <Option>Price (asc)</Option>
                    <Option>Price (desc)</Option>

                </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList