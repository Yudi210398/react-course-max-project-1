import React, { useState } from "react";
import "./tambahPengeluran.css";

const DataForm = (props) => {
  // const [titleBarang, inputBarang] = useState("");
  // const [titleBarangHarga, inputBarangHarga] = useState("");
  // const [titleBarangTanggal, inputBarangTanggal] = useState("");

  const [inputBarang, gantiTitleInput] = useState({
    titleBarang: "",
    inputBarangHarga: "",
    inputBarangTanggal: "",
  });

  const [popUp, UpdatePopUp] = useState(false);

  const popUps = () => {
    UpdatePopUp(true);
  };

  const textData = (e) =>
    gantiTitleInput((prevState) => {
      return { ...prevState, titleBarang: e.target.value };
    });

  const textDataBarang = (e) =>
    gantiTitleInput((prevState) => {
      return { ...prevState, inputBarangHarga: +e.target.value };
    });

  const textDataBarangTanggal = (e) =>
    gantiTitleInput((prevState) => {
      return { ...prevState, inputBarangTanggal: e.target.value };
    });

  const SubmitData = (e) => {
    e.preventDefault();
    const dataPengeluaran = {
      namaBarang: inputBarang.titleBarang.trim(),
      harga: inputBarang.inputBarangHarga,
      date: inputBarang.inputBarangTanggal,
    };
    UpdatePopUp(false);
    props.ondataPengeluranFlow(dataPengeluaran);
    gantiTitleInput((p) => {
      return {
        titleBarang: "",
        inputBarangHarga: "",
        inputBarangTanggal: "",
      };
    });
  };

  return (
    <form onSubmit={SubmitData} className="input-content">
      {popUp && (
        <div className="row">
          <div className="input"></div>
          <div className="col-6">
            <div className="mb-3">
              <label className="form-label">Nama Barang</label>
              <input
                onChange={textData}
                value={inputBarang.titleBarang}
                type="text"
                className="form-control"
                required
              />
            </div>
          </div>
          <div className="col-6">
            <div className="mb-3">
              <label className="form-label">Harga</label>
              <input
                type="number"
                onChange={textDataBarang}
                value={inputBarang.inputBarangHarga}
                min={100}
                required
                className="form-control"
              />
            </div>
          </div>
          <div className="col-6">
            <div className="mb-3">
              <label className="form-label">Tanggal</label>
              <input
                required
                type="date"
                value={inputBarang.inputBarangTanggal}
                onChange={textDataBarangTanggal}
                className="form-control"
              />
            </div>
          </div>
          <div className="col-3">
            <button className="btn btn-success" type="submit">
              Masukan Data
            </button>
          </div>
        </div>
      )}

      <div className="row">
        <div className="col-12">
          {!popUp && (
            <div className="col-12 d-flex justify-content-center">
              <button className="btn btn-success" onClick={popUps}>
                Tambah Data
              </button>
            </div>
          )}
        </div>
      </div>
    </form>
  );
};

export default DataForm;
