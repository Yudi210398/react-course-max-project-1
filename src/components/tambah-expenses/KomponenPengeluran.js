import React from "react";
import DataForm from "./TambahPengeluaran.js";

const formAkses = (props) => {
  const dataPengeluranFlow = (data) => {
    const dataPengeluran = {
      ...data,
      id: Math.random().toString(),
    };

    return props.onDataInputPengeluaran(dataPengeluran);
  };

  return (
    <div>
      <DataForm ondataPengeluranFlow={dataPengeluranFlow} />
    </div>
  );
};

export default formAkses;
