import { useContext } from "react";
import { ProductsContext } from "../../../context/products.context";
import SHOP_DATA from "../../../shop-data.json";
import ProductCard from "../../productCard/productCard.component";
import "./shop.stylex.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div>
      <div className="products-container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
