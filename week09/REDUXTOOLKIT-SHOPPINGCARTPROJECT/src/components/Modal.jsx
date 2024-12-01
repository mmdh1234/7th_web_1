import React from "react";
import styled from "styled-components";
import ModalButton from "./ModalButton";

const Modal = ({ children }) => {
  return (
    <ModalOverlay
      onClick={(e) => {
        // 모달 외부를 클릭했을 때 닫히는 로직
        if (e.target === e.currentTarget) {
          console.log("모달 외부 클릭됨");
        }
      }}
    >
      <ModalContainer>
        {children}
        <ModalButton />
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;

// Styled Components
const ModalOverlay = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5); /* 어두운 반투명 배경 */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000; /* 모달의 우선 순위 */
`;

const ModalContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  max-width: 500px;
  width: 100%;
  text-align: center;
`;
