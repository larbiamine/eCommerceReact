import React from 'react'
import styled from 'styled-components'
import {categories} from "../data" 
import CategoryItem from "./CategoryItem"
import {mobile} from '../responsive'

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({
    padding: "0px",
    flexDirection: "column"
  })}
`

function Categories() {
  return (
    <Container>
        {
          categories.map(cat => (
            <CategoryItem item={cat} key={cat.id} />
          )
           )
        }
    </Container>
  )
}

export default Categories