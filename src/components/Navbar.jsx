
import { BsSearch } from 'react-icons/bs';
import styled from 'styled-components'
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Container = styled.div`
    height: 80px;
    
    
`
const Wrapper = styled.div`
    padding : 0px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Language = styled.span `
    font-size: 14;
    cursor: pointer;
`
const SearchContainer = styled.div `
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`
const Input = styled.input`
    border: none;
`

const Center = styled.div`
    flex: 1;
    text-align: center;
`
const Logo = styled.h1`
    font-weight: bold;
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`

function Navbar() {

  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    
                    <Input/>
                    <BsSearch style={{color: "gray", fontSize:16}} />
                </SearchContainer>
            </Left>
            <Center>
                <Logo>
                    eCommerce App
                </Logo>
            </Center>
            <Right>
                <MenuItem>Register</MenuItem>
                <MenuItem>Sign in</MenuItem>
                <Badge badgeContent={4} color="primary">
                    <ShoppingCartOutlinedIcon color="action" />
                </Badge>
            </Right>
        </Wrapper>

    </Container>
  )
}

export default Navbar