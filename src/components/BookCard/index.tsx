import StarIcon from "@heroicons/react/solid/StarIcon";
import InformationCircle from "@heroicons/react/outline/InformationCircleIcon";
import {
  HeartIcon,
  PlusCircleIcon,
  ShoppingBagIcon,
} from "@heroicons/react/outline";
import { useNavigate } from "react-router-dom";

const BookCard = ({ book }: Book) => {
  const navigate = useNavigate();
  let rate = 3;
  if (rate < 0) rate = 0;
  if (rate > 5) rate = 5;
  const infoBtnHandler = () => {
    navigate("book/" + book.id);
  };
  return (
    <div className="flex flex-col p-1 w-[80%] select-none">
      <div className="relative group ">
        <img
          src={book.formats["image/jpeg"]}
          className="rounded-2xl w-full aspect-[3/4] object-cover group-hover:shadow-xl"
          alt=""
        />
        <div className="absolute bottom-4 flex flex-row justify-around w-full group">
          <HeartIcon className="book__icon  hover:stroke-red-700 " />
          <ShoppingBagIcon className="book__icon hover:stroke-indigo-300 hover:drop-shadow-[0px_1px_2px_black] " />
          <InformationCircle
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
        <div className="flex flex-row mt-3">
          {[...Array(rate)].map((_, idx) => {
            return <StarIcon key={idx} className="h-5 w-5 text-darkYellow " />;
          })}
          {[...Array(5 - rate)].map((_, idx) => {
            return <StarIcon key={idx} className="h-5 w-5 text-slate-400 " />;
          })}
        </div>
      </div>
    </div>
  );
};

export default BookCard;
