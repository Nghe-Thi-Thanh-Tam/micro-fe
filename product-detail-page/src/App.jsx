import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import SafeComponent from "./components/SafeComponent";
const Header = lazy(() => import("home/Header"));
const Footer = lazy(() => import("home/Footer"));
// import Header from "home/Header";
// import Footer from "home/Footer";
const App = () => (
    <div className="text-3xl mx-auto max-w-6xl">
        <Suspense fallback={<div>Loading.....</div>}>
            <SafeComponent>
                <Header />
            </SafeComponent>

            <div className="my-10">PDP Page Content</div>
            <Footer />
        </Suspense>
    </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
