import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { useEffect, useState } from "react";
import BookCard from "../../components/BookCard";
import HeroSection from "../../components/HeroSection";
interface HomeProps {
  page: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}
const HomePage = ({ page, setCount }: HomeProps) => {
  const [bookList, setBookList] = useState<Book["book"][]>([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios(`https://gutendex.com/books?page=${page}`).then((res) => {
      setBookList(res.data.results);
      setLoading(false);
      setCount(Math.floor(res.data.count / 32));
    });
  }, [page, setCount]);
  return (
    <>
      <HeroSection />
      <section className="mt-5">
        <div>
          <h3 className="text-2xl font-bold mb-3">Popular Now</h3>
          <div></div>
        </div>

        {isLoading ? (
          <div className="h-[50vh] w-full grid place-items-center">
            <ArrowDownCircleIcon className="w-[10vh] animate-pulse text-amber-700" />
          </div>
        ) : (
          <div className="py-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-7 gap-y-10 justify-items-center ">
            {bookList.map((item) => (
              <BookCard key={item.id} book={item} />
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default HomePage;
