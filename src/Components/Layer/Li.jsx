import React from "react";
import { Link } from "react-router-dom";

export const Li = ( {liText,className, children , onClick, to}) => {
  return (

      <li onClick={onClick} className="group">
         <Link className={` text-[#767676] hover:text-Primary duration-300 font-DM text-sm font-bold ${className}`} to={to}>

        {liText}
        </Link>
        {children}
      </li>

  );
};
