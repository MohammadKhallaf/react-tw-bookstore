import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { Dispatch, SetStateAction } from "react";

const BtmPagination = ({
  page,
  count,
  setPage,
}: {
  page: number;
  count: number;
  setPage: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <nav className="container mx-auto mt-3 py-3 border-t-2 border-slate-100 border-solid">
      <div className="flex flex-row justify-between">
        <div>
          Showing page <span className="font-bold">{page}</span> of{" "}
          <span className="font-bold">{count}</span>
        </div>
        <div className="flex flex-row space-x-3">
          <button
            onClick={() => (page > 1 ? setPage((prev) => prev - 1) : null)}
            disabled={page < 2}
            className="btm-nav__btn"
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </button>
          <button
            onClick={() => setPage((prev) => prev + 1)}
            className="btm-nav__btn"
            disabled={page >= count}
          >
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default BtmPagination;
