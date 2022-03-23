import {
    BrowserRouter,
    Navigate,
    NavLink,
    Route,
    Routes,
} from "react-router-dom";
import { ShoppingPage } from "../02-component-paterns/pages/ShoppingPage";
import { LazyPage1, LazyPage2, LazyPage3 } from "../lazyload/pages";

import logo from "../logo.svg";

const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React logo" />
                    <ul>
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? "nav-active" : ""
                                }
                            >
                                Shopping
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/lazy2"
                                className={({ isActive }) =>
                                    isActive ? "nav-active" : ""
                                }
                            >
                                Lazy2
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/lazy3"
                                className={({ isActive }) =>
                                    isActive ? "nav-active" : ""
                                }
                            >
                                Lazy3
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="" element={<ShoppingPage />} />
                    <Route path="lazy2" element={<LazyPage2 />} />
                    <Route path="lazy3" element={<LazyPage3 />} />

                    <Route path="/" element={<Navigate to="/" />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default Navigation;
