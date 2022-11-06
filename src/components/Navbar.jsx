
import { BsSearch } from 'react-icons/bs';
import styled from 'styled-components'
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import {mobile} from '../responsive'

const Container = styled.div`
    height: 80px;
    margin-bottom: 20px;
    /* background-color: #AFBBF2; */
    ${mobile({
        height: "50px",
        marginBottom: "40px"
    })}
`
const Wrapper = styled.div`
    padding : 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({
        padding: "10px 0px"
    })}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    ${mobile({
        display: "none"
    })}
`
const Language = styled.span `
    font-size: 14;
    color: #292e2e;
    cursor: pointer;
    ${mobile({
        display: "none"
    })}
`
const SearchContainer = styled.div `
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    ${mobile({
        display: "none"
    })}
`
const Input = styled.input`
    border: none;
    ${mobile({
        width: "50px"
    })}
`

const Center = styled.div`
    flex: 1;
    text-align: center;
    
    ${mobile({
        marginLeft: "20px"
    })}
`
const Logo = styled.h1`
    font-weight: bold;
    color: #292e2e;
    ${mobile({
        fontSize: "24px"
    })}
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ 
        flex: 2, 
        justifyContent: "center" 
    })}
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    color: #292e2e;
    ${mobile({
        fontSize: "12px",
        marginLeft: "10px"
    })}
`
const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`

function Navbar() {

  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    
                    <Input placeholder='Search' />
                    <BsSearch style={{color: "gray", fontSize:16}} />
                </SearchContainer>
            </Left>
            <Center>
                <Logo>
                    eCommerce
                </Logo>
            </Center>
            <Right>
                <MenuItem>
                    <Link href="/register" >Register</Link>
                </MenuItem>
                
                <MenuItem>
                    <Link href="/login" >Sign in</Link>
                </MenuItem>
                <Badge badgeContent={4} color="primary">
                    
                    <ShoppingCartOutlinedIcon color="action" />
                </Badge>
            </Right>
        </Wrapper>

    </Container>
  )
}

export default Navbar