import React from "react";
import Container from "./Layer/Container";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#F5F5F3] pt-12 pb-12" >
      <Container>
        <div className="mt-24 mb-11 grid grid-cols-7 gridr">
          <div className="col-span-1 ">
            <h4 className="font-bold font-DM text-base leading-6 text-Primary mb-4">
              Menu
            </h4>
            <ul className="space-y-1.5">
              <li>
                <Link className="font-bold font-DM text-sm leading-6 text-[#6D6D6D] mb-4">
                  {" "}
                  Home
                </Link>
              </li>
              <li>
                <Link className="font-bold font-DM text-sm leading-6 text-[#6D6D6D] mb-4">
                  {" "}
                  Shop
                </Link>
              </li>
              <li>
                <Link className="font-bold font-DM text-sm leading-6 text-[#6D6D6D] mb-4">
                  {" "}
                  About
                </Link>
              </li>
              <li>
                <Link className="font-bold font-DM text-sm leading-6 text-[#6D6D6D] mb-4">
                  {" "}
                  Contact
                </Link>
              </li>
              <li>
                <Link className="font-bold font-DM text-sm leading-6 text-[#6D6D6D] mb-4">
                  {" "}
                  Journal
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1 ">
            <h4 className="font-bold font-DM text-base leading-6 text-Primary mb-4">
              SHOP
            </h4>
            <ul className="space-y-1.5">
              <li>
                <Link className="font-bold font-DM text-sm leading-6 text-[#6D6D6D] mb-4">
                  {" "}
                  Category 1
                </Link>
              </li>
              <li>
                <Link className="font-bold font-DM text-sm leading-6 text-[#6D6D6D] mb-4">
                  {" "}
                  Category 2
                </Link>
              </li>
              <li>
                <Link className="font-bold font-DM text-sm leading-6 text-[#6D6D6D] mb-4">
                  {" "}
                  Category 3
                </Link>
              </li>
              <li>
                <Link className="font-bold font-DM text-sm leading-6 text-[#6D6D6D] mb-4">
                  {" "}
                  Category 4
                </Link>
              </li>
              <li>
                <Link className="font-bold font-DM text-sm leading-6 text-[#6D6D6D] mb-4">
                  {" "}
                  Category 5
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1 ">
            <h4 className="font-bold font-DM text-base leading-6 text-Primary mb-4">
              HELP
            </h4>
            <ul className="space-y-1.5">
              <li>
                <Link className="font-bold font-DM text-sm leading-6 text-[#6D6D6D] mb-4">
                  {" "}
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="font-bold font-DM text-sm leading-6 text-[#6D6D6D] mb-4">
                  {" "}
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link className="font-bold font-DM text-sm leading-6 text-[#6D6D6D] mb-4">
                  {" "}
                  Special E-shop
                </Link>
              </li>
              <li>
                <Link className="font-bold font-DM text-sm leading-6 text-[#6D6D6D] mb-4">
                  {" "}
                  Shipping
                </Link>
              </li>
              <li>
                <Link className="font-bold font-DM text-sm leading-6 text-[#6D6D6D] mb-4">
                  {" "}
                  Secure Payments
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-2 ">
            <a
              className="font-bold font-DM text-base leading-6 text-Primary block"
              href=" tel: (052) 611-5711"
            >
              (052) 611-5711
            </a>
            <a
              className="font-bold font-DM text-base leading-6 text-Primary"
              href="mailto: company@domain.com"
            >
              company@domain.com
            </a>

            <ul className="mt-4">
              <li>
                <Link className="font-bold font-DM text-sm leading-6 text-[#6D6D6D] mb-4">
                  {" "}
                  575 Crescent Ave. Quakertown, PA 18951
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-2 ">
            <img src="/public/footerlogo.png" alt="" />
          </div>
        </div>

        <div className="flex justify-between items-center mb-14">
          <div className="icon flex gap-6">
            <Link>
            <FaFacebook />
            </Link>
            <Link>
            <FaLinkedinIn />
            </Link>
            <Link>
            <GrInstagram />
            </Link>
          </div>
          <p>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
