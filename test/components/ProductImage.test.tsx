import * as React from "react";
import renderer from "react-test-renderer";
import { ProductImage, ProductCard } from "../../src/02-component-paterns/components";
import { product2 } from "../data/products";

describe("ProductImage", () => {
    test("should show the component mounted correctly", () => {
        const wrapper = renderer.create(<ProductImage img="http://hello.jpg" />);

        expect(wrapper.toJSON()).toMatchSnapshot();
    });
    test("should show the component with the product image", () => {
        const wrapper = renderer.create(
            <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
        );
        expect(wrapper.toJSON()).toMatchSnapshot();
    });
});
