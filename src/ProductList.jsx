import Product from "./Product";
import ProductCard from "./ProductCard";

function ProductList() {
const formData = location.state;

    return (
         <div>
        <h1>Product List</h1>
         <ProductCard
            id ='SM'
            name ='Samsung A12'
            description ='Nice for what'
            price = '999'
          />
          <ProductCard
            id ='FY'
            name ='FreeYond H15'
            description ='Very efficient'
            price = '1010'
          />
          <ProductCard
            id ='IP'
            name ='Iphone 13 Pro'
            description ='The best phone'
            price = '1200'
          />
          <ProductCard
            id ='MP'
            name ='Macbook Pro'
            description ='Your Fave Comps'
            price = '2500'
          />
      </div>
    )
}
export default ProductList;