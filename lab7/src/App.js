import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Image from "./components/Image";
import GoodsCard from "./components/GoodsCard";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import img5 from "./images/img5.jpg";
import img6 from "./images/img6.jpg";

const goods = [
  { name: "Ноутбук", price: 25000, image: img1 },
  { name: "Телефон", price: 18000, image: img2 },
  { name: "Навушники", price: 3000, image: img3 },
  { name: "Мишка", price: 700, image: img4 },
  { name: "Клавіатура", price: 1200, image: img5 },
  { name: "Монітор", price: 9000, image: img6 },
];

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Image />

      <h3>Галерея товарів</h3>
      <div style={{ display: "flex", gap: "10px" }}>
        {goods.map((g, i) => (
          <GoodsCard key={i} {...g} />
        ))}
      </div>
    </div>
  );
}

export default App;
