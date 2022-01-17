import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
    return (
        <>
            <div className="gradien-line"></div>
            <div className="header-nav">
                <div className="containers">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to="/">
                                <img src={require('../images/navLogo.png')} alt="" />
                            </Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="about">О нас</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="PaymentAndDelivery">Оплата и доставка</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="stocks">Акции</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="WorldBooks">Мир Книг</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="IndividualBinding">Индивидуальный переплет</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="contacts">Контакты</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/"><i className="fas fa-phone-alt"></i></Link> 
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/"><i className="fas fa-shopping-bag"></i></Link> 
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Navbar