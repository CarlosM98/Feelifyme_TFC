import { Outlet } from "react-router-dom";
import { useState } from "react";


const LayoutApp = () => {
    const [loggedIn, setLoggedIn] = useState(() => {
        return localStorage.getItem("access") !== null;
    })

    return <>
        <Outlet context={{ loggedIn, setLoggedIn }} />
    </>
}

export default LayoutApp