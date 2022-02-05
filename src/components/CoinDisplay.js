import "./styles/CoinDisplay.css";

function CoinDisplay(props) {
  const newPrice = () => {
    let index = 0;
    let newString = "";
    while (props.price[index] !== ".") {
      newString += props.price[index];
      index++;
    }
    return newString;
  };

  return (
    <div className="coin--container">
      <img src={props.icon} alt="icon" />
      <h3>{props.id}</h3>
      <div className="coin--info">
        <h4>Price: {props.price}</h4>
        <h4>Rank: {props.rank}</h4>
      </div>
    </div>
  );
}

export default CoinDisplay;
