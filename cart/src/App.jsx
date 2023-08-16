import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import CartContent from "./components/CartContent";
const Header = lazy(() => import("home/Header"));
const Footer = lazy(() => import("home/Footer"));
const SafeComponent = lazy(() => import("product_detail_page/SafeComponent"));
const App = () => (
    <Suspense fallback={<div>Loading.....</div>}>
        <SafeComponent>
            <Header />
        </SafeComponent>
        <CartContent />

        <Footer />
    </Suspense>
);
ReactDOM.render(<App />, document.getElementById("app"));
