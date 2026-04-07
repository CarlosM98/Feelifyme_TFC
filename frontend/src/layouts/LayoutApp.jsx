import { Outlet } from "react-router-dom";
import { useState } from "react";


const LayoutApp = () => {
    return <>
        <Outlet />
    </>
}

export default LayoutApp