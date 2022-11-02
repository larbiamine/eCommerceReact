import { useState } from 'react';
import styled from 'styled-components'
import KeyboardDoubleArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftOutlined';
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';
import sliderItems from "../dataslides" 

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    /* background-color: #AFBBF2; */
    position: relative;
    overflow: hidden;
`
const Arrow = styled.div`

    width: 50px;
    height: 50px;
    background-color: #dadada;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    cursor: pointer;
    opacity: 0.67;
    z-index: 2;
     
`
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translate(${ (props) => props.slideIndex * -100}vw);
`
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: ${props => props.bg};
`
const ImageContainer = styled.div`
  height: 100%;
  flex: 1;
`
const Image = styled.img`
  height: 80%;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`

const Title = styled.h1`
  font-size: 70px;
`
const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`



function Slider() {
  
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0);
    }
  }

  return (
    <Container>
        <Arrow direction="left" onClick={() => handleClick("left")} >
          <KeyboardDoubleArrowLeftOutlinedIcon/>
        </Arrow>
        <Wrapper slideIndex={slideIndex} >
        {
          sliderItems.map((slide) => {
            return (
              
              <Slide bg={slide.bg}>
                <ImageContainer>
                  <Image src={slide.img} />
                </ImageContainer>
                <InfoContainer>
                  <Title>
                  {slide.title}
                  </Title>
                  <Description> {slide.description}</Description>
                  <Button>Shop Now</Button>
                </InfoContainer>
              </Slide>
             
            )
          }
        )
        }
        </Wrapper>
        <Arrow direction="right" onClick={() => handleClick("left")}>
          <KeyboardDoubleArrowRightOutlinedIcon/>
        </Arrow>

    </Container>


  )
}

export default Slider