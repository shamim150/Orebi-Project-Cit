import React from "react";

const ButtonLarge = ({ ButtonLargeText, className, onClick }) => {
  return (
    <div>
      <button onClick={onClick}
        className={`w-[200px] bg-Primary text-white py-4 border font-bold font-DM text-sm transition-all duration-300 border-[#2B2B2B]  hover:text-Primary hover:bg-white ${className}`}
      >
        {ButtonLargeText}
      </button>

      
    </div>
  );
};

export default ButtonLarge;
