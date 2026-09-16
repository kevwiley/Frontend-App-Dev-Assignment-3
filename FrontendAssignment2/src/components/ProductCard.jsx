import "./ProductCard.css"

//product card has image on top, the name, description and price under it.
function ProductCard({name, price, image, description}) {
    return (
        <div className="product-card">
            <img src={image} alt={name} className="product-image"/>
            <div className="product-info">
                <h2>{name}</h2>
                <p className="product-description">{description}</p>
                <p className="product-price">${price}</p>
            </div>
        </div>
    );
}

export default ProductCard;