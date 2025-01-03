import React from "react";
import { useLocation } from "react-router-dom";

const RouteWrapper = ({ children }) => {
    const location = useLocation();

    return React.cloneElement(children, { key: location.pathname });
};

export default RouteWrapper;
