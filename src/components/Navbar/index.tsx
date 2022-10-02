import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  HeartIcon as OutlinedHeart,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon as SolidHeart } from "@heroicons/react/24/solid";
import Bars3Icon from "@heroicons/react/24/solid/Bars3Icon";
import MobileNavbar from "./MobileNavbar";
import Sitebar from "./Sitebar";
import SearchForm from "../SearchForm";
import { Link, useNavigate } from "react-router-dom";
import { animated, useSpring, config } from "@react-spring/web";
import { selectCartItemsLength } from "@/app/features/user/userSlice";
import CartCountIcon from "../CartCountIcon";
export interface NavbarProps {}

export function Navbar(props: NavbarProps) {
  const navigate = useNavigate();
  const [isShow, setShow] = useState(false);
 
  const toggleMobileNav = () => {
    setShow((prevState) => !prevState);
  };
 
  return (
    <>
      <header className="pt-5 pb-3 mx-auto fixed z-20 top-0 bg-transparent left-0 right-0 px-5 backdrop-blur-md shadow-md">
        <div className="flex w-full items-center relative container mx-auto ">
          {/* logo */}
          <h1
            className=" text-xl font-bold font-nova select-none whitespace-nowrap basis-[100%] md:basis-[25%] hover:cursor-pointer"
            onClick={() => navigate("/")}
          >
            <Link to={"/"}>Pyramids Store</Link>
          </h1>
          {/* <Sitebar direction="row" /> */}
          {/* search */}
          <SearchForm className="hidden md:flex basis-[50%]" />

          {/* fav settings btns - > md */}
          <div className="hidden md:flex row space-x-3 items-center basis-[25%] justify-end">
            <OutlinedHeart className="w-5 h-5 text-gray-500 dark:text-gray-400 hover:stroke-red-700 hover:cursor-pointer" />
            <CartCountIcon/>
            <span>EN</span>
          </div>
          {!isShow ? (
            <Bars3Icon
              className="w-5 h-5 md:hidden hover:cursor-pointer hover:text-lightViolet"
              onClick={toggleMobileNav}
            />
          ) : (
            <XMarkIcon
              className="w-5 h-5 md:hidden hover:cursor-pointer hover:text-lightViolet"
              onClick={toggleMobileNav}
            />
          )}
        </div>
      </header>
      <MobileNavbar isShow={isShow} toggleShow={toggleMobileNav} />
    </>
  );
}
