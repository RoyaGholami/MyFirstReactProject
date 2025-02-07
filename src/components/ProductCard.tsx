import { Product } from "../data/Products";
import "./ProductCard.css"
interface ProductCardProps {
    product: Product;
    onMoreInfo: (product: Product) => void;
    addToBasket: (product: Product) => void;
}

function ProductCard({ product, onMoreInfo, addToBasket }: ProductCardProps) {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <div className="content">
                <h3>{product.name}</h3>
                <p>{product.shortDescription}</p>
                <p><strong>Price: £{product.price.toLocaleString()}</strong></p>
                <button onClick={() => onMoreInfo(product)}>More details</button>
                <button onClick={() => addToBasket(product)}>Add To Basket</button>
            </div>
        </div>
    );
};

export default ProductCard;
