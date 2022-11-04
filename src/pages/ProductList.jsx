import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcements from '../components/Announcements'

const Container = styled.div`

`
function ProductList() {
  return (
    <Container>
        <Announcements/>
        <Navbar/>
        <FilterContainer>
            
        </FilterContainer>
    </Container>
  )
}

export default ProductList