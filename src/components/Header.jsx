import React from "react";

function Header( {totalFollowers} ) {
    return (
        <>
            <div className="header">
                    Social Media Dashboard
                <div className="sub-header">
                    Total followers: {totalFollowers}
                </div>
            </div>
        </>
    );
}

export default Header;