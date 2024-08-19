import React from 'react';
import './Modal.scss';

const Modal = ({ show, children }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-body">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;