import React from "react";

const Input = ( {labelText, id, placeholder,type, className, children, inpurtValue, onChange}) => {
  return (
    <div className={`border-b border-[#D8D8D8] relative ${className}`}>
      <label
        className="font-bold font-DM text-base leading-6 text-Primary"
        htmlFor={id}
      >
        {labelText}
      </label>
      <input value={inpurtValue}
      onChange={onChange}
        className="block w-full outline-none pb-4 pt-2.5"
        type={type}
        name=""
        id={id}
        placeholder={placeholder}
      />
      {children}
       
    </div>
  );
};

export default Input;
