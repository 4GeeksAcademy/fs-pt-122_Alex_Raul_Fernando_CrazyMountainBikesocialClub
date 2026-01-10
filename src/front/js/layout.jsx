import { Outlet } from "./pages/Login";

const Layout = () => {
    return (
        <div className="app-root">
            <Outlet />
        </div>
    );
};

export default Layout;