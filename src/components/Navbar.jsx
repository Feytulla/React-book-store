import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import ModalContact from "./modal/ModalContact";
import ShopModal from "./modal/ShopModal";
import { apiAddBook } from "../store/bookCart";
import { useDispatch } from "react-redux";

function Navbar() {
    const books = useSelector((state) => state.cart.book);
    const dispatch = useDispatch()
    const shopRef = useRef();
    const contactRef = useRef();
    const [shopModal, setShopModal] = useState(false);
    const [contactModal, setContactModal] = useState(false);
    useOnClickOutside(shopRef, () => setShopModal(false));
    useOnClickOutside(contactRef, () => setContactModal(false));

    useEffect(() => {
        if (localStorage.getItem('book')) {
            const response = JSON.parse(localStorage.getItem('book'));
            dispatch(apiAddBook(response))
        }
    }, [])

    function toggleShopModal() {
        setShopModal(false)
        setContactModal(false)
    }

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
                                        <NavLink className={({ isActive }) => isActive ? "nav-link nav-active" : "nav-link"} to="about">?? ??????</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className={({ isActive }) => isActive ? "nav-link nav-active" : "nav-link"} to="PaymentAndDelivery">???????????? ?? ????????????????</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className={({ isActive }) => isActive ? "nav-link nav-active" : "nav-link"} to="WorldBooks">?????? ????????</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className={({ isActive }) => isActive ? "nav-link nav-active" : "nav-link"} to="IndividualBinding">???????????????????????????? ????????????????</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className={({ isActive }) => isActive ? "nav-link nav-active" : "nav-link"} to="contacts">????????????????</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <span className="nav-link" onClick={() => setContactModal(!contactModal)}><i className="fas fa-phone-alt"></i></span>
                                        {contactModal &&
                                            <div ref={contactRef}>
                                                <ModalContact toggleShopModal={toggleShopModal} />
                                            </div>
                                        }
                                    </li>
                                    <li className="nav-item" >
                                        <span className="nav-link" onClick={() => setShopModal(!shopModal)}><i className="fas fa-shopping-bag"></i>
                                            {
                                                books.length ? <div className="product-counter"><i>{books.length}</i></div> : null
                                            }
                                        </span>
                                        {shopModal &&
                                            <div ref={shopRef}>
                                                <ShopModal toggleShopModal={toggleShopModal} />
                                            </div>
                                        }
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

function useOnClickOutside(ref, handler) {
    useEffect(
        () => {
            const listener = (event) => {

                if (!ref.current || ref.current.contains(event.target)) {
                    return;
                }
                handler(event);
            };
            document.addEventListener("mousedown", listener);
            document.addEventListener("touchstart", listener);
            return () => {
                document.removeEventListener("mousedown", listener);
                document.removeEventListener("touchstart", listener);
            };
        },
        [ref, handler]
    );
}

export default Navbar