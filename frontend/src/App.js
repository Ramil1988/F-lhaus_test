import { useState } from "react";
import BigPicture from ".//BigPicture.png";
import styled from "styled-components";

import ListOfItems from "./ListOfItems";
import MyOrder from "./MyOrder";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <AppWrapper>
      <BigImageWrapper />
      <ItemCardWrapper>
        <ListOfItems cartItems={cartItems} setCartItems={setCartItems} />
      </ItemCardWrapper>
      {cartItems.length > 0 && (
        <MyOrder items={cartItems} setIsOpen={setCartItems} />
      )}
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  display: flex;
  height: 100vh;
`;

const BigImageWrapper = styled.div`
  width: 30%;
  height: 100%;
  background-image: url(${BigPicture});
  background-size: cover;
  background-position: center;
`;

const ItemCardWrapper = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
`;

export default App;
