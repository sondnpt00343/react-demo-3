import { Outlet, Navigate, useLocation } from "react-router";

import { useCurrentUser } from "@/features/auth";

function PrivateRoute() {
    const { pathname } = useLocation();
    const currentUser = useCurrentUser();

    if (!currentUser) {
        return (
            <Navigate to={`/login?continue=${encodeURIComponent(pathname)}`} />
        );
    }

    return <Outlet />;
}

export default PrivateRoute;
