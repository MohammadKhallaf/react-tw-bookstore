import { ArrowPathIcon } from "@heroicons/react/24/outline";
import MagnifyingGlassIcon from "@heroicons/react/24/solid/MagnifyingGlassIcon";

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
            <ArrowPathIcon className="w-5 h-5 text-red-500 dark:text-red-400 animate-ping" />
          )) || (
            <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          )}
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
