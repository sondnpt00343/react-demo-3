import { useSelector } from "react-redux";

import { useFetchProductsList, useProductsList } from "@/features/product";
import { selectLoading as selectProductLoading } from "@/features/product";
import { Link } from "react-router";

function ProductsList() {
    useFetchProductsList();

    const products = useProductsList();

    const loading = useSelector(selectProductLoading);

    return (
        <div>
            <h1>Products list</h1>
            <Link to="/address/provinces">List 1</Link>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <ul>
                    {products.map((product) => (
                        <li key={product.id}>{product.title}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ProductsList;
