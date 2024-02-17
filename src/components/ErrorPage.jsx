import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
    return (
        <>
            <h3>Page not found</h3>
            <Link to={"/login"}> Login </Link>
        </>
    )
}

export default ErrorPage;