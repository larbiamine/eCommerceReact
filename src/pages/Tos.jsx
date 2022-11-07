import {React} from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient( #afbbf286, #afbbf24c ), url("https://images.pexels.com/photos/10002660/pexels-photo-10002660.jpeg")
      center;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    
`
const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
    ${mobile({
      width: "80%",
    })}
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Agreement = styled.p`
    
`

function Tos() {

  return (
    <Container>

        <Wrapper>
          <Title>Terms of service</Title>
            <Agreement>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            </Agreement>
        </Wrapper>
    </Container>
  )
}

export default Tos