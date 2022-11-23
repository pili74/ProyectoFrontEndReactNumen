import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
// import { classnames } from "@emotion/react";

export const LoginButton = () => {
const { loginWithRedirect } = useAuth0();

return <button onClick={() => loginWithRedirect()} className="login">LOGIN</button>
};