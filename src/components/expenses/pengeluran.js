import Card from "../UI/Card.js";
import PriceKomponen from "./KomponenPrice.js";
import "./pengeluran.css";

function Pengeluran(props) {
  return (
    <Card>
      <td>{props.date}</td>
      <td>{props.namaBarang}</td>
      <PriceKomponen harga={props.harga} />
    </Card>
  );
}

export default Pengeluran;
