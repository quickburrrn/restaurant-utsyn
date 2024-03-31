import React from "react";

const Alert = (props) => {
    const {children, onClose} = props
    return(
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
            {children}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={onClose}></button>
        </div>
    );
}

export default Alert