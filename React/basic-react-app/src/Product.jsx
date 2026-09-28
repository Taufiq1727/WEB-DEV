import "./Product.css";
import Price from "./Price.jsx";

export default function Product({ title, idx  }) {
  let oldPrices = ["12,999", "14,999", "19,999", "9,999"];
  let newPrices = ["11,999", "13,999", "18,999", "8,999"];
  let descriptions = [
    "The Logitech MX Master is a high-end wireless mouse designed for professionals and power users. It features an ergonomic design, customizable buttons, and advanced tracking technology for precise control.",
    "The Apple Pencil is a stylus designed for use with iPads. It offers pressure sensitivity, tilt functionality, and low latency for a natural drawing and writing experience.",
    "The iPhone 18 Pro Max is the latest flagship smartphone from Apple, featuring a powerful A-series chip, advanced camera system, and a sleek design with a large OLED display.",
    "The OnePlus Nord 6 is a mid-range smartphone that offers a balance of performance and affordability. It features a smooth display, capable cameras, and fast charging capabilities."
  ];
  return (
    <div className="product">
      <h4>{title}</h4>
      <p>{descriptions[idx]}</p>
      <Price oldPrice = {oldPrices[idx]} newPrice = {newPrices[idx]} />
    </div>
  );
}
