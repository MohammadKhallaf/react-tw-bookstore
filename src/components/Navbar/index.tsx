import * as React from "react";
import {
  SearchIcon,
  HeartIcon as OutlinedHeart,
} from "@heroicons/react/outline";
import { HeartIcon as SolidHeart } from "@heroicons/react/solid";
export interface NavbarProps {}

export function Navbar(props: NavbarProps) {
  return (
    <header className=" px-5 py-2 ">
      <div className="flex w-full justify-between items-baseline ">
        <h1 className="text-xl font-bold font-nova select-none">
          Pyramids Store
        </h1>

        <form>
          <div className="relative">
            <input
              type="search"
              id="site-search"
              // className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              className="w-[30rem] rounded-2xl pr-5 pl-3 bg-slate-100 py-3"
              placeholder="search by author, title, name ..."
              required
            />
            <div className="flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none">
              <SearchIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </div>
          </div>
        </form>
        <div className="flex row space-x-3 items-center">
          <OutlinedHeart className="w-5 h-5 text-gray-500 dark:text-gray-400 hover:stroke-red-700 hover:cursor-pointer" />
          <span className="flex items-center justify-center p-4 w-5 h-5 text-calmWhite bg-lightViolet rounded-full  ">
            0
          </span>
          <span>EN</span>
        </div>
      </div>
    </header>
  );
}
