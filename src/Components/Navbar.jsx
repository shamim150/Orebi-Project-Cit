import React, { useEffect, useState } from "react";
import Container from "./Layer/Container";
import Image from "./Layer/Image";
import { Link } from "react-router-dom";
import { Li } from "./Layer/Li";
import { PiDotsNineFill } from "react-icons/pi";
import { FaUser } from "react-icons/fa6";
import { TiArrowSortedDown } from "react-icons/ti";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  let [show, setShow] = useState(false);

  useEffect(() => {
    function widthSize() {
      if (window.innerWidth > 735.99) {
        setShow(true);
      } else {
        setShow(false);
      }
    }

    widthSize()
    window.addEventListener("resize", widthSize)
  }, []);
  return (
    <nav className="md:bg-white bg-slate-400">
      <Container className="py-8 px-3 md:px-0 flex md:justify-center justify-end items-center relative gap-10 md:gap-0 ">
        <Image
          className="absolute top-1/2 left-3 md:left-0 -translate-y-1/2"
          href="/"
          src="/Logo.png"
          alt="LOGO.PNG"
        />

          <ul className={`transition-all duration-1000 z-10 flex md:flex-row flex-col w-full md:w-auto p-5 md:p-0 gap-x-10 bg-slate-200 md:bg-transparent md:static absolute top-full left-0 text-center md:text-start  ${show? "translate-x-0" : "max-sm:translate-x-full"} `}>
            <Li className="text-Primary" liText="Home" />
            <Li to='products' liText="Shop" />
            <Li to='about' liText="About" />
            <Li to='contact' liText="Contacts" />
            <Li to='journal' liText="Journal" />
            <Li to='login' liText="Login" />
          </ul>

          <div className="account flex items-center gap-x-5 md:hidden">
          <div className="left flex items-center gap-x-2.5">
            <FaUser />
            <TiArrowSortedDown />
          </div>

          <div className="right">
          <FaShoppingCart/>
          </div>
        </div>

        <div onClick={() => setShow(!show)} className=" block md:hidden">
          <PiDotsNineFill />
        </div>

      </Container>
    </nav>
  );
};

export default Navbar;
