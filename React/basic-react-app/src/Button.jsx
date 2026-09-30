function printHello() {
    console.log("Hello");
}
function handleMouseOver() {
    console.log("Mouse Over");
}

export default function Button(){
    return (
        <div>
        <button onClick={printHello}>Click Me</button>
        <p onMouseOver={handleMouseOver}>Hover over me</p>
        </div>
    );
}   