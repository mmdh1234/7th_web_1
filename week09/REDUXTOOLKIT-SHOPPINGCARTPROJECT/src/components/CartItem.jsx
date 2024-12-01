import styled from "styled-components";
import { AiOutlineUp, AiOutlineDown } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { decrease, increase, removeItem } from "../features/cart/cartSlice";

// Styled Components
const CartItemWrapper = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  border-bottom: 1px solid #ddd;
`;

const ItemImage = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 8px;
`;

const ItemDetails = styled.div`
  flex: 1;
  margin-left: 15px;

  h4 {
    margin: 0;
    font-size: 16px;
    font-weight: 600;

    span {
      font-size: 14px;
      color: #555;
    }
  }
`;

const ItemPrice = styled.h4`
  font-size: 18px;
  color: #333;
  margin: 0 20px;
  white-space: nowrap;
`;

const AmountControls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .amount-btn {
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 5px;

    svg {
      font-size: 18px;
      color: #333;

      &:hover {
        color: #007bff;
      }
    }
  }

  .amount {
    font-size: 16px;
    margin: 5px 0;
  }
`;

const CartItem = ({ id, title, singer, price, img, amount }) => {
  const dispatch = useDispatch();

  return (
    <CartItemWrapper>
      <ItemImage src={img} alt={`${title} 이미지`} />
      <ItemDetails>
        <h4>
          {title} <span>{singer}</span>
        </h4>
      </ItemDetails>
      <ItemPrice>₩ {price}</ItemPrice>
      <AmountControls>
        <button className="amount-btn" onClick={() => dispatch(increase(id))}>
          <AiOutlineUp />
        </button>
        <p className="amount">{amount}</p>
        <button
          className="amount-btn"
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
            } else {
              dispatch(decrease(id));
            }
          }}
        >
          <AiOutlineDown />
        </button>
      </AmountControls>
    </CartItemWrapper>
  );
};

export default CartItem;
