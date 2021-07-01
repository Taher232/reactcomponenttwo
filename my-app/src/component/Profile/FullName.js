import React from "react";

const FullName = ({ name }) => {
    return (
        <div>
            <h1 style={{ fontSize: "200px", color: "red" }}>{name}</h1>
        </div>
    );
};

export default FullName;