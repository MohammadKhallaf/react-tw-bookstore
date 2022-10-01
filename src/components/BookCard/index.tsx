import StarIcon from "@heroicons/react/24/solid/StarIcon";
import InformationCircle from "@heroicons/react/24/outline/InformationCircleIcon";
import { HeartIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import {
  addFav,
  addToCart,
  selectCartItems,
} from "@/app/features/user/userSlice";
import { config, useSpring, useSprings, animated } from "@react-spring/web";
import { useEffect, useRef, useState } from "react";

interface BookCardProps {
  book: Book;
}

const AnimatedCartIcon = animated(ShoppingBagIcon);
const BookCard: React.FunctionComponent<BookCardProps> = ({ book }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectCartItems);
  const cardSpring = useSpring({
    from: { scale: 0 },
    to: { scale: 1 },
    config: config.stiff,
  });
  const [btnSpring, btnApi] = useSpring(() => ({
    from: { scale: 1 },
    config: { ...config.wobbly, duration:250 },
  }));

  const infoBtnHandler = () => {
    navigate("book/" + book.id);
  };

  return (
    <animated.div
      className="flex flex-col p-1 w-[80%] select-none"
      style={cardSpring}
    >
      <div className="relative group ">
        <img
          src={book.formats["image/jpeg"]}
          className="rounded-2xl w-full aspect-[3/4] object-cover group-hover:shadow-xl"
          alt=""
        />
        <div className="absolute bottom-4 flex flex-row justify-around w-full group">
          <HeartIcon
            className="book__icon  hover:stroke-red-700 "
            onClick={() => {
              dispatch(addFav());
            }}
          />

          <AnimatedCartIcon
            style={{
              ...btnSpring,
              transform: "perspective(600px) translateZ(0)",
            }}
            fill={(cartItems.includes(book) && "#876bce") || "none"}
            stroke={(cartItems.includes(book) && "#130043") || "currentColor"}
            className="book__icon hover:stroke-indigo-300 hover:drop-shadow-[0px_1px_2px_black] "
            onClick={() => {
              dispatch(addToCart(book));
              btnApi.start({
                from: {
                  scale: 10,
                },
                to: {
                  scale: cartItems.includes(book) ? 1.1 : 1,
                },
              });
            }}
          />

          <InformationCircle
            // style={btnSpring}
            className="book__icon  hover:stroke-orange-600"
            onClick={infoBtnHandler}
          />
        </div>
      </div>
      <div className="flex flex-col px-1 pt-3 pb-2 grow">
        <p className="font-bold text-xl line-clamp-3 ">{book.title}</p>
        {book.authors.map((author, index) => (
          <p key={index} className="text-md line-clamp-3 grow text-slate-700">
            {author.name}
          </p>
        ))}
      </div>
    </animated.div>
  );
};

export default BookCard;
