const Sitebar = ({ direction }: { direction: string }) => {
  return (
    <nav
      className={`justify-center py-5 flex-${direction}  ${
        direction === "row" ? "hidden md:flex" : ""
      }`}>
      <ul
        className={`flex flex-${direction} ${
          direction === "row" ? "space-x-5" : "space-y-3"
        } select-none font-semibold`}>
        <li className="nav__item">Home</li>
        <li className="nav__item">Bestseller</li>
        <li className="nav__item">Category</li>
        <li className="nav__item">Find a store</li>
        <li className="nav__item">Blog</li>
      </ul>
    </nav>
  );
};

export default Sitebar;
