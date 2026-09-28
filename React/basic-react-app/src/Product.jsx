import "./Product.css";

export default function Product({ title, price, features }) {
  let styles = { backgroundColor: price > 20000 ? "pink" : "" };
  let isDiscount = price > 20000 ? "5% discount" : "No discount";
  return (
    <div className="Product" style={styles}>
      <h3>{title}</h3>
      <h4>{price}</h4>
      <h5>{isDiscount}</h5>
    </div>
  );
}
