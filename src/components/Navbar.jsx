import { BsSearch } from "react-icons/bs";
import styled from "styled-components";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { FavoriteBorderOutlined } from "@mui/icons-material";
import { logout } from "../redux/userRedux";
import { setColor } from "../redux/navRedux";
import { emptyCart } from "../redux/cartRedux";
import { mobile } from "../responsive";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userRequest } from "../requestMethodes";
const Container = styled.div`
  height: 100px;
  margin-bottom: 20px;
  background-color: ${(props) => props.color};
  transition: background-color 1500ms linear;
  ${mobile({
    height: "80px",
    marginBottom: "10px",
  })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({
    padding: "10px 0px",
  })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ${mobile({
    display: "none",
  })}
`;
const Language = styled.span`
  font-size: 14;
  color: #292e2e;
  cursor: pointer;
  ${mobile({
    display: "none",
  })}
`;
const SearchContainer = styled.div`
  /* border: 1px solid lightgray; */
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({
    display: "none",
  })}
`;
const Input = styled.input`
  border: none;
  height: 25px;
  padding-left: 10px;
  margin-right: 10px;
  border-radius: 10px;
  ${mobile({
    width: "50px",
  })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;

  ${mobile({
    marginLeft: "20px",
  })}
`;
const Logo = styled.h1`
  font-weight: bold;
  color: #292e2e;

  ${mobile({
    fontSize: "24px",
  })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({
    flex: 2,
    justifyContent: "center",
  })}
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  color: #292e2e;
  ${mobile({
    fontSize: "100%",
    marginLeft: "10px",
  })}
`;
const TopButton = styled.button`
  margin-left: 20px;
  padding: 10px;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
  border: none;
  /* border-style: solid; */

  color: grey;
`;
const Username = styled.h3`
  color: #9649cb;
  margin-left: 5px;
`;

const SearchButton = styled.button`
  width: 35px;
  height: 25px;
  border-radius: 10px;
  border-style: solid;
  border: none;
  &:hover {
    background-color: white;
  }
`;

function Navbar() {
  const colorRedux = useSelector((state) => state.nav.color);
  const [wishListCount, setWishListCount] = useState(0);
  const quantity = useSelector((state) => state.cart.quantity);
  const currentUser = useSelector((state) => state.user.currentUser?.username);
  const currentUserId = useSelector((state) => state.user.currentUser?._id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(setColor(0));
  }, []);

  useEffect(() => {
    const getWishlistCount = async () => {
      try {
        const res = await userRequest.get(`wishlist/find/${currentUserId}`);
        setWishListCount(res.data.length);
      } catch (error) {
        console.log(error);
      }
    };
    getWishlistCount();
  }, [wishListCount]);

  const Search = () => {
    search && navigate(`/Products/${search}`);
  };

  const logoutClick = (e) => {
    e.preventDefault();
    dispatch(logout());
    dispatch(emptyCart());
  };

  return (
    <Container color={colorRedux}>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
            />
            <SearchButton onClick={() => Search()}>
              <BsSearch style={{ color: "gray", fontSize: 12 }} />
            </SearchButton>
          </SearchContainer>
        </Left>
        <Center>
          <Link
            style={{
              textDecoration: "none",
            }}
            to="/"
          >
            <Logo>Nice Shop</Logo>
          </Link>
        </Center>
        <Right>
          {currentUser ? (
            <>
              <Language>Welcome</Language>

              <Username>{currentUser} </Username>
              <Link to="/cart">
                <MenuItem>
                  <Badge badgeContent={quantity} color="primary">
                    <ShoppingCartOutlinedIcon color="action" />
                  </Badge>
                </MenuItem>
              </Link>
              <Link to="/wishlist">
                <MenuItem>
                  <Badge badgeContent={wishListCount} color="secondary">
                    <FavoriteBorderOutlined color="action" />
                  </Badge>
                </MenuItem>
              </Link>
              <TopButton filled onClick={(e) => logoutClick(e)}>
                Log Out
              </TopButton>
            </>
          ) : (
            <>
              <Link to="/register">
                <MenuItem>Register</MenuItem>
              </Link>

              <Link to="/login">
                <MenuItem>Sign in</MenuItem>
              </Link>
              <Link to="/cart">
                <MenuItem>
                  <Badge badgeContent={quantity} color="primary">
                    <ShoppingCartOutlinedIcon color="action" />
                  </Badge>
                </MenuItem>
              </Link>
            </>
          )}
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
