import { useState, useEffect } from "react";
import ItemCard from "./ItemCard";
import styled from "styled-components";

const ListOfItems = ({ cartItems, setCartItems }) => {
  const error = null;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      "https://fh-api-dev.herokuapp.com/api/products-service/products/website/CAD?page=0&limit=6"
    )
      .then((response) => response.json())
      .then((data) => setProducts(data.data.products));
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <ItemListContainer>
      {products.map((product) => (
        <ItemCard
          key={product._id}
          product={product}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      ))}
    </ItemListContainer>
  );
};

const ItemListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin: 5px;

  @media (max-width: 768px) {
    gap: 0.5rem;
    margin: 2px;
  }

  @media (max-width: 480px) {
    gap: 0.25rem;
    margin: 1px;
  }
`;

export default ListOfItems;
