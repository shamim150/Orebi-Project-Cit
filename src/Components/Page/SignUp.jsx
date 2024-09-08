import React, { useState } from "react";
import Container from "../Layer/Container";
import Breadcumb from "../Layer/Breadcumb";
import TitleHeader from "../Layer/TitleHeader";
import Input from "../Layer/Input";
import { IoEye, IoEyeOff } from "react-icons/io5";
import ButtonLarge from "../Layer/ButtonLarge";

const SignUp = () => {
  let Division = [
    "Dhaka",
    "Chattogram",
    "Rajshahi",
    "Khulna",
    "Barishal",
    "Sylhet",
    "Rangpur",
    "Mymensingh",
  ];

  let District = [
    "Bagerhat",
    "Bandarban",
    "Barguna",
    "Barishal",
    "Bhola",
    "Bogura",
    "Brahmanbaria",
    "Chandpur",
    "Chattogram",
    "Chuadanga",
    "Cox's Bazar",
    "Cumilla",
    "Dhaka",
    "Dinajpur",
    "Faridpur",
    "Feni",
    "Gaibandha",
    "Gazipur",
    "Gopalganj",
    "Habiganj",
    "Jamalpur",
    "Jashore",
    "Jhalokathi",
    "Jhenaidah",
    "Joypurhat",
    "Khagrachhari",
    "Khulna",
    "Kishoreganj",
    "Kurigram",
    "Kushtia",
    "Lakshmipur",
    "Lalmonirhat",
    "Madaripur",
    "Magura",
    "Manikganj",
    "Meherpur",
    "Moulvibazar",
    "Munshiganj",
    "Mymensingh",
    "Naogaon",
    "Narail",
    "Narayanganj",
    "Narsingdi",
    "Natore",
    "Netrokona",
    "Nilphamari",
    "Noakhali",
    "Pabna",
    "Panchagarh",
    "Patuakhali",
    "Pirojpur",
    "Rajbari",
    "Rajshahi",
    "Rangamati",
    "Rangpur",
    "Satkhira",
    "Shariatpur",
    "Sherpur",
    "Sirajganj",
    "Sunamganj",
    "Sylhet",
    "Tangail",
    "Thakurgaon",
  ];

  let [show, setShow] = useState(false);

  let [repeat, setRepeat] = useState(false);

  let [firstName, setFirstName] = useState("");
  let [firstNameErr, setFirstNameErr] = useState("");

  let [lastName, setLastName] = useState("");
  let [lastNameErr, setLastNameErr] = useState("");

  let [password, setPassword] = useState("");
  let [passwordErr, setPasswordErr] = useState("");




  let [email, setEmail] = useState("");
  let [emailErr, setEmailErr] = useState("");



  let managepassword = (element) => {
    setPassword(element.target.value);
    setPasswordErr(" ");
  };

  let manageFirstName = (element) => {
    setFirstName(element.target.value);
    setFirstNameErr(" ");
  };

  let managLastName = (e) => {
    setLastName(e.target.value);
    setLastNameErr("");
  };

  let manageEmail = (element) => {
    setEmail(element.target.value);
    setEmailErr("");
  };

  let manageSubmit = () => {
    if (!firstName) {
      setFirstNameErr("First Name is Required");
    }

    if (!lastName) {
      setLastNameErr("Last Name is Required");
    }

    if (!password) {
      setPasswordErr("Password is Required");
    } else if (
      !/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(
        password
      )
    ) {
      setPasswordErr(
        "Password must contain one digit from 1 to 9, one lowercase letter, one uppercase letter, one special character, no space, and it must be 8-16 characters long."
      );
    }

    if(!email){
      setEmailErr("Email is Required")
    }else if (
      (
        !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,4}$/.test(email)
      )
    )
    {
     setEmailErr("Email is not valid") 
    }
  };

  return (
    <div>
      <Container className="mt-20">
        <Breadcumb />
        <div className=" border-b border-[#D8D8D8] pb-16">
          <p className="max-w-[644px] font-DM text-base leading-7 text-Secondary ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the.
          </p>
        </div>
        <div className="flex flex-wrap gap-y-10  gap-x-10 border-b border-[#D8D8D8] pb-16">
          <TitleHeader
            className=" w-full mt-14"
            headerText="Your Personal Details"
          />

          <Input
            className="w-[507px] "
            labelText="First Name"
            placeholder="First Name"
            type="text"
            id="fName"
            inpurtValue={firstName}
            onChange={manageFirstName}
          >
            <p className="absolute left-0 top-full text-xs text-red-600 ">
              {firstNameErr}
            </p>
          </Input>

          <Input
            className="w-[507px] relative"
            labelText="Last Name"
            placeholder="Last Name"
            type="text"
            id="Last Name"
            inpurtValue={lastName}
            onChange={managLastName}
          >
            <p className="absolute left-0 top-full text-xs text-red-600 ">
              {lastNameErr}
            </p>
          </Input>

          <Input
            className="w-[507px]"
            labelText="Email address"
            placeholder="company@domain.com"
            type="Email"
            id="Email address"
            inpurtValue={email}
            onChange={manageEmail}
           
          >
            <p className="absolute left-0 top-full text-xs text-red-600 ">
              {emailErr}
            </p>
          </Input>



















          <Input
            className="w-[507px]"
            labelText="Telephone"
            placeholder="Your phone number"
            type="number"
            id="Telephone"
          />
        </div>
        <div className="flex flex-wrap gap-y-10  gap-x-10 border-b border-[#D8D8D8] pb-16 ">
          <TitleHeader className=" w-full mt-14" headerText="New Customer" />
          <Input
            className="w-[507px]"
            labelText="Address 1"
            placeholder="4279 Zboncak Port Suite 6212"
            type="text"
            id="Address 1"
          />
          <Input
            className="w-[507px]"
            labelText="Address 2"
            placeholder="—"
            type="text"
            id="Address 2"
          />
          <Input
            className="w-[507px]"
            labelText="City"
            placeholder="Your city"
            type="text"
            id="Your city"
          />
          <Input
            className="w-[507px]"
            labelText="Post Code"
            placeholder="05228"
            type="text"
            id="Post Code"
          />

          <div className=" w-[507px] border-b border-[#D8D8D8]">
            <label
              className="font-bold font-DM text-base leading-6 text-Primary"
              htmlFor="Division"
            >
              Division
            </label>
            <select
              className="block w-full outline-none pb-4 pt-2.5"
              name=""
              id="Division"
            >
              <option value="Please Select">Please Select</option>

              {Division.map((item, index) => (
                <option key={index} value={item}>
                  {" "}
                  {item}{" "}
                </option>
              ))}
            </select>
          </div>

          <div className=" w-[507px] border-b border-[#D8D8D8]">
            <label
              className="font-bold font-DM text-base leading-6 text-Primary"
              htmlFor="District"
            >
              District
            </label>
            <select
              className="block w-full outline-none pb-4 pt-2.5"
              name=""
              id="District"
            >
              <option value="Please Select">Please Select</option>

              {District.map((item, index) => (
                <option key={index} value={item}>
                  {" "}
                  {item}{" "}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex flex-wrap gap-y-10  gap-x-10 border-b border-[#D8D8D8] pb-16 ">
          <TitleHeader className=" w-full mt-14" headerText="Your Password" />
          <Input
            className="w-[507px] relative"
            labelText="Password"
            placeholder="Password"
            type={`${show ? "text" : "password"}`}
            id="Password"
            onChange={managepassword}
            inpurtValue={password}
          >
            {show ? (
              <IoEye
                onClick={() => setShow(!show)}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              />
            ) : (
              <IoEyeOff
                onClick={() => setShow(!show)}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              />
            )}

            <p className="absolute left-0 top-full text-xs text-red-600 ">
              {passwordErr}
            </p>
          </Input>

          <Input
            className="w-[507px] relative"
            labelText="Repeat Password"
            placeholder="Repeat Password"
            type={`${repeat ? "text" : "password"}`}
            id="Repeat Password"
          >
            {repeat ? (
              <IoEye
                onClick={() => setRepeat(!repeat)}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              />
            ) : (
              <IoEyeOff
                onClick={() => setRepeat(!repeat)}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              />
            )}
          </Input>
        </div>

        <div>
          <div className="flex items-center gap-4 mt-16">
            <input
              className="relative appearance-none w-2.5 h-2.5 border border-Secondary  checked:bg-Secondary after:content-[''] after:absolute after:left-1/2 after:top-1/2 after:-translate-y-1/2 after:-translate-x-1/2 after:w-2 after:h-2 after:bg-Secondary after:border after:border-white after:opacity-0 checked:after:opacity-100  "
              id="policy"
              type="checkbox"
            />
            <label
              className="font-DM text-base text-Secondary"
              htmlFor="policy"
            >
              I have read and agree to the Privacy Policy
            </label>
          </div>

          <div className="flex items-center  mt-6 ">
            <label className="mr-8" htmlFor="">
              Subscribe Newsletter
            </label>
            <div>
              <input
                className="relative appearance-none w-2.5 h-2.5 border border-Secondary  checked:bg-Secondary after:content-[''] after:absolute after:left-1/2 after:top-1/2 after:-translate-y-1/2 after:-translate-x-1/2 after:w-2 after:h-2 after:bg-Secondary after:border after:border-white after:opacity-0 checked:after:opacity-100 mr-4 "
                id="yes"
                type="radio"
                name="newLetter"
              />
              <label className="mr-10" htmlFor="yes">
                Yes
              </label>
            </div>
            <div className>
              <input
                className="relative appearance-none w-2.5 h-2.5 border border-Secondary  checked:bg-Secondary after:content-[''] after:absolute after:left-1/2 after:top-1/2 after:-translate-y-1/2 after:-translate-x-1/2 after:w-2 after:h-2 after:bg-Secondary after:border after:border-white after:opacity-0 checked:after:opacity-100  mr-4 "
                id="no"
                type="radio"
                name="newLetter"
              />
              <label htmlFor="no">No</label>
            </div>
          </div>
          <ButtonLarge className='mt-7 mb-32' onClick={manageSubmit} ButtonLargeText="Log in" />
        </div>
      </Container>
    </div>
  );
};

export default SignUp;
