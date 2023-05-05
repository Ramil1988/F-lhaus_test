import { useState, useEffect } from "react";
import BigPicture from "./BigPicture.png";
import styled from "styled-components";

import ListOfItems from "./ListOfItems";
import MyOrder from "./MyOrder";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showBigImage, setShowBigImage] = useState(true);

  useEffect(() => {
    if (cartItems.length === 0) {
      setShowBigImage(true);
    }
  }, [cartItems]);

  const handleItemClick = () => {
    setShowBigImage(false);
  };

  return (
    <AppWrapper>
      {showBigImage && <BigImageWrapper />}
      <ItemCardWrapper onClick={handleItemClick} showBigImage={showBigImage}>
        <ListOfItems cartItems={cartItems} setCartItems={setCartItems} />
      </ItemCardWrapper>
      {cartItems.length > 0 && (
        <MyOrder
          items={cartItems}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
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
  width: ${(props) => (props.showBigImage ? "80%" : "75%")};
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
`;

export default App;
