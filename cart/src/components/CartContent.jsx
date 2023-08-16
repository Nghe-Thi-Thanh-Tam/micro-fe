import { useState, useEffect } from "react";
import { login, jwt } from "cart/cart";
const CartContent = function () {
    const [token, setToken] = useState("");

    useEffect(() => {
        // login("sally", "123").then(setToken);
        login("sally", "123");
        return jwt.subscribe((val) => setToken(val ?? ""));
    }, []);
    return <div>JWT: {token}</div>;
};

export default CartContent;
