import { FC, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter: FC = () => {
    const [isLogin, SetIsLogin] = useState(false);

    return (
        isLogin ? <Outlet /> : <Navigate to="/login" />
    );
};

export default PrivateRouter;