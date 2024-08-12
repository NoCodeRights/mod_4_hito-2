import React from "react";
import Header from "./Header";
import CardPizza from "./CardPizza";
import { detailPizza } from "../details";

function Home() {
  return (
    <div>
      <Header />
      <div className="d-flex justify-content-center gap-3 mt-3 mb-3">
        {detailPizza.map((pItem, index) => (
          <CardPizza
            key={index}
            img={pItem.img}
            name={pItem.name}
            price={pItem.price}
            ingredients={pItem.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;