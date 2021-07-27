import React from "react";

const date = new Date().getFullYear();

const Footer = function () {
    return <div>
        <footer><p>Copyright {date} Sam Bissell</p></footer>

    </div>
};

export default Footer;