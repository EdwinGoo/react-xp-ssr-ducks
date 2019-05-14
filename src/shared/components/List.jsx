import React from "react";
import { Link } from "react-router-dom";

const List = ({ coin }) => {
  return (
    <div className="coin-container">
      <h1>This is cryptocurrency information</h1>
      <ul className="coin-list">
        {coin.map((item, i) => (
          <li key={i} className="coin">
            <Link
              to={`/coin/${item.name
                .toLowerCase()
                .split(" ")
                .join("-")}`}
            >
              <span className="highlight">Symbol: {item.symbol} /</span>
              Price: {item.price_krw}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
