import {React, useState, useEffect} from 'react'
import styled from 'styled-components'
import Product from "./Product"
import axios from "axios"

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  justify-content: space-between;
`

function Products({category, filters, sort}) {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        let res={};
        if (category) {
          res = await axios.get(`http://localhost:5000/api/products?category=${category}`);
        } else {
          res = await axios.get("http://localhost:5000/api/products");
        }
        
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getProducts();
  }, [category])

  useEffect(() => {
    if (category) {
      setFilteredProducts(
        products.filter(item => Object.entries(filters).every(([key, value])=> 
          item[key].includes(value)
        ))
      )
    }
  }, [products, category, filters])

  useEffect(() => {

    switch (sort) {
      case "newest":
        setFilteredProducts(previous =>
          [...previous].sort((a,b)=> a.createdAt - b.createdAt)
        )
        break;
      case "asc":
        setFilteredProducts(previous =>
          [...previous].sort((a,b)=> a.price - b.price)
        )
        break;
      case "desc":
        setFilteredProducts(previous =>
          [...previous].sort((a,b)=> b.price - a.price)
        )
        break;
        default: console.log();
    }

  }, [sort]);

  return (
    <Container>
        {
          category ? filteredProducts.map(product => (
                <Product item={product} key={product.id} />
              )
            )            
          :
            products.slice(0, 8).map(product => (
              <Product item={product} key={product.id} />
            )
          ) 
        }
    </Container>
  )
}

export default Products