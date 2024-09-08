import React from 'react'

const Button = ( {ButtonText, className}) => {
  return (
    <div>
         <button className={`w-[148px] py-4 bg-white border transition-all duration-300 border-[#2B2B2B] hover:bg-Primary hover:text-white ${className}`}>
            {ButtonText}
         </button>

    </div>
  )
}

export default Button