import { ProductCard, ProductImage, ProductTitle, ProductButtons } from "../components";

import { products } from "../data/products";
import "../styles/custom-styles.css";

const product = products[0];

export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)", borderRadius: "10px" }}>
                <ProductCard
                    product={product}
                    className="bg-dark text-white"
                    key={product.id}
                    initialValues={{
                        count: 4,
                        maxCount: 10,
                    }}
                >
                    {({ reset, increaseBy, isMaxCountReached, count }) => (
                        <>
                            <ProductImage className="custom-image" />
                            <ProductTitle className="text-bold" />
                            <ProductButtons className="custom-buttons" />

                            <button onClick={reset}>Reset</button>
                            <button onClick={() => increaseBy(-2)}>-2</button>
                            {!isMaxCountReached && (
                                <button onClick={() => increaseBy(2)}>+2</button>
                            )}
                            <hr />
                            <span>Count: {count}</span>
                        </>
                    )}
                </ProductCard>
            </div>
        </div>
    );
};
