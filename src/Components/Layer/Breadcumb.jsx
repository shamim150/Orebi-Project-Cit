import React from "react";
import TitleHeader from "./TitleHeader";
import { FaChevronRight } from "react-icons/fa";

const Breadcumb = () => {
  console.log(window.location.pathname.split("/"));

  return (
    <div>
      <TitleHeader
        className="capitalize"
        headerText={`${window.location.pathname.split("/").map(item=> item).join(" ")}`}/>

     
      <p className="flex items-center gap-2">Home <FaChevronRight /> {`${window.location.pathname.split("/").map(item=> item).join("  ")}`}

      </p>
    </div>
  );
};

export default Breadcumb;
