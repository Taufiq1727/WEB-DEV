import Product from "./Product.jsx";

function ProductTab() {
    let styles = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
        marginTop: "20px"
    };
  return (
    <div style={styles}>
      <Product title="logitech MX master" idx = {0}/>
      <Product title ="Apple Pencil" idx = {1}/>
      <Product title = "I Phone 18 Pro Max" idx = {2}/>
      <Product title = "One Plus Nord 6" idx = {3}/>
    </div>
  );
}

export default ProductTab;
