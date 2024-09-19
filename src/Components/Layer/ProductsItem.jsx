import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import { LuRefreshCcw } from "react-icons/lu";

const Li = ({ Name, iconName }) => {
  return (
    <div>
      <li className="flex justify-end items-center gap-4 font-DM transition-all duration-300 text-Secondary hover:text-Primary text-[16px] font-bold">
        {Name}
        {iconName}
      </li>
    </div>
  );
};

const ProductsItem = ({ offer, pName, price, brand, src, alt,className }) => {
  return (
    <div className={`w-[370px] ${className}`}>
      <div className="image h-[370px] bg-slate-100 relative group">
        <img className="w-full h-full" src={src} alt={alt} />

        <div className="overlay absolute left-0 bottom-0 bg-white/40 w-full py-6 px-7 opacity-0 invisible transition-all duration-300 group-hover:opacity-100 group-hover:visible ">
          <ul className="flex flex-col gap-4">
            <Li
              Name="Add to Wish List"
              iconName={<IoMdHeart className="text-Primary" />}
            />
            <Li
              Name="Compare"
              iconName={<LuRefreshCcw className="text-Primary" />}
            />
            <Li
              Name="Add to Wish List"
              iconName={<FaShoppingCart className="text-Primary" />}
            />
          </ul>
        </div>

        {offer && (
          <button className="absolute top-5 left-5 bg-Primary font-DM font-bold text-sm text-white py-2 w-[92px]">
            {offer}% Off
          </button>
        )}
      </div>
      <div className="text mt-6">
        <div className="flex justify-between items-center">
          <p className="font-bold font-DM text-Primary text-[20px]">{pName}</p>
          <span className="font-DM text-Secondary text-[16px] leading-7">
            ${price}
          </span>
        </div>
        <p className="font-DM text-Secondary text-[16px] leading-7 mt-4">
          {brand}
        </p>
      </div>
    </div>
  );
};

export default ProductsItem;
