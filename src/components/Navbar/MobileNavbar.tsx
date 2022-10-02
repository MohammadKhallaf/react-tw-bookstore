import { selectCartItemsLength } from "@/app/features/user/userSlice";
import { useAppSelector } from "@/app/hooks";
import {
  MagnifyingGlassIcon,
  HeartIcon as OutlinedHeart,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import { useTransition, animated, config } from "@react-spring/web";
import CartCountIcon from "../CartCountIcon";
import SearchForm from "../SearchForm";
import Sitebar from "./Sitebar";
interface Props {
  isShow: boolean;
  toggleShow: () => void;
}
const MobileNavbar = (props: Props) => {
  const transition = useTransition(props.isShow, {
    from: { top: 0 },
    enter: { top: "-30rem" },
    leave: { top: 0 },
    config: config.gentle,
  });
  return transition(
    (style, item) =>
      item && (
        <animated.div
          className={`
      flex flex-col md:hidden  
      rounded-b-xl
      pt-3 pb-3 px-5 w-full mt-[3rem]
      transition-all ease-out duration-500 drop-shadow-md
      fixed left-0 right-0 z-10 bg-calmWhite
      `}
          style={style}
        >
          <Sitebar direction="col" />
          <div className="flex flex-row space-x-3 items-baseline justify-around py-3 ">
            <OutlinedHeart className="w-5 h-5 text-gray-500 dark:text-gray-400 hover:stroke-red-700 hover:cursor-pointer" />
           <CartCountIcon/>
          </div>
          <SearchForm className="w-full px-3 mx-auto" />
        </animated.div>
      )
  );
};

export default MobileNavbar;
