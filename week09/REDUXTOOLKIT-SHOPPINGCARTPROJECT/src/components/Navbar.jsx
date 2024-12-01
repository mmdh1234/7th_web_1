import React from "react";
import { useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import styled from "styled-components";

// Styled Components
const Nav = styled.nav`
  background: blue;
  color: #fff;
  padding: 10px 20px;
`;

const NavCenter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  svg {
    font-size: 24px;
    color: white;
  }
`;

const TotalAmount = styled.p`
  position: absolute;
  top: -8px;
  right: -10px;
  background: red;
  color: white;
  font-size: 14px;
  font-weight: bold;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Navbar = () => {
  const { amount } = useSelector((state) => state.cart);

  return (
    <Nav>
      <NavCenter>
        <NavTitle>REAL DATA UMC PLAYLIST</NavTitle>
        <NavContainer>
          <AiOutlineShoppingCart /> {/* react-icons 아이콘 사용 */}
          <TotalAmount>{amount}</TotalAmount>
        </NavContainer>
      </NavCenter>
    </Nav>
  );
};

export default Navbar;
