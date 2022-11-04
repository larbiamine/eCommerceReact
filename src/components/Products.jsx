import React from 'react'
import styled from 'styled-components'
import {popularProducts} from "../data" 
import Product from "./Product"

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  justify-content: space-between;
`

function Products() {
  return (
    <Container>
        {
          popularProducts.map(product => (
            <Product item={product} key={product.id} />
          )
           )
        }
    </Container>
  )
}

export default Products