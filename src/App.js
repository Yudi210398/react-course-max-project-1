import React, { useState } from "react";
import DataKomponen from "./components/expenses/DataKomponen.js";
import FormInput from "./components/tambah-expenses/KomponenPengeluran.js";
let data = [];

function App() {
  const [inputData, updateData] = useState(data);
  console.log(inputData);
  let dataInputPengeluaran = (datas) =>
    updateData((prevState) => {
      return [datas, ...prevState];
    });

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />

      <FormInput onDataInputPengeluaran={dataInputPengeluaran} />
      <br />
      <DataKomponen items={inputData} />
    </div>
  );
}

export default App;
