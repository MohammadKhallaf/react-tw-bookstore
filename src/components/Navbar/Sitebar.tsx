import { NavLink } from "react-router-dom";
const Sitebar = ({ direction }: { direction: string }) => {
  return (
    <nav
      className={`justify-center pt-5 pb-3 flex-${direction}  ${
        direction === "row"
          ? "hidden md:flex shadow-lg min-w-fit w-1/4 mx-auto px-5 md:pb-4 rounded-3xl mt-3 bg-calmWhite"
          : ""
      }`}
    >
      <ul
        className={`flex flex-${direction} ${
          direction === "row" ? "space-x-5" : "space-y-4 items-center"
        } select-none font-semibold`}
      >
        <li className="nav__item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/bs">Bestseller</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/ct">Category</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/fs">Find a store</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/bg">Blog</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Sitebar;
