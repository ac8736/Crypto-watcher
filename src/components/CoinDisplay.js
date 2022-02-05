import "./styles/CoinDisplay.css";

function CoinDisplay(props) {
  return (
    <div className="coin--container">
      <img src={props.icon} alt="icon" />
      <h3>{props.name.toUpperCase()}</h3>
      <div className="coin--info">
        <h4 className="overflow-hidden">Price: ${props.price}</h4>
        <h4 className="overflow-hidden">Rank: {props.rank}</h4>
      </div>
    </div>
  );
}

export default CoinDisplay;
