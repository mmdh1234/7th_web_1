import styled from "styled-components";

// Styled Components
const FooterNav = styled.nav`
  background-color: blue; /* Footer 배경색 */
  color: #fff; /* 텍스트 색상 */
  padding: 15px 0; /* 위아래 여백 */
  text-align: center; /* 텍스트 가운데 정렬 */
`;

const FooterTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: bold;
`;

const Footer = () => {
  return (
    <FooterNav>
      <FooterTitle>University Makeus Challenge</FooterTitle>
    </FooterNav>
  );
};

export default Footer;
