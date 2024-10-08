import { PiShoppingCartDuotone } from "react-icons/pi";

export const Products = ({ products })=>{
return (
    <main className="products">
        <ul>
        {products.map((product) => (
            <li  key={product.id}>
                <img
              src={product.thumbnail}
              alt={product.title}
               />
               <div>
                <strong>{product.title}</strong>-${product.price}
               </div>
               <div>
                <button>
                <PiShoppingCartDuotone />
                </button>
               </div>
            </li>
        ))}
        </ul>
    </main>
)
}