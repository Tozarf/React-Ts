import { Suspense } from "react";
import {
    BrowserRouter,
    Navigate,
    NavLink,
    Route,
    Routes,
} from "react-router-dom";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../lazyload/pages";
import { routes } from "./routes";

import logo from "../logo.svg";

const Navigation = () => {
    return (
        <Suspense fallback={null}>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={logo} alt="React logo" />
                        <ul>
                            {routes.map(({ path, to, name }) => (
                                <li key={path}>
                                    <NavLink
                                        to={to}
                                        className={({ isActive }) =>
                                            isActive ? "nav-active" : ""
                                        }
                                    >
                                        {name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <Routes>
                        {routes.map(({ path, Component }) => (
                            <Route
                                key={path}
                                path={path}
                                element={<Component />}
                            />
                        ))}

                        <Route
                            path="/*"
                            element={<Navigate to={routes[0].to} replace />}
                        />
                    </Routes>
                </div>
            </BrowserRouter>
        </Suspense>
    );
};

export default Navigation;
