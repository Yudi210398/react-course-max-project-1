import Pengeluran from "./pengeluran.js";
import FilterYear from "./filterByYear.js";
import "./pengeluran.css";
import { useState } from "react";
import ChartExpenses from "./expensesChart.js";

function DataKomponen(props) {
  const d = new Date();
  let yeard = d.getFullYear().toString();

  const [filterYer, setYear] = useState(yeard);

  const onDataYear = (year) => {
    setYear(year);
    return year;
  };

  const filterDate = props.items.filter(
    (data) => data.date.split("-")[0] === filterYer
  );

  return (
    <div>
      <div className="main-content">
        <ChartExpenses expenses={filterDate} />
        <br />
        <FilterYear selected={filterYer} onYearSelcet={onDataYear} />
        <br />
        {filterDate.length === 0 && <p>Data Tidak Ada </p>}
        <table className="table table-hover table-striped">
          <tbody>
            {filterDate.length > 0 &&
              filterDate.map((element) => (
                <Pengeluran
                  key={element.id}
                  date={element.date}
                  namaBarang={element.namaBarang}
                  harga={element.harga}
                />
              ))}

            {/* <Pengeluran
              date={props.items[0].date}
              namaBarang={props.items[0].namaBarang}
              harga={props.items[0].harga}
            />
            <Pengeluran
              date={props.items[1].date}
              namaBarang={props.items[1].namaBarang}
              harga={props.items[1].harga}
            /> */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default DataKomponen;
