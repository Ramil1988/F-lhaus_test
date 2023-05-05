import { FaStar } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import styled from "styled-components";
import MyOrder from "./MyOrder";

const ItemCard = ({ product, setCartItems }) => {
  const selectedItems = [];

  const handleAddToCart = () => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  return (
    <Wrapper key={product._id} to={`/item/${product._id}`}>
      <ItemImg src={product.imageURLs[0]} alt={product.fulhausProductName} />
      <ItemTitle>{product.fulhausProductName}</ItemTitle>
      <StarsWrapper>
        {[...Array(5)].map((_, index) => (
          <GoldStars key={index} icon={FaStar} />
        ))}
      </StarsWrapper>
      <DetailsWrapper>
        <PriceDisplay>${product.retailPrice}</PriceDisplay>
        <AddToCartButton onClick={handleAddToCart}>
          <CartIcon />
        </AddToCartButton>
      </DetailsWrapper>
      {selectedItems.length > 0 && (
        <MyOrder items={selectedItems} setIsOpen={() => {}} />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-family: "Montserrat", sans-serif;
  width: 20vw;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  padding: 16px;
  transition: box-shadow 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.3);
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const ItemImg = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;

  @media screen and (max-width: 768px) {
    height: 150px;
  }
`;

const ItemTitle = styled.h2`
  font-size: 15px;
  font-weight: 400;
  color: black;
  margin-top: 8px;
`;

const StarsWrapper = styled.div`
  display: flex;
  margin-top: 8px;
`;

const GoldStars = styled(FaStar)`
  color: #ffd700;
`;

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`;

const PriceDisplay = styled.p`
  font-size: 18px;
  color: black;
  margin: 10px 5px;
`;

const AddToCartButton = styled.button`
  background-color: light;
  border: none;
  border-radius: 50%;
  color: #111;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: lightgray;
  }
`;

const CartIcon = styled(FaCartPlus)`
  font-size: 14px;
  padding: 10px;
  color: red;
`;

export default ItemCard;

