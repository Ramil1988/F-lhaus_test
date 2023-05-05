import { useState, useEffect } from "react";
import styled from "styled-components";
import MyOrderItem from "./MyOrderItem";

const MyOrder = ({ items, setCartItems }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  const handleClose = () => {
    setCartItems([]);
  };

  useEffect(() => {
    setTotalPrice(
      items.reduce(
        (accumulator, current) => accumulator + current.retailPrice,
        0
      )
    );
  }, [items]);

  const handleRemoveItem = (itemId) => {
    setCartItems((prevItems) => {
      const index = prevItems.findIndex((item) => item._id === itemId);
      const newItems = [...prevItems];
      newItems.splice(index, 1);
      return newItems;
    });
  };

  const handleCheckout = () => {
    alert("The order has been made! Thank you!");
    setCartItems([]);
  };

  return (
    <MyOrderWrapper>
      <MyOrderHeader>
        <CloseButton
          onClick={() => {
            setCartItems([]);
            handleClose();
          }}
        >
          X
        </CloseButton>
        <HeaderText>My Order</HeaderText>
      </MyOrderHeader>
      <MyOrderItemsContainer>
        <MyOrderItemsWrapper>
          {items.map((item) => (
            <MyOrderItem
              key={item._id}
              item={item}
              onRemove={() => handleRemoveItem(item._id)}
            />
          ))}
        </MyOrderItemsWrapper>
      </MyOrderItemsContainer>
      <MyOrderTotal>
        <TotalText>Total:</TotalText>
        <TotalPrice>${totalPrice}</TotalPrice>
      </MyOrderTotal>
      <CheckoutWrapper>
        <CheckoutButton
          onClick={() => {
            handleCheckout();
            handleClose();
          }}
        >
          Checkout
        </CheckoutButton>
      </CheckoutWrapper>
    </MyOrderWrapper>
  );
};

const MyOrderWrapper = styled.div`
  width: 25%;
  height: 100%;
  background-color: #fff;
  position: fixed;
  top: 0;
  right: 0;
  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    top: 0;
    right: unset;
    left: 0;
    bottom: 0;
    z-index: 100;
  }
`;

const MyOrderHeader = styled.div`
  font-family: "Montserrat", sans-serif;
  display: flex;
  align-items: center;
  padding: 16px;

  @media (max-width: 768px) {
    padding: 12px;
  }
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const HeaderText = styled.h2`
  font-size: 20px;
  font-weight: 500;
  margin-left: 16px;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-left: 12px;
  }
`;

const MyOrderItemsContainer = styled.div`
  height: 60%;
  overflow-y: scroll;

  @media (max-width: 768px) {
    height: 70%;
  }
`;

const MyOrderItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;

  @media (max-width: 768px) {
    padding: 12px;
  }
`;

const MyOrderTotal = styled.div`
  font-family: "Montserrat", sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-top: 1px solid #e6e6e6;

  @media (max-width: 768px) {
    padding: 12px;
  }
`;

const TotalText = styled.p`
  font-size: 30px;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const TotalPrice = styled.p`
  font-size: 30px;
`;

const CheckoutWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;

  @media (max-width: 768px) {
    margin-top: auto;
    padding-bottom: 20px;
  }
`;

const CheckoutButton = styled.button`
  font-family: "Montserrat", sans-serif;
  background-color: black;
  width: 80%;
  color: white;
  border: none;
  padding: 20px;
  font-size: 20px;
  cursor: pointer;
  margin-top: 16px;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

export default MyOrder;
