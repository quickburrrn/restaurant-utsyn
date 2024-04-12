import React from "react";

const InfoField = (Props) => {
    const {children} = Props;
    
    return(
        <div>
            <h1>{children}</h1>
        </div>
    );
}

export default InfoField