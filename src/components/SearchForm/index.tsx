import { ArrowsExpandIcon } from "@heroicons/react/outline";
import SearchIcon from "@heroicons/react/solid/SearchIcon";

import axios from "axios";
import React, { FormEvent, useRef, useState } from "react";

const SearchForm = ({ className = "" }) => {
  const [query, setQuery] = useState("");
  const [isLoading, setLoading] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: FormEvent) => {
    setLoading(true);
    event.preventDefault();
    if (!searchRef.current) {
      return;
    }
    setQuery(searchRef.current.value.trim());
    axios
      .get("https://gutendex.com/books", { params: { search: query } })
      .then((res) => {
        console.log(res);
        setLoading(false);
      });
  };
  return (
    <form className={className} onSubmit={submitHandler}>
      <div className="relative w-full">
        <input
          type="search"
          id="site-search"
          className="w-full rounded-2xl px-5 pr-8 bg-slate-100 py-3"
          placeholder="search by author, title, name ..."
          ref={searchRef}
          required
          disabled={isLoading}
        />
        <div className="flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none">
          {(isLoading && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-red-500 dark:text-red-400 animate-ping"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          )) || (
            <SearchIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          )}
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
