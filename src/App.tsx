import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "./components/BookCard";
import HeroSection from "./components/HeroSection";
import { Navbar } from "./components/Navbar";
import { ArrowCircleDownIcon } from "@heroicons/react/outline";
import BtmPagination from "./components/BtmPagination";

function App() {
  // TODO : replace with useReducer
  const [bookList, setBookList] = useState<Book["book"][]>([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios(`https://gutendex.com/books?page=${page}`).then((res) => {
      setBookList(res.data.results);
      setLoading(false);
      setCount(Math.floor(res.data.count / 32));
    });
  }, [page]);

  return (
    <>
      <Navbar />
      <div className="mt-20 md:mt-[10rem]"></div>
      <main className="container mx-auto">
        <HeroSection />
        <section className="mt-5">
          <div>
            <h3 className="text-2xl font-bold mb-3">Popular Now</h3>
            <div></div>
          </div>

          {isLoading ? (
            <div className="h-[50vh] w-full grid place-items-center">
              <ArrowCircleDownIcon className="w-[10vh] animate-pulse text-amber-700" />
            </div>
          ) : (
            <div className="py-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-7 gap-y-10 justify-items-center ">
              {bookList.map((item) => (
                <BookCard key={item.id} book={item} />
              ))}
            </div>
          )}
        </section>
      </main>

      <BtmPagination page={page} count={count} setPage={setPage} />
    </>
  );
}

export default App;
