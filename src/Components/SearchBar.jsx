import React, { useEffect, useState } from "react";
import Container from "./Layer/Container";
import { FaBarsStaggered, FaUser } from "react-icons/fa6";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import { Li } from "./Layer/Li";
import { IoCloseSharp } from "react-icons/io5";
import Button from "./Layer/Button";

const SearchBar = () => {
  let [show, setShow] = useState(false);

  let [cart, setCart] = useState(false);

  let [login, setLogin] = useState(false);

  let [accesories, setAccesories] = useState(false);

  let [furniture, setFurniture] = useState(false);

  let [electronics, setElectronics] = useState(false);

  let [clothes, setClothes] = useState(false);

  let [bags, setBags] = useState(false);

  let [home, setHome] = useState(false);

  let [search, setSearch] = useState("");

  let [product, setProduct] = useState([]);

  let [filterData, setFilterData] = useState([]);

  let manageSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    let getData = async () => {
      const respones = await fetch("https://dummyjson.com/products");
      const data = await respones.json();
      setProduct(data.products);
    };
    getData();
  }, []);

  useEffect(() => {
    if (search === "") {
      filterData === "";
    } else {
      let searcData = product.filter((item) =>
        item?.title.toLowerCase().includes(search.toLowerCase())
      // console.log(item.title.toLowerCase().includes(search.toLowerCase()))
      );

      setFilterData(searcData);
    }
  }, [search, product]);

  return (
    <div className="bg-[#F5F5F3] md:py-6 py-3 relative">
      <Container className="relative flex justify-between gap-3 md:gap-0 px-3 md:px-0">
        <div
          onClick={() => setShow(!show)}
          className="category flex items-center gap-x-2.5 "
        >
          <FaBarsStaggered />
          <p className="font-DM text-sm hidden md:block">Shop by Category</p>
        </div>

        {show && (
          <ul className="catddm absolute top-full left-0 bg-slate-200 w-[263px] z-10 ">
            <Li
              onClick={() => setAccesories(!accesories)}
              liText="Accesories"
              className="w-full block bg-Primary text-white/70 border-b
              border-[#2d2d2d] transition-all duration-300 hover:text-white
              hover:pl-[31px] hover:left-3 md:px-4 px-2 md:py-5 py-3"
            >
              <div
                className={`static md:absolute md:group-hover:flex md:gap-12 gap-5 md:text-[16px] text-[12px] left-full top-0 bg-white h-full text-nowrap md:hidden md:px-10 px-2 py-0 md:py-8 flex-wrap md:flex-nowrap  ${
                  accesories ? "flex" : "hidden"
                }`}
              >
                <ul className="flex flex-col md:gap-3 gap-1 text-nowrap">
                  <h3 className="md:mb-3 mb-0 font-DM font-bold text-[16px]">
                    Phones
                  </h3>

                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Phones 01
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Phones 02
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Phones 03
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Phones 04
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Phones 05
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Phones 06
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Phones 07
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Phones 08
                  </li>
                </ul>
                <ul className="flex flex-col md:gap-3 gap-1  text-nowrap">
                  <h3 className="md:mb-3 mb-0 font-DM font-bold text-[16px]">
                    Computers
                  </h3>

                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Computers 01
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Computers 02
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Computers 03
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Computers 04
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Computers 05
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Computers 06
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Computers 07
                  </li>
                </ul>
                <ul className="flex flex-col md:gap-3 gap-1 text-nowrap">
                  <h3 className="md:mb-3 mb-0 font-DM font-bold text-[16px]">
                    Smart watches
                  </h3>

                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    watches 01
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    watches 02
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    watches 03
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    watches 04
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    watches 05
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    watches 06
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    watches 07
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    watches 08
                  </li>
                </ul>

                <ul className="flex flex-col md:gap-3 gap-1text-nowrap">
                  <h3 className="md:mb-3 mb-0 font-DM font-bold text-[16px]">
                    Cameras
                  </h3>

                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Cameras 01
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Cameras 02
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Cameras 03
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Cameras 04
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Cameras 05
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Cameras 06
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Cameras 07
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Cameras 08
                  </li>
                </ul>
              </div>
            </Li>

            <Li
              onClick={() => setFurniture(!furniture)}
              className="w-full block bg-Primary text-white/70 border-b
            border-[#2d2d2d] transition-all duration-300 hover:text-white
            hover:pl-[31px] hover:left-3 md:px-4 px-2 md:py-5 py-3"
              liText="Furniture"
            >
              <div
                className={`static md:absolute md:group-hover:flex md:gap-12 gap-5 md:text-[16px] text-[12px] left-full top-0 bg-white h-full text-nowrap md:hidden md:px-10 px-2 py-0 md:py-8 flex-wrap md:flex-nowrap  ${
                  furniture ? "flex" : "hidden"
                }`}
              >
                <ul className="flex flex-col md:gap-3 gap-1 text-nowrap">
                  <h3 className="md:mb-3 mb-0 font-DM font-bold text-[16px]">
                    Phones
                  </h3>

                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    01
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    02
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    03
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    04
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    05
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    06
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    07
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    08
                  </li>
                </ul>
                <ul className="flex flex-col md:gap-3 gap-1 text-nowrap">
                  <h3 className="md:mb-3 mb-0 font-DM font-bold text-[16px]">
                    Computers
                  </h3>

                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    01
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    02
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    03
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    04
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    05
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    06
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    07
                  </li>
                </ul>
                <ul className="flex flex-col md:gap-3 gap-1 text-nowrap">
                  <h3 className="md:mb-3 mb-0 font-DM font-bold text-[16px]">
                    Smart watches
                  </h3>

                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    watches 01
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    watches 02
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    watches 03
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    watches 04
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    watches 05
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    watches 06
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    watches 07
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    watches 08
                  </li>
                </ul>

                <ul className="flex flex-col md:gap-3 gap-1 text-nowrap">
                  <h3 className="md:mb-3 mb-0 font-DM font-bold text-[16px]">
                    Cameras
                  </h3>

                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    01
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    02
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    03
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    04
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    05
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    06
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    07
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    08
                  </li>
                </ul>
              </div>
            </Li>

            <Li
              onClick={() => setElectronics(!electronics)}
              className="w-full block bg-Primary text-white/70 border-b
            border-[#2d2d2d] transition-all duration-300 hover:text-white
            hover:pl-[31px] hover:left-3 md:px-4 px-2  md:py-5 py-3"
              liText="Electronics"
            >
              <div
                className={`static md:absolute md:group-hover:flex md:gap-12 gap-5 md:text-[16px] text-[12px] left-full top-0 bg-white h-full text-nowrap md:hidden md:px-10 px-2 py-0 md:py-8 flex-wrap md:flex-nowrap  ${
                  electronics ? "flex" : "hidden"
                }`}
              >
                <ul className="flex flex-col md:gap-3 gap-1 text-nowrap">
                  <h3 className="md:mb-3 mb-0 font-DM font-bold text-[16px]">
                    Phones
                  </h3>

                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Phones 01
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Phones 02
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Phones 03
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Phones 04
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Phones 05
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Phones 06
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Phones 07
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Phones 08
                  </li>
                </ul>
                <ul className="flex flex-col md:gap-3 gap-1 text-nowrap">
                  <h3 className="md:mb-3 mb-0  font-DM font-bold text-[16px]">
                    Computers
                  </h3>

                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Computers 01
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Computers 02
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Computers 03
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Computers 04
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Computers 05
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Computers 06
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Computers 07
                  </li>
                </ul>
                <ul className="flex flex-col md:gap-3 gap-1 text-nowrap">
                  <h3 className="md:mb-3 mb-0 font-DM font-bold text-[16px]">
                    Smart watches
                  </h3>

                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Smart watches 01
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Smart watches 02
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Smart watches 03
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Smart watches 04
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Smart watches 05
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Smart watches 06
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Smart watches 07
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Smart watches 08
                  </li>
                </ul>

                <ul className="flex flex-col md:gap-3 gap-1 text-nowrap">
                  <h3 className="md:mb-3 mb-0  font-DM font-bold text-[16px]">
                    Cameras
                  </h3>

                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Cameras 01
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Cameras 02
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Cameras 03
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Cameras 04
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Cameras 05
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Cameras 06
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Cameras 07
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Cameras 08
                  </li>
                </ul>
              </div>
            </Li>

            <Li
              onClick={() => setClothes(!clothes)}
              className="w-full block bg-Primary text-white/70 border-b
            border-[#2d2d2d] transition-all duration-300 hover:text-white
            hover:pl-[31px] hover:left-3 md:px-4 px-2 md:py-5 py-3"
              liText="Clothes"
            >
              <div
                className={`static md:absolute md:group-hover:flex md:gap-12 gap-5 md:text-[16px] text-[12px] left-full top-0 bg-white h-full text-nowrap md:hidden md:px-10 px-2 py-0 md:py-8 flex-wrap md:flex-nowrap  ${
                  clothes ? "flex" : "hidden"
                }`}
              >
                <ul className="flex flex-col md:gap-3 gap-1text-nowrap">
                  <h3 className="md:mb-3 mb-0 font-DM font-bold text-[16px]">
                    Phones
                  </h3>

                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Phones
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Phones
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Phones
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Phones
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Phones
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Phones
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Phones
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Phones
                  </li>
                </ul>
                <ul className="flex flex-col md:gap-3 gap-1 text-nowrap">
                  <h3 className="md:mb-3 mb-0  font-DM font-bold text-[16px]">
                    Computers
                  </h3>

                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Computers 01
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Computers 02
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Computers 03
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Computers 04
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Computers 05
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Computers 06
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Computers 07
                  </li>
                </ul>
                <ul className="flex flex-col md:gap-3 gap-1 text-nowrap">
                  <h3 className="md:mb-3 mb-0  font-DM font-bold text-[16px]">
                    Smart watches
                  </h3>

                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Smart 01
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Smart 02
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Smart 03
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Smart 04
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Smart 05
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Smart 06
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Smart 07
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Smart 08
                  </li>
                </ul>

                <ul className="flex flex-col md:gap-3 gap-1 text-nowrap">
                  <h3 className="md:mb-3 mb-0  font-DM font-bold text-[16px]">
                    Cameras
                  </h3>

                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    01
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    02
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    03
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    04
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    05
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    06
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    07
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    08
                  </li>
                </ul>
              </div>
            </Li>

            <Li
              onClick={() => setBags(!bags)}
              className="w-full block bg-Primary text-white/70 border-b
            border-[#2d2d2d] transition-all duration-300 hover:text-white
            hover:pl-[31px] hover:left-3 md:px-4 px-2  md:py-5 py-3"
              liText="Bags"
            >
              <div
                className={`static md:absolute md:group-hover:flex md:gap-12 gap-5 md:text-[16px] text-[12px] left-full top-0 bg-white h-full text-nowrap md:hidden md:px-10 px-2 py-0 md:py-8 flex-wrap md:flex-nowrap  ${
                  bags ? "flex" : "hidden"
                }`}
              >
                <ul className="flex flex-col md:gap-3 gap-1 text-nowrap">
                  <h3 className="md:mb-3 mb-0 font-DM font-bold text-[16px]">
                    Phones
                  </h3>

                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Phones 01
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Phones 02
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Phones 03
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Phones 04
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Phones 05
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Phones 06
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Phones 07
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Phones 08
                  </li>
                </ul>
                <ul className="flex flex-col md:gap-3 gap-1text-nowrap">
                  <h3 className="md:mb-3 mb-0 font-DM font-bold text-[16px]">
                    Computers
                  </h3>

                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Computers 01
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Computers 02
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Computers 03
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Computers 04
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Computers 05
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Computers 06
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Computers 07
                  </li>
                </ul>
                <ul className="flex flex-col md:gap-3 gap-1 text-nowrap">
                  <h3 className="md:mb-3 mb-0 font-DM font-bold text-[16px]">
                    Smart watches
                  </h3>

                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Smart watches 01
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Smart watches 02
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Smart watches 03
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Smart watches 04
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Smart watches 05
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Smart watches 06
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Smart watches 07
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Smart watches 08
                  </li>
                </ul>

                <ul className="flex flex-col md:gap-3 gap-1 text-nowrap">
                  <h3 className="md:mb-3 mb-0 font-DM font-bold text-[16px]">
                    Cameras
                  </h3>

                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Cameras 01
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Cameras 02
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Cameras 03
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Cameras 04
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Cameras 05
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Cameras 06
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Cameras 07
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Cameras 08
                  </li>
                </ul>
              </div>
            </Li>

            <Li
              onClick={() => setHome(!home)}
              className="w-full block bg-Primary text-white/70 border-b
            border-[#2d2d2d] transition-all duration-300 hover:text-white
            hover:pl-[31px] hover:left-3 px-4 py-5"
              liText="Home appliances"
            >
              <div
                className={`static md:absolute md:group-hover:flex md:gap-12 gap-5 md:text-[16px] text-[12px] left-full top-0 bg-white h-full text-nowrap md:hidden md:px-10 px-2 py-0 md:py-8 flex-wrap md:flex-nowrap  ${
                  home ? "flex" : "hidden"
                }`}
              >
                <ul className="flex flex-col md:gap-3 gap-1 text-nowrap">
                  <h3 className="md:mb-3 mb-0 font-DM font-bold text-[16px]">
                    Phones
                  </h3>

                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    01
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    02
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    03
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    04
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    05
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    06
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    07
                  </li>
                </ul>
                <ul className="flex flex-col md:gap-3 gap-1 text-nowrap">
                  <h3 className="md:mb-3 mb-0 font-DM font-bold text-[16px]">
                    Computers
                  </h3>

                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Computers 01
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Computers 02
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Computers 03
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Computers 04
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Computers 05
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Computers 06
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Computers 07
                  </li>
                </ul>
                <ul className="flex flex-col md:gap-3 gap-1 text-nowrap">
                  <h3 className="md:mb-3 mb-0 font-DM font-bold text-[16px]">
                    Smart watches
                  </h3>

                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Smart watches 01
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Smart watches 02
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Smart watches 03
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Smart watches 04
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Smart watches 05
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Smart watches 06
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Smart watches 07
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Smart watches 08
                  </li>
                </ul>

                <ul className="flex flex-col md:gap-3 gap-1 text-nowrap">
                  <h3 className="md:mb-3 mb-0 font-DM font-bold text-[16px]">
                    Cameras
                  </h3>

                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Cameras 01
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Cameras 02
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Cameras 03
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Cameras 04
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Cameras 05
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Cameras 06
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Cameras 07
                  </li>
                  <li className="text-Secondary transition-all duration-300 hover:text-Primary">
                    {" "}
                    Cameras 08
                  </li>
                </ul>
              </div>
            </Li>
          </ul>
        )}

        <div className="search relative w-full md:w-auto">
          <input
            className="  md:w-[601px] w-full md:px-5 px-3 md:py-4 py-2 outline-none bg-white"
            type="text"
            placeholder="Search Products"
            onChange={manageSearch}
            value={search}
          />
          <FaSearch className="absolute top-1/2 md:right-5 right-3 -translate-y-1/2 text-Primary" />
        </div>

        <div className="account md:flex hidden items-center gap-x-10">
          <div
            onClick={() => setLogin(!login)}
            className="left flex items-center gap-x-2.5"
          >
            <FaUser />
            <TiArrowSortedDown />
          </div>

          <div onClick={() => setCart(!cart)} className="right">
            <FaShoppingCart />
          </div>
        </div>

        {cart && (
          <div className="cart w-[360px] bg-[#F5F5F3] absolute z-10 right-0 top-full">
            <div className="top flex justify-between items-center p-5">
              <div className="image flex gap-x-5 items-center">
                <img className="w-20 h-20 bg-[#979797]" src="" alt="" />
                <div className="text">
                  <p className="name font-DM text-sm font-bold mb-3">
                    Black Smart Watch
                  </p>
                  <p className="price font-DM text-sm font-bold">$44.00</p>
                </div>
              </div>
              <div className="icon">
                <IoCloseSharp />
              </div>
            </div>

            <div className="bottom p-5">
              <p className="font-DM text-[16px] leading-6 mb-3 text-[#767676]">
                {" "}
                Subtotal: <b className="text-Primary">$44.00</b>{" "}
              </p>
              <div className="flex gap-x-5">
                <Button
                  className="font-bold font-DM text-sm"
                  ButtonText="Checkout"
                />
                <Button
                  className="font-bold font-DM text-sm"
                  ButtonText="View Cart"
                />
              </div>
            </div>
          </div>
        )}

        {login && (
          <div className="account z-10 absolute  w-[200px]  bg-white right-14 top-full">
            <Button
              className="!w-full bg-[#2B2B2B] text-Primary"
              ButtonText="My Account"
            />
            <Button className="!w-full" ButtonText="Log Out" />
          </div>
        )}
      </Container>

      {search.length > 0 &&
        (filterData.length > 0 ? (
          <ul className="bg-slate-500 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1   p-5 gap-2 absolute top-full left-0 w-full z-20">
            {filterData.map((item, index) => 
              
        
              (
              <li className="grid grid-cols-3 p-4  bg-sky-400" key={index}>
                <img
                  className="h-40 "
                  src={item.thumbnail}
                  alt={item.thumbnail}
                />
                <div>
                  <h2>{item.title}</h2>
                  <p> ${item.price}</p>
                </div>
                <div className="flex flex-col items-end justify-center">
                  <button className="py-2 px-4 bg-orange-300 font-DM mb-2">
                    Add to Card
                  </button>
                  <button className="py-2 px-4 bg-orange-300 font-DM ">
                    Wish List
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-center text-xl text-red-600 mt-4">
            <p>No product found</p>
          </div>
        ))}
    </div>
  );
};

export default SearchBar;
