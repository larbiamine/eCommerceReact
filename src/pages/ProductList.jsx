import {React, useState} from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcements from '../components/Announcements'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import { mobile } from '../responsive'
import { useLocation } from 'react-router-dom'

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
    const location = useLocation();
    const category= location.pathname.split("/")[2];

    const [filters, setfilters] = useState({});

    const [sort, setSort] = useState("newest");

    const handleFilters = (e) => {
        const value = e.target.value;
        setfilters({
            ...filters,
            [e.target.name] : value
        })
    }

    return (
        <Container>
            <Announcements/>
            <Navbar/>
            <Title>{category}</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products</FilterText>
                    <Select name='color' onChange={handleFilters} >
                        <Option disabled >Color</Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Yellow</Option>
                        <Option>Blue</Option>
                    </Select>
                    <Select name='size' onChange={handleFilters}>
                        <Option disabled >Size</Option>
                        <Option>Xs</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products</FilterText>
                    <Select onChange={(e) => setSort(e.target.value)} >
                        <Option value="newest" >Newest</Option>
                        <Option value="asc" >Price (asc)</Option>
                        <Option value="desc" >Price (desc)</Option>

                    </Select>
                </Filter>
            </FilterContainer>
            <Products 
                category={category}
                filters={filters}
                sort={sort}
            />
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default ProductList