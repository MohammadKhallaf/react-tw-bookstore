import {
  fetchAllBooks,
  selectBooks,
  selectLoading,
} from "@/app/features/books/booksSlice";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import FilterBar from "@/components/FilterBar";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";
import BookCard from "../components/BookCard";
import HeroSection from "../components/HeroSection";

interface HomeProps {
  page: number;
}
const HomePage = ({ page }: HomeProps) => {
  const booksList = useAppSelector(selectBooks);
  const isLoading = useAppSelector(selectLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllBooks(page));
  }, [page]);

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
          <>
            <FilterBar />
            <div className="py-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-7 gap-y-10 justify-items-center ">
              {booksList.map((item) => (
                <BookCard key={item.id} book={item} />
              ))}
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default HomePage;
