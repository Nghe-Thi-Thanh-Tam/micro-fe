import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.scss";
import SafeComponent from "./components/SafeComponent";
import PDPContent from "./components/PDPContent";
const Header = lazy(() => import("home/Header"));
const Footer = lazy(() => import("home/Footer"));
// import Header from "home/Header";
// import Footer from "home/Footer";
const App = () => (
    <BrowserRouter>
        <div className="text-3xl mx-auto max-w-6xl">
            <Suspense fallback={<div>Loading.....</div>}>
                <SafeComponent>
                    <Header />
                </SafeComponent>
                <Routes>
                    <Route path="/product/:id" element={<PDPContent />} />
                    <Route path="*" element={<p>SOMETHING WENT WRONG</p>} />
                </Routes>
                <Footer />
            </Suspense>
        </div>
    </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById("app"));
