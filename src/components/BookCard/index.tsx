import StarIcon from "@heroicons/react/solid/StarIcon";
interface BookCardProp {
  rate: number;
  title: string;
  description: string;
}

const BookCard = ({ rate, title, description }: BookCardProp) => {
  if (rate < 0) rate = 0;
  if (rate > 5) rate = 5;
  return (
    <div className="flex flex-col p-1 min-w-max ">
      <div>
        <img
          src="https://www.gutenberg.org/cache/epub/1342/pg1342.cover.medium.jpg"
          className="rounded-2xl"
          alt=""
        />
      </div>
      <div className="px-1 pt-3 pb-2">
        <p className="font-bold text-xl">{title}</p>
        <p className="text-md ">{description}</p>
        <div className="flex flex-row mt-2">
          {[...Array(rate)].map((_, idx) => {
            return <StarIcon key={idx} className="h-5 w-5 text-darkYellow " />;
          })}
          {[...Array(5 - rate)].map((_) => {
            return <StarIcon className="h-5 w-5 text-slate-400 " />;
          })}
        </div>
      </div>
    </div>
  );
};

export default BookCard;
