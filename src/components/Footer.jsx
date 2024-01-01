import React from "react";

function Footer(){
    const d = new Date();
    const thisYear =d.getFullYear();
    return (
        <footer>
            <p className="footer_p footer">Copyright &copy; {thisYear}</p>
        </footer>
    );
}

export default Footer;