import "./card.css";

function Card(props) {
  const clases = "list " + props.className;
  return <tr className={clases}>{props.children}</tr>;
}

export default Card;
