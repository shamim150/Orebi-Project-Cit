import React from "react";
import Container from "../Layer/Container";
import Breadcumb from "../Layer/Breadcumb";
import Input from "../Layer/Input";
import TitleHeader from "../Layer/TitleHeader";
import Button from "../Layer/Button";
import ButtonLarge from "../Layer/ButtonLarge";

const Login = () => {
  return (
    <div>
      <Container className="mt-20">
        <Breadcumb />
        <div className=" border-b border-[#D8D8D8] mt-20 pb-16">
          <p className="max-w-[644px] font-DM text-base leading-7 text-Secondary ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the.
          </p>
        </div>

        <div className=" border-b border-[#D8D8D8]  pb-16">
          <div className="flex flex-wrap gap-y-10  gap-x-10 pb-16">
            <TitleHeader
              className=" w-full mt-14"
              headerText="Returning Customer"
            />
            <Input
              className="w-[507px]"
              labelText="Email address"
              placeholder="company@domain.com"
              type="text"
              id="Email address"
            />
            <Input
              className="w-[507px]"
              labelText="Password"
              placeholder="password"
              type="text"
              id="Password"
            />
          </div>
          <ButtonLarge ButtonLargeText="Log In" />
        </div>

        <div>
          <TitleHeader className="mb-32 mt-14" headerText="New Customer" />

          <ButtonLarge className="mb-36" ButtonLargeText="Continue" />
        </div>
      </Container>
    </div>
  );
};

export default Login;
