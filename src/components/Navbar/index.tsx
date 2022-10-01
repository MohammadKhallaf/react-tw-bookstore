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
export interface NavbarProps {}

export function Navbar(props: NavbarProps) {
  const navigate = useNavigate();
  const [init, setInit] = useState(true);
  const cartItemsLength = useSelector(selectCartItemsLength);
  const [isShow, setShow] = useState(false);
  const [springs, api] = useSpring(() => ({
    from: { scale: 1 },
    config: {
      mass: 3,
      tension: 300,
      friction: 17,
      precision: 0.001,
      velocity: 0.011,
      bounce: 1,
    },
  }));
  const toggleMobileNav = () => {
    setShow((prevState) => !prevState);
  };
  useEffect(() => {
    if (!init) {
      console.log("render");
      api.start({
        from: {
          scale: 1.25,
        },
        to: {
          scale: 1,
        },
      });
    }
    setInit(false);
  }, [cartItemsLength]);
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
            <animated.span
              style={springs}
              className="flex items-center justify-center p-4 w-5 h-5 text-calmWhite bg-lightViolet rounded-full font-semibold"
            >
              {cartItemsLength}
            </animated.span>
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
