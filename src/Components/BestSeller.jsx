import React, { useEffect, useState } from "react";
import Container from "./Layer/Container";
import TitleHeader from "./Layer/TitleHeader";
import ProductsItem from "./Layer/ProductsItem";
import axios from "axios";

const BestSeller = () => {
  let [allData, setAllData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let response = await axios.get("https://dummyjson.com/products");
      setAllData(response.data.products); 
      // console.log(allData);
    };
    getData();
  }, []);

  return (
    <Container className="mt-24 ">
      <TitleHeader className="mb-12" headerText="Best Seller" />
      <div className="flex justify-between ">
        {
          // allData.slice(0, 4)
          allData
            .filter((product, index) => index < 4)
            .map((item, index) => (
              <ProductsItem
                key={index}
                src={item.thumbnail}
                pName={item.title}
                price={item.price}
                brand={item.brand}
                offer={item.discountPercentage}
              />
            ))
        }
      </div>
    </Container>
  );
};

export default BestSeller;
