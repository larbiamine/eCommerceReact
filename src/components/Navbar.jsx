
import { BsSearch } from 'react-icons/bs';
import styled from 'styled-components'
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import {mobile} from '../responsive';
import {useSelector} from "react-redux";
import { Link } from "react-router-dom";

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


function Navbar() {

    const quantity = useSelector(state => state.cart.quantity)

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
                <Link to="/register" >
                    <MenuItem>
                        Register
                    </MenuItem>
                </Link>
                
                <Link to="/login" >
                    <MenuItem>
                        Sign in
                    </MenuItem>
                </Link>

                <Link to="/cart" >
                    <MenuItem>
                        <Badge badgeContent={quantity} color="primary">
                            <ShoppingCartOutlinedIcon color="action" />
                        </Badge>
                    </MenuItem>
                </Link>
            </Right>
        </Wrapper>

    </Container>
    )
}

export default Navbar