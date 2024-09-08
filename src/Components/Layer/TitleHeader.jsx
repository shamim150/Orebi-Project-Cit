import React from 'react'

const TitleHeader = ({headerText, className}) => {
  return (
    <h2 className={`font-DM text-[39px] font-bold text-Primary ${className}`}>
      {headerText}
    </h2>
  )
}

export default TitleHeader