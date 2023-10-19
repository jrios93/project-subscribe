import React, { useState } from "react";
import Image from "next/image";
import iconleft from "/public/assets/images/illustration-sign-up-desktop.svg";
import iconup from "/public/assets/images/illustration-sign-up-mobile.svg";
import iconsuccess from "/public/assets/images/icon-success.svg";

const Sections = ({
  onSubscribeClick,
  inputValue,
  onInputChange,
  emailError,
}) => {
  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !emailError && inputValue.trim() !== "") {
      event.preventDefault(); // Evita que se envíe el formulario
      onSubscribeClick(); // Activa el botón "Subscribe"
    }
  };

  return (
    <div className=" bg-container 2xl:w-2/4 xl:w-1/3 lg:w-1/4 sm:w-1/12 md:w-fit xs:w-fit xs:h-full xs:justify-center xs:items-center rounded-custom p-4 2xl:flex 2xl:justify-around md:flex md:justify-around shadow-md">
      <div className="flex flex-col justify-center  2xl:w-96 md:w-96 2xl:items-start md:items-start xs:items-center  gap-6 px-6">
        <Image
          src={iconup}
          layout="responsive"
          className="2xl:hidden lg:hidden md:hidden sm:hidden xs:block "
          alt="subscribe mobile"
        />
        <h1 className="text-title text-center font-bold lg:text-5xl md:text-5xl xs:text-4xl">
          Stay update!
        </h1>
        <p className="text-start text-title 2xl:text-sm md:text-sm xs:text-xs">
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <ul className="2xl:text-sm md:text-sm xs:text-xs flex items-center  gap-4 ">
          <div className="flex flex-col gap-4 items-start justify-center">
            <li className="flex justify-around items-center gap-2">
              <Image
                src={iconsuccess}
                className="2xl:w-5 md:w-5 xs:w-4 "
                alt="check"
              />
              <span>Product discovery and building what matters</span>
            </li>
            <li className="flex justify-around items-center gap-2">
              <Image
                src={iconsuccess}
                className="2xl:w-5 md:w-5 xs:w-4 "
                alt="check"
              />
              <span>Measuring to ensure updates are a success</span>
            </li>
            <li className="flex justify-around items-center gap-2">
              <Image
                src={iconsuccess}
                className="2xl:w-5 md:w-5 xs:w-4 "
                alt="check"
              />
              <span>And much more!</span>
            </li>
          </div>
        </ul>
        <form className="mt-4 flex flex-col  gap-2 w-full">
          <div className="flex justify-between">
            <label className="text-[12px] font-semibold ">Email address</label>
            {emailError && (
              <span className="text-red-500 text-sm font-bold">
                {emailError}
              </span>
            )}
          </div>
          <input
            type="email"
            placeholder="email@company.com"
            className={`border-slate-300 border-[1px] rounded-md p-4 tex-sm ${
              emailError
                ? "text-red-400 bg-red-100 border-red-300 border-[1px]"
                : " "
            } `}
            value={inputValue}
            onChange={onInputChange}
            onKeyDown={handleKeyDown}
          />
        </form>
        <button
          className="bg-title p-4 w-full rounded-md text-white hover:bg-gradient-to-r from-red-400 via-red-400 to-orange-500 shadow-md hover:shadow-lg"
          onClick={
            emailError || inputValue.trim() == "" ? null : onSubscribeClick
          }
          disabled={emailError || (inputValue && inputValue.trim() == "")}
        >
          Subscribe to monthly newsletter
        </button>
      </div>
      <div>
        <Image
          src={iconleft}
          alt="imagen"
          className="xs:invisible md:visible lg:visible"
        />
      </div>
    </div>
  );
};

export default Sections;
