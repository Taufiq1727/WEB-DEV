import Product from "./Product.jsx";

function ProductTab(){
    let options = ["HI-TECH", "ELECTRONICS", "GADGETS"];
    return(
        <>
        <Product title = "phone" price = {30000} features = {options} />
        <Product title = "laptop" price = {20000} />
        <Product title = "CPU" price = {10000}/>
        
        
        </>
    );
}

export default ProductTab; 