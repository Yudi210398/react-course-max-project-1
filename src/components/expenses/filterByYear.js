import React from "react";
import "./pengeluran.css";
const FilterYear = (props) => {
  const onYearSort = (e) => props.onYearSelcet(e.target.value);

  return (
    <div className="row">
      <div className="col-8">
        <p className="year">Sort By Year</p>
      </div>

      <div className="col-4">
        <select
          value={props.selected}
          className="form-select"
          onChange={onYearSort}
        >
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
      </div>
    </div>
  );
};

export default FilterYear;
