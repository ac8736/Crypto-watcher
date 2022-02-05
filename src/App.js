import "./App.css";
import CoinDisplay from "./components/CoinDisplay";
import Title from "./components/Title";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  useEffect(() => {
    fetch("https://api.coinstats.app/public/v1/coins?skip=0")
      .then((response) => response.json())
      .then((data) => setData(data.coins));
  }, []);

  const filteredCoins = data.filter((item) => item.name.toLowerCase().includes(searchWord.toLowerCase()));

  const coins = filteredCoins.map((item) => (
    <CoinDisplay key={item.id} name={item.name} icon={item.icon} price={item.price} rank={item.rank} />
  ));

  return (
    <div className="App">
      <Title />
      <input
        type="text"
        placeholder="Search..."
        value={searchWord}
        onChange={(event) => {
          setSearchWord(event.target.value);
        }}
      />
      {coins}
    </div>
  );
}

export default App;
