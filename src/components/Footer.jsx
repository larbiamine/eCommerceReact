import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { mobile } from '../responsive';

const Container = styled.div`
    display: flex;
    padding : 0px 20px;
    align-items: center;
    justify-content: space-between;
    ${mobile({
        flexDirection: "column"
    })}
`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Socialcontainer = styled.div`
    display: flex;
`
const Logo = styled.h1`
    
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: ${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const Description = styled.div`
    margin: 20px 0px ;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({
        display: "none"
    })}
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const Listitem = styled.li`
    width: 50%;
    margin-bottom: 10px;

`
const Right = styled.div`
    flex: 1;
    padding: 20px;

`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Payment = styled.img`
    width: 100%;
`

function Footer() {
  return (
    <Container>
        <Left>
            <Logo> Nice </Logo>
            <Description> Nice </Description>
            <Socialcontainer>
                <SocialIcon color= "#c32aa3">
                    <InstagramIcon/>
                </SocialIcon>
                <SocialIcon color="#1da1f2" >
                    <TwitterIcon/>
                </SocialIcon>
                <SocialIcon color="#3b5998" >
                    <FacebookIcon/>
                </SocialIcon>
                              
            </Socialcontainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <Listitem>Home</Listitem>
                <Listitem>Cart</Listitem>
                <Listitem>Man Fashion</Listitem>
                <Listitem>Woman Fashion</Listitem>
                <Listitem>Accessories</Listitem>
                <Listitem>My Account</Listitem>
                <Listitem>Wishlist</Listitem>
                <Listitem>Terms</Listitem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem> 
                <LocationOnIcon style={{marginRight:"10px"}} />
                2244 Ross Street Belleville Illinois
            </ContactItem>

            <ContactItem>
                <PhoneIcon style={{marginRight:"10px"}}/>
                +1 618-207-8314
            </ContactItem>
            <ContactItem>
                <EmailIcon style={{marginRight:"10px"}}/>
                contact@store.com
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
    </Container>
  )
}

export default Footer