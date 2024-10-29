import React, { useState } from "react";
import Container from "../Layer/Container";
import Breadcumb from "../Layer/Breadcumb";
import { IoClose } from "react-icons/io5";
import { Image } from "antd";
import CartItem from "../Layer/CartItem";

const Cart = () => {



  return (
    <div className="pt-32">
      <Container>
        <Breadcumb />

        <div className="top bg-[#F5F5F3] grid grid-cols-5 py-6 px-5 mt-32 ">
          <div>Product</div>
          <div>Price</div>
          <div>Quantity</div>
          <div>Size</div>
          <div>Total</div>
        </div>

        
       <CartItem/>
       <CartItem/>
       <CartItem/>
       <CartItem/>
       <CartItem/>
       <CartItem/>
       <CartItem/>
















        <div className="flex justify-between mt-2 border">
          <input
            className=" px-5 py-6 outline-none w-1/2  border-r"
            type="text"
            name=""
            id=""
            placeholder="Apply coupon"
          />
          <button className="px-5 font-bold text-sm">Update cart</button>
        </div>

        <div className="flex flex-col items-end">
          <p className="text-Primary font-bold text-xl mt-14 mb-6">
            Cart totals
          </p>
          <table className="w-[644px]">
            <tr>
              <td className="border text-base font-bold p-5 text-Primary">
                Subtotal
              </td>
              <td className="border  p-5 text-Secondary">389.99 $</td>
            </tr>
            <tr>
              <td className="border text-base font-bold p-5 text-Primary">
                Total
              </td>
              <td className="border  text-Primary p-5 ">389.99 $</td>
            </tr>
          </table>
          <button className="bg-black text-white py-4 px-6 mt-7 mb-36">
            {" "}
            Proceed to Checkout
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Cart;
