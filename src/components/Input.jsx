import React from "react";

export default function Input(props) {
    return(
        <input type={props.type} value={props.value} className="input" />
    );
}