/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";

const DropdownOrderBy = () => {
    return <>
        <ul className="navi navi-hover">
            <li className="navi-item">
                <a href="#" className="navi-link">
                    <span className="navi-icon"><i className="flaticon-interface-7"></i></span>
                    <span className="navi-text">Código</span>
                </a>
            </li>
            <li className="navi-item">
                <a href="#" className="navi-link">
                    <span className="navi-icon"><i className="flaticon-interface-7"></i></span>
                    <span className="navi-text">Cotação</span>
                </a>
            </li>
            <li className="navi-item">
                <a href="#" className="navi-link">
                    <span className="navi-icon"><i className="flaticon-interface-7"></i></span>
                    <span className="navi-text">Nota</span>
                </a>
            </li>
            <li className="navi-item">
                <a href="#" className="navi-link">
                    <span className="navi-icon"><i className="flaticon-interface-7"></i></span>
                    <span className="navi-text">Qtd atual</span>
                </a>
            </li>
            <li className="navi-item">
                <a href="#" className="navi-link">
                    <span className="navi-icon"><i className="flaticon-interface-7"></i></span>
                    <span className="navi-text">% atual</span>
                </a>
            </li>
            <li className="navi-item">
                <a href="#" className="navi-link">
                    <span className="navi-icon"><i className="flaticon-interface-7"></i></span>
                    <span className="navi-text">% objetivo</span>
                </a>
            </li>
            <li className="navi-item">
                <a href="#" className="navi-link">
                    <span className="navi-icon"><i className="flaticon-interface-7"></i></span>
                    <span className="navi-text">Status</span>
                </a>
            </li>
            <li className="navi-item">
                <a href="#" className="navi-link">
                    <span className="navi-icon"><i className="flaticon-interface-7"></i></span>
                    <span className="navi-text">Qtd compra</span>
                </a>
            </li>
        </ul>
        {/*end::Navigation*/}
    </>
}

export default DropdownOrderBy;