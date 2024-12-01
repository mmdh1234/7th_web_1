import { useDispatch, useSelector } from "react-redux";
import cartItems from "../constants/cartItems";
import CartItem from "./CartItem";
import { clearCart } from "../features/cart/cartSlice";
import styled from "styled-components";
import { openModal } from "../features/modal/modalSlice";

const CartContainer = () => {
  const { cartItems, total, amount } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  return (
    <section className="cart">
      <header>
        <h2>당신이 선택한 음반</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <Footer>
        <Divider />
        <CartTotal>
          <h4>
            총 가격 <span>₩ {total}원</span>
          </h4>
        </CartTotal>
        <ClearButton
          onClick={() => {
            dispatch(openModal());
          }}
        >
          장바구니 초기화
        </ClearButton>
      </Footer>
    </section>
  );
};

export default CartContainer;

// Styled Components
const Footer = styled.footer`
  margin-top: 20px;
  padding: 10px 0;
  border-top: 1px solid #ddd;
  text-align: center;
`;

const Divider = styled.hr`
  border: 0;
  border-top: 1px solid #ddd;
  margin: 20px 0;
`;

const CartTotal = styled.div`
  margin: 10px 0;

  h4 {
    font-size: 18px;
    color: #333;

    span {
      font-weight: bold;
      color: #007bff; /* 강조 색상 */
    }
  }
`;

const ClearButton = styled.button`
  margin-top: 15px;
  background-color: #f44336;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #d32f2f;
  }
`;
