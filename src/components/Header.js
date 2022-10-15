import React from "react";
import styled from "styled-components";
import { ShoppingCart, Person } from "@mui/icons-material";

const Header = () => {
  return <Row>
    {/* <div style={{ height: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <Logo src="https://www.hcmut.edu.vn/images/hcmut/logoBK.png" alt="Logo HCMUT">
      </Logo>
      <Title>
        BK SHOP
      </Title>
    </div>
    <SearchBar>
      <SearchButton >
        <i class="fa fa-search"></i>
      </SearchButton>
      <SearchInput type="text" name="search_book" id="" placeholder="Search..." />
    </SearchBar>

    <NavBar>
      <NavItem>ABOUT</NavItem>
      <NavItem>NEWS</NavItem>
      <NavItem>BEST SELLER</NavItem>
      <NavItem>DISCOUNT</NavItem>
    </NavBar>

    <div>
      <CartIcon />
      <CartCounter>20</CartCounter>
    </div>

    <UserIcon>
    </UserIcon> */}
  </Row>;
};

const Row = styled.div`
  background-color: pink;
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 0px 60px 0px 20px;
`
const Logo = styled.img`
  /* max-width: 5%; */
  margin-left: 20px;
  height: 80%;
  display: inline;
  `
const Title = styled.p`
  color: white;
  font-size: 38px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 43px;
  /* letter-spacing: 2px; */
  display: inline;
  margin: 0px 90px 0px 30px;
`
const SearchBar = styled.div`
  display: inline;
  background-color: white;
  border: none;
  border-radius: 15px;
  padding: 2px 10px 2px 2px;
`
const SearchInput = styled.input`
  display: inline;
  border: none;
  outline: none;
  margin-left: 15px;
  width: 220px;
`
const SearchButton = styled.button`
  display: inline;
  border: none;
  background-color: gray;
  border-radius: 50%;
  width: 24px;
  /* padding: 5px; */
  i {
    width: 16px;
  }
`
const NavBar = styled.div`
  display: inline;
    
`
const NavItem = styled.a`
  display: inline;
  text-decoration: none;
  /* font-family: 'Muli', sans-serif; */
  text-transform: uppercase;
  color: white;
  padding: 20px;
  font-weight: bold;
`
const CartIcon = styled(ShoppingCart)`
  color: white;
  font-size: 50pt;
  display: inline;
`
const CartCounter = styled.p`
  color: black;
  background-color: white;
  font-size: 12px;
  font-weight: bold;
  padding: 0px 2px;
  border-radius: 7px;
  border: 1px black solid;
  display: inline;
  position: relative;
  bottom: 10px;
  right: 12px;
  /* font-family: 'Helvetica Neue', Helvetica, Arial; */
`
const UserIcon = styled(Person)`
  color: white;
`

export default Header;
