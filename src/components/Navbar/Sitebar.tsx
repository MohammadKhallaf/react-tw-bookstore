const Sitebar = ({ direction }: { direction: string }) => {
  return (
    <nav
      className={`justify-center pt-5 pb-3 flex-${direction}  ${
        direction === "row"
          ? "hidden md:flex shadow-lg min-w-fit w-1/2 mx-auto px-9 md:pb-4 rounded-3xl mt-3"
          : ""
      }`}
    >
      <ul
        className={`flex flex-${direction} ${
          direction === "row" ? "space-x-5" : "space-y-4 items-center"
        } select-none font-semibold`}
      >
        <li className="nav__item active">Home</li>
        <li className="nav__item">Bestseller</li>
        <li className="nav__item">Category</li>
        <li className="nav__item">Find a store</li>
        <li className="nav__item">Blog</li>
      </ul>
    </nav>
  );
};

export default Sitebar;
