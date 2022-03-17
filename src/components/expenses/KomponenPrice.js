import "./pengeluran.css";

function PriceKomponen(props) {
  let price = new Intl.NumberFormat("id-ID").format(props.harga);
  return <td> {+props.harga}</td>;
}

export default PriceKomponen;
