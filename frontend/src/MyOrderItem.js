import React from "react";
import styled from "styled-components";

const MyOrderItem = ({ item, onRemove }) => {
  const { _id, fulhausProductName, retailPrice, imageURLs } = item;

  return (
    <MyOrderItemWrapper>
      <MyOrderItemImage src={imageURLs[0]} />
      <MyOrderItemDetails>
        <MyOrderItemTitle>{fulhausProductName}</MyOrderItemTitle>
        <MyOrderItemPrice>${retailPrice}</MyOrderItemPrice>
      </MyOrderItemDetails>
      <RemoveButton onClick={() => onRemove(_id)}>X</RemoveButton>
    </MyOrderItemWrapper>
  );
};

const MyOrderItemWrapper = styled.div`
  height: 100px;
  font-family: "Montserrat", sans-serif;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const MyOrderItemImage = styled.img`
  width: 100px;
  height: 100%;
  object-fit: cover;
`;

const MyOrderItemDetails = styled.div`
  display: flex;
  margin-left: 20px;
  flex-direction: column;
  justify-content: space-between;
  width: calc(100% - 100px);
`;

const MyOrderItemTitle = styled.p`
  font-size: 16px;
  margin-bottom: 4px;
`;

const MyOrderItemPrice = styled.p`
  font-size: 16px;
`;

const RemoveButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

export default MyOrderItem;
