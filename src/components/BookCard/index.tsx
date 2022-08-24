import StarIcon from "@heroicons/react/solid/StarIcon";
import InformationCircle from "@heroicons/react/outline/InformationCircleIcon";

const BookCard = ({ book }: Book) => {
  let rate = 3;
  if (rate < 0) rate = 0;
  if (rate > 5) rate = 5;
  return (
    <div className="flex flex-col p-1 w-[80%]">
      <div className="relative group ">
        <img
          src={book.formats["image/jpeg"]}
          className="rounded-2xl w-full aspect-[3/4] object-cover group-hover:shadow-xl"
          alt=""
        />
        <InformationCircle className="will-change-transform h-7 w-7 text-slate-300 absolute right-4 bottom-4 group-hover:animate-bounce group-hover:text-white  group-hover:drop-shadow-3xl transition-all duration-900 hover:cursor-pointer" />
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
