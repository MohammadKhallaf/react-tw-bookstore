const Sitebar = () => {
  return (
    <nav className="flex flex-row justify-center py-5">
      <ul className="flex flex-row space-x-5 select-none font-semibold">
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
