import React from 'react'
import { IoMdRefresh } from 'react-icons/io'
import { PiNumberTwoBold } from 'react-icons/pi'
import { TbCarGarage } from 'react-icons/tb'

const Shipping = () => {
  return (
    <div className="flex justify-between items-center md:py-7 py-2  md:px-36 px-2 border-b border-[#F0F0F0]">
    <div className="two flex items-center md:gap-x-4 gap-x-1">
      <PiNumberTwoBold/>
      <p className="font-DM text-[#6D6D6D] text-[9px] text-nowrap md:text-[16px]">Two years warranty</p>
    </div>
    <div className="two flex items-center gap-x-4">
    <TbCarGarage />
      <p className="font-DM text-[#6D6D6D] text-[9px] text-nowrap md:text-[16px]">Free shipping</p>
    </div>
    <div className="two flex items-center gap-x-4">
    <IoMdRefresh />
      <p className="font-DM text-[#6D6D6D] text-[9px] text-nowrap md:text-[16px]">Return policy in 30 days </p>
    </div>
  </div>
  )
}

export default Shipping