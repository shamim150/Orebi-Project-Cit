import React from "react";
import Container from "../Layer/Container";
import VerticalProductItem from "../VerticalProductItem";

const Test = () => {
  return (
    <div className="">
      <Container>
        <VerticalProductItem
          pName="Denim"
          brand="H&M"
          src="/public/Products/Image_1.png"
          price="55"
          offer="10% Off"
        />
      </Container>
    </div>
  );
};

export default Test;
