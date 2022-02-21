import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function ProtectedRoute ({component: Component, ...props}) {
    console.log('its ok');
    console.log(Component);
    console.log(props);
    return (
        <Route>
            {
                () => props.loggedIn === true ? <Component {...props} /> : <Redirect to="./signin" />
            }
        </Route>
    )
}