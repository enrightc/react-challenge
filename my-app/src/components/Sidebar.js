import React from "react";
import css from "./css/Sidebar.module.css";

// function FunctionalGreeting() {
//     return <h1>Hello from React!</h1>
// }

const Sidebar = () => (
    <div className={css.sidebar}>
        <a href="#." target="_blank">My Photos</a>
        <a href="#." target="_blank">My Illustrations</a>
        <a href="#." target="_blank">My Paintings</a>
    </div>
);

export default Sidebar;