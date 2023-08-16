import { useEffect, useState, lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import { getProductsById, currency } from "home/products";
// lazy import -> for components not for searching function

const PDPContent = function () {
    const [product, setProduct] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        if (id) {
            getProductsById(id).then(setProduct);
            return;
        }
        setProduct(null);
    }, []);
    if (!product) return <div>There is not product</div>;
    return (
        <div className="grid grid-cols-2 gap-5">
            <div>
                <img src={product.image} alt={product.name} />
            </div>
            <div>
                <div className="flex">
                    <h1 className="font-bold text-3xl flex-grow">
                        {product.name}
                    </h1>
                    <div className="font-bold text-3xl flex-end">
                        {currency.format(product.price)}
                    </div>
                </div>
                <div className="mt-10">{product.description}</div>
                <div className="mt-10">{product.longDescription}</div>
            </div>
        </div>
    );
};

export default PDPContent;
