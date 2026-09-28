export default function Price({oldPrice, newPrice}) {
    let oldStyles = {
        textDecoration: "line-through",
        color: "red",
        fontSize: "14px",
        marginRight: "10px"
    };
    let newStyles = {
        fontSize: "16px",
        fontWeight: "bold"
    };
    let styles = {
        backgroundColor: "#f5f5f5",
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "5px",
        padding: "0 10px"
    };
    return (
        <div className="Price" style={styles}>
            <span style={oldStyles}>{oldPrice}</span>
            &nbsp;&nbsp;&nbsp;
            <span style={newStyles}>{newPrice}</span>
        </div>
    );
}