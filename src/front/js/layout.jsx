import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="app-root">
            <Outlet />
        </div>
    );
};

export default Layout;