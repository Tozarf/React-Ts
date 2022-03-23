import { ProductCard, ProductImage, ProductTitle, ProductButtons } from "../components";

import { products } from "../data/products";

const product = products[0];

export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)", borderRadius: "10px" }}>
                <ProductCard
                    product={product}
                    key={product.id}
                    initialValues={{
                        count: 4,
                        // maxCount: 10,
                    }}
                >
                    {({ reset, increaseBy, isMaxCountReached, count }) => (
                        <>
                            <ProductImage />
                            <ProductTitle />
                            <ProductButtons />
                        </>
                    )}
                </ProductCard>
            </div>
        </div>
    );
};
