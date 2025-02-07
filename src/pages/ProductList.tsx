import { products, Product } from "../data/Products";
import ProductCard from "../components/ProductCard";
import "./ProductList.css"

function ProductList() {
    function setSelectedProduct(p: Product) {
        alert("Product selected " + p.name);
    }

    function addedToBasket(p: Product) {
        alert(p.name + "added to basket");
    }

    return (
        <div>
            <h2>Products list</h2>
            <div className="product-list">
                {products.map((item) => (
                    <ProductCard key={item.id} product={item} onMoreInfo={setSelectedProduct} addToBasket={addedToBasket} />
                ))}
            </div>
        </div>
    );
}
export default ProductList;
