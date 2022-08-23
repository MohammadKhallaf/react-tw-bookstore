const Sitebar = ({ direction }: { direction: string }) => {
  return (
    <nav
      className={`justify-center py-5 flex-${direction}  ${
        direction === "row" ? "hidden md:flex" : ""
      }`}
    >
      <ul
        className={`flex flex-${direction} ${
          direction === "row" ? "space-x-5" : "space-y-3"
        } select-none font-semibold`}
      >
        <li className="text-slate-400 hover:text-lightViolet hover:cursor-pointer">
          Home
        </li>
        <li className="text-slate-400 hover:text-lightViolet  hover:cursor-pointer">
          Bestseller
        </li>
        <li className="text-slate-400 hover:text-lightViolet  hover:cursor-pointer">
          Category
        </li>
        <li className="text-slate-400 hover:text-lightViolet  hover:cursor-pointer">
          Find a store
        </li>
        <li className="text-slate-400 hover:text-lightViolet  hover:cursor-pointer">
          Blog
        </li>
      </ul>
    </nav>
  );
};

export default Sitebar;
