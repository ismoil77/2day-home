import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import searchh from "/src/assets/Search.svg";
import shopCart from "/src/assets/Shopping--cart.svg";
import useAv from "/src/assets/User--avatar.svg";
import men from "/src/assets/Menu.svg";
import { Button, Drawer } from "antd";
import Switcher from "../component/Swicher";

const Layout = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div className="bg-[white] dark:bg-black dark:text-[white]">
      <div className="pl-[100px] pr-[100px] pt-[20px] pb-[20px] sm:p-[10px]">
        <div className="flex justify-between items-center p-[10px] border-b-[2px] ">
          <Drawer
            title="Basic Drawer"
            onClose={onClose}
            open={open}
            className="dark:bg-[#6e6e6e] "
          >
            <div
              className="dark:bg-black dark:text-[white] flex justify-between pt-[20px] pb-[20px] flex-col px-0 py-0"
              onClick={onClose}
            >
              <h1 className="text-[20px] font-[400] font-[Satoshi] dark:text-[white] text-[#5d5c5c] p-[10px] hover:bg-[#9188918f] rounded-xl hover:duration-1000 hover:text-[#FFF]">
                <Link to={"/"}> Plant pots</Link>
              </h1>
              <h1 className="text-[20px] font-[400] font-[Satoshi] dark:text-[white] text-[#5d5c5c] p-[10px] hover:bg-[#9188918f] rounded-xl hover:duration-1000 hover:text-[#FFF]">
                <Link to={"/courses"}>Ceramics</Link>
              </h1>
              <h1 className="text-[20px] font-[400] font-[Satoshi] dark:text-[white] text-[#5d5c5c] p-[10px] hover:bg-[#9188918f] rounded-xl hover:duration-1000 hover:text-[#FFF]">
                Tables
              </h1>
              <h1 className="text-[20px] font-[400] font-[Satoshi] dark:text-[white] text-[#5d5c5c] p-[10px] hover:bg-[#9188918f] rounded-xl hover:duration-1000 hover:text-[#FFF]">
                Chairs
              </h1>
              <h1 className="text-[20px] font-[400] font-[Satoshi] dark:text-[white] text-[#5d5c5c] p-[10px] hover:bg-[#9188918f] rounded-xl hover:duration-1000 hover:text-[#FFF]">
                Crockery
              </h1>
              <h1 className="text-[20px] font-[400] font-[Satoshi] dark:text-[white] text-[#5d5c5c] p-[10px] hover:bg-[#9188918f] rounded-xl hover:duration-1000 hover:text-[#FFF]">
                Tableware
              </h1>
              <h1 className="text-[20px] font-[400] font-[Satoshi] dark:text-[white] text-[#5d5c5c] p-[10px] hover:bg-[#9188918f] rounded-xl hover:duration-1000 hover:text-[#FFF]">
                Cutlery
              </h1>
            </div>
          </Drawer>
          <div className="sm:hidden">
            <img className="w-[20px] h-[20px] sm:hidden" src={searchh} alt="" />
          </div>
          <div className="flex">
            <Switcher />
            <h1 className="text-[30px] font-serif font-[400]">Avion</h1>
          </div>
          <div className="flex gap-[5px]">
            <img
              className="w-[20px] h-[20px] sm:hidden"
              src={shopCart}
              alt=""
            />
            <img className="w-[20px] h-[20px]  sm:hidden" src={useAv} alt="" />
            <img
              className="w-[20px] h-[20px] sm:flex hidden"
              src={searchh}
              alt=""
            />

            <img
              className="w-[20px] h-[20px]"
              src={men}
              onClick={showDrawer}
              alt=""
            />
          </div>
        </div>
        <div
          className="pl-[200px] pr-[200px] flex justify-between pt-[20px] pb-[20px] sm:hidden"
          onClick={showDrawer}
        >
          <h1 className="text-[20px] font-[400] font-[Satoshi] text-[#5d5c5c] p-[10px] hover:bg-[#9188918f] rounded-xl hover:duration-1000 hover:text-[#FFF]">
            <Link to={"/"}> Plant pots</Link>
          </h1>
          <h1 className="text-[20px] font-[400] font-[Satoshi] text-[#5d5c5c] p-[10px] hover:bg-[#9188918f] rounded-xl hover:duration-1000 hover:text-[#FFF]">
            <Link to={"/courses"}>Ceramics</Link>
          </h1>
          <h1 className="text-[20px] font-[400] font-[Satoshi] text-[#5d5c5c] p-[10px] hover:bg-[#9188918f] rounded-xl hover:duration-1000 hover:text-[#FFF]">
            Tables
          </h1>
          <h1 className="text-[20px] font-[400] font-[Satoshi] text-[#5d5c5c] p-[10px] hover:bg-[#9188918f] rounded-xl hover:duration-1000 hover:text-[#FFF]">
            Chairs
          </h1>
          <h1 className="text-[20px] font-[400] font-[Satoshi] text-[#5d5c5c] p-[10px] hover:bg-[#9188918f] rounded-xl hover:duration-1000 hover:text-[#FFF]">
            Crockery
          </h1>
          <h1 className="text-[20px] font-[400] font-[Satoshi] text-[#5d5c5c] p-[10px] hover:bg-[#9188918f] rounded-xl hover:duration-1000 hover:text-[#FFF]">
            Tableware
          </h1>
          <h1 className="text-[20px] font-[400] font-[Satoshi] text-[#5d5c5c] p-[10px] hover:bg-[#9188918f] rounded-xl hover:duration-1000 hover:text-[#FFF]">
            Cutlery
          </h1>
        </div>
      </div>
      <Outlet />
      <footer className="flex justify-between pl-[100px] pr-[100px] pt-[30px] pb-[30px]  bg-[#2A254B] sm:p-[10px] sm:flex-wrap dark:bg-black dark:text-white">
        <div className="sm:w-[48%]">
          <h1 className="text-[18px] text-[white] pt-[5px] font-[400]">Menu</h1>
          <h1 className="text-[18px] text-[white] pt-[5px] font-[400]">
            New arrivals
          </h1>
          <h1 className="text-[18px] text-[white] pt-[5px] font-[400]">
            Best sellers
          </h1>
          <h1 className="text-[18px] text-[white] pt-[5px] font-[400]">
            Recently viewed
          </h1>
          <h1 className="text-[18px] text-[white] pt-[5px] font-[400]">
            Popular this week
          </h1>
          <h1 className="text-[18px] text-[white] pt-[5px] font-[400]">
            All products
          </h1>
        </div>
        <div className="sm:w-[48%]">
          <h1 className="text-[18px] text-[white] pt-[5px] font-[400]">
            Categories
          </h1>
          <h1 className="text-[18px] text-[white] pt-[5px] font-[400]">
            Crockery
          </h1>
          <h1 className="text-[18px] text-[white] pt-[5px] font-[400]">
            Furniture
          </h1>
          <h1 className="text-[18px] text-[white] pt-[5px] font-[400]">
            Homeware
          </h1>
          <h1 className="text-[18px] text-[white] pt-[5px] font-[400]">
            Plant pots
          </h1>
          <h1 className="text-[18px] text-[white] pt-[5px] font-[400]">
            Chairs
          </h1>
          <h1 className="text-[18px] text-[white] pt-[5px] font-[400]">
            Crockery
          </h1>
        </div>
        <div className="sm:w-[30%]">
          <h1 className="text-[18px] text-[white] pt-[5px] font-[400]">
            Our company
          </h1>
          <h1 className="text-[18px] text-[white] pt-[5px] font-[400]">
            About us
          </h1>
          <h1 className="text-[18px] text-[white] pt-[5px] font-[400]">
            Vacancies
          </h1>
          <h1 className="text-[18px] text-[white] pt-[5px] font-[400]">
            Contact us
          </h1>
          <h1 className="text-[18px] text-[white] pt-[5px] font-[400]">
            Privacy
          </h1>
          <h1 className="text-[18px] text-[white] pt-[5px] font-[400]">
            Returns policy
          </h1>
        </div>
        <div className="w-[40%] sm:w-[100%] sm:pt-[20px]">
          <h1 className="text-[18px] font-[400] text-[white]">
            Join our mailing list
          </h1>
          <div className="mt-[10px] w-[100%] flex">
            <input
              className="w-[70%] bg-[#FFFFFF26] h-[50px] pl-[18px] text-[20px] text-[white] rounded-sm outline-none "
              placeholder="your@email.com"
              type="text"
            />
            <button className="w-[30%] h-[50px] bg-[white] text-[18px] text-[#767474]">
              Sign up
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
