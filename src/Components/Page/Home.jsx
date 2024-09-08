import React from "react";
import Banner from "./Bannner";
import SaleOffer from "../SaleOffer";
import Arrivals from "../Arrivals";
import Shipping from "../Layer/Shipping";
import BestSeller from "../BestSeller";
import Add02 from "../Add02";
import SpecialOffer from "../SpecialOffer";

const Home = () => {
  return (
    <>
      <Banner />
      <Shipping />
      <SaleOffer />
      <Arrivals />
      <BestSeller/>
      <Add02/>
      <SpecialOffer/>
    </>
  );
};

export default Home;
