import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GlobeAltIcon, PencilIcon } from "@heroicons/react/24/outline";
import ArrowDownTrayIcon from "../../components/Icons/ArrowDownTray";

const BookPage = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState<Book["book"]>();
  useEffect(() => {
    axios.get("https://gutendex.com/books/" + bookId).then((res) => {
      console.log(res.data);
      setBook(res.data);
    });
  }, [bookId]);

  const topicHandler = (subject: string) => {
    // TODO: add debounce setTimeout
    axios
      .get("https://gutendex.com/books", { params: { topic: subject } })
      .then((res) => console.log(res.data));
  };
  if (!book) {
    return <>Loading ... </>;
  }
  return (
    <article className="flex flex-col sm:flex-row  gap-4">
      <img
        src={book.formats["image/jpeg"]}
        alt={`${book.title} Book`}
        className="sm:h-[300px] aspect-[3/4] object-cover rounded-3xl sm:rounded-xl"
      />
      <div className="flex flex-col gap-2">
        {/* Title */}
        <h3 className="text-2xl font-bold">{book.title}</h3>
        {/* Authors */}
        <ul className="font-semibold">
          {book.authors.map((person, idx) => {
            return (
              <li
                key={`${person}-${idx}`}
                className=" text-lightViolet flex flex-row gap-1 items-center"
              >
                <span>
                  <PencilIcon className="w-5 h-5 font-semibold " />
                </span>
                <span> {person.name} </span>
              </li>
            );
          })}
        </ul>
        {/* Languages */}
        <div className="flex flex-row gap-1 items-center">
          <GlobeAltIcon className="w-5 h-5 font-semibold" />
          {book.languages.map((language, idx) => {
            return <span key={`${language}-${idx}`}>{language}</span>;
          })}
        </div>
        {/* Downloads */}
        <p className="flex flex-row items-center gap-1">
          <span>
            <ArrowDownTrayIcon className="w-5 h-5 text-darkViolet" />
          </span>
          <span className="font-semibold ">{book.download_count}</span>
          <span> {book.download_count > 1 ? "time" : "times"}</span>
        </p>
        {/* Subjects */}
        <div className="text-xs text-slate-500 flex flex-row flex-wrap gap-1">
          {book.subjects.map((subject, idx) => {
            return (
              <span
                className="border border-slate-900 border-solid rounded-full w-fit px-3 py-1"
                key={`${subject}-${idx}`}
              >
                {subject}
              </span>
            );
          })}
        </div>
        {/* BookShelves */}
        <div className="text-xs text-slate-900 flex flex-row flex-wrap gap-1 mt-auto">
          {book.bookshelves.map((subject, idx) => {
            return (
              <span
                className="border border-slate-900 border-solid rounded-full w-fit px-3 py-1 font-semibold text-darkViolet select-none"
                key={`${subject}-${idx}`}
                onClick={topicHandler.bind(null, subject)}
              >
                {subject}
              </span>
            );
          })}
        </div>
      </div>
    </article>
  );
};

export default BookPage;
