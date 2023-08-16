import { useEffect, useState } from "react";

import { getProducts, currency } from "../products";
const HomeContent = function () {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        // new way
        getProducts().then(setProducts);
        // old way
        // getProducts().then((data) => setProducts(data));
    }, []);
    return (
        <div className="my-10 grid grid-cols-4 gap-5">
            {products.map((product) => (
                <div key={product.id}>
                    <img src={product.image} alt={product.name} />
                    <div className="flex">
                        <div className="flex-grow font-bold">
                            <a>{product.name}</a>
                        </div>
                        <div className="flex-end">
                            {currency.format(product.price)}
                        </div>
                    </div>
                    <div className="text-sm mt-4">{product.description}</div>
                </div>
            ))}
        </div>
    );
};

export default HomeContent;
