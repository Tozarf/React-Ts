import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

const LazyLayout = lazy(
    () =>
        import(
            /* webpackChunkName: 'LazyLayout' */ "../lazyload/layout/LazyLayout"
        )
);

export const routes: Route[] = [
    {
        path: "/lazyload/*",
        to: "/lazyload/",
        Component: LazyLayout,
        name: "Lazy nested-1",
    },
    {
        path: "nolazy",
        to: "/nolazy",
        Component: NoLazy,
        name: "NoLazy",
    },
];
