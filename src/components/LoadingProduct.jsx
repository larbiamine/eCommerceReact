import styled from "styled-components";

import "react-toastify/dist/ReactToastify.css";
import { CircularProgress } from "@mui/material";
// import SearchIcon from '@mui/icons-material/SearchIcon'

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-height: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
`;

function LoadingProduct() {
  return (
    <Container>
      {/* <Circle/> */}
      {/* <Image src={item.img} /> */}

      <CircularProgress />
    </Container>
  );
}

export default LoadingProduct;
