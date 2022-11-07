import {React, useState, useEffect} from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcements from '../components/Announcements'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'

import { Add, Remove } from '@mui/icons-material'
import { mobile } from '../responsive'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addProduct } from '../redux/cartRedux'
import axios from 'axios'

const Container = styled.div`

`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({
      padding: "10px",
      flexDirection: "column"
    })}
`
const ImageContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({
      height: "40vh",
    })}
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({
      padding: "10px",
    })}
`
const Title = styled.h1`
    font-weight: 200;
`
const Description = styled.p`
    margin: 20px 0px;
`
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`
const FilterContainer = styled.div`
    display: flex;
    margin: 30px 0px;
    justify-content: space-between;
    width: 50%;
    ${mobile({
      width: "100%",
    })}
`
const Filter = styled.div`
    display: flex;
    align-items: center;
`

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color };
    margin: 0px 5px;
    cursor: pointer;
`

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`

const FilterSizeOption = styled.option``

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({
      width: "100%",
    })}
`

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`

const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    border-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        border-color: #dde1ef;
    }
`


function Product() {


    const location = useLocation();
    const id = location.pathname.split("/")[2];

    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");

    const dispatch = useDispatch()

    const handleQuantity = (method) => {
        if (method === "add") {
            setQuantity(quantity + 1)
        }else{
            quantity>1 && setQuantity(quantity -1)
        }
    }

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/products/find/${id}`);
                setProduct(res.data)
            } catch (error) {
                console.log(error);
            }
        }
        getProduct();

    }, [id])

    const addTocart = () => {
        if (size==="") {
            setSize(product.size[0])
        }

        dispatch(addProduct({...product, quantity, color, size}));
    }
    
    return (
    <Container>
        <Announcements/>
        <Navbar/>
        <Wrapper>
            <ImageContainer>
                <Image src={product.img} />
            </ImageContainer>
            <InfoContainer>
                <Title>
                    {product.title}
                </Title>
                <Description>
                    {product.description}
                </Description>
                <Price>
                    ${product.price}
                </Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        {product.color?.map(color =>(
                            <FilterColor onClick={ () => setColor(color)} color = {color} key={color}/>
                        ))}

                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                            <FilterSize onChange={(e) => setSize(e.target.value)} >
                                {
                                    product.size?.map(s=>(
                                        <FilterSizeOption key={s} >{s}</FilterSizeOption>
                                    ))
                                }

                            </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Button  onClick={ () => handleQuantity("remove")} ><Remove/></Button>
                            <Amount>{quantity}</Amount>
                       <Button onClick={() => handleQuantity("add")} ><Add/></Button>
                    </AmountContainer>
                    <Button onClick={addTocart} >ADD TO CART</Button>
                </AddContainer>

            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>

    </Container>
    )
}

export default Product