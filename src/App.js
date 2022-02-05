import "./App.css";
import CoinDisplay from "./components/CoinDisplay";
import Title from "./components/Title";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.coinstats.app/public/v1/coins?skip=0")
      .then((response) => response.json())
      .then((data) => setData(data.coins));
  }, []);

  const coins = data.map((item) => (
    <CoinDisplay
      key={item.id}
      id={item.id}
      icon={item.icon}
      price={item.price}
      rank={item.rank}
    />
  ));

  console.log(coins);

  return (
    <div className="App">
      <Title />
      {coins}
    </div>
  );
}

export default App;
//
