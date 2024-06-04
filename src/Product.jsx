import "./Product.css"
import Price from "./Price";

function Product({title, idx}) {
    let oldPrice = ["12,495", "11,900", "1,599", "599"];
    let newPrice = ["8,999", "9,199", "899", "278"]; 
    let description = [
        ["8000 DPI", "5 Programmable Buttons"],
        ["Intutive Surface", "Designed for Ipad pro"],
        ["Design for Ipad Pro", "Intutive Surface"],
        ["Wireless", "Optical Orientation"],
    ];
    
    return (
        <div className="Product">
            <h4>{title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}/>
        </div>
    );
}

export default Product; 