import * as React from "react";

export interface NavbarProps {}

export function Navbar(props: NavbarProps) {
  return (
    <header className="bg-darkYellow px-5 ">
      <div className="flex w-full justify-between">
        <h1 className="text-xl font-bold font-nova">
          Pyramids Store
        </h1>
        <div>search</div>
        <div>toggles</div>

        <span className="ordinal slashed-zero tabular-nums">1st</span>
      </div>
    </header>
  );
}
