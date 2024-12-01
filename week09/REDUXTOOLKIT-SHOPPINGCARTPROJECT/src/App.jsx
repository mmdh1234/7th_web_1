import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CartContainer from "./components/CartContainer";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotal } from "./features/cart/cartSlice";
import { useEffect } from "react";
import ModalPortal from "./components/ModalPortal";
import Modal from "./components/Modal";

function App() {
  const { cartItems } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  console.log("isOpen 상태:", isOpen);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems, dispatch]);
  return (
    <>
      <header>
        <Navbar />
      </header>

      <CartContainer />
      {isOpen && (
        <ModalPortal>
          <Modal>
            <h4>담아두신 모든 음반을 삭제하시겠습니까?</h4>
          </Modal>
        </ModalPortal>
      )}
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
