import React from "react";

type Props = {};

const FilterBar = (props: Props) => {
  return (
    <form className="flex flex-row justify-between">
      <input type="number" name="auth_from" id="auth_from" placeholder="from" />
      <input type="number" name="auth_to" id="auth_to" placeholder="to" />
      {/* <label htmlFor="copyright">Copyright</label> */}
      <select name="copyright" id="copyright">
        <option value="true" disabled>
          Choose
        </option>
        <option value="true">existing copyrights</option>
        <option value="false">public domain in the USA</option>
        <option value="null">no available copyright information</option>
      </select>

      <div>id</div>
      <div>langs</div>
      <div>mime_type</div>
      <div>topic</div>
      <div>sort</div>
    </form>
  );
};

export default FilterBar;
