import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BookList from "./BookList";

function ShopModal({ toggleShopModal }) {
    const books = useSelector((state) => state.cart.book);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        if (books) {
            let total = 0;

            books.forEach(book => {
                let price = +book.price.replace('$', '');
                let count = +book.count;
                let sum = price * count;
                total += sum
            })
            setTotalPrice(total)
        }
    }, [books])

    return (
        <>
            <div className="shop-modal">
                <div className="modal-conteiner">
                    <div className="shop-modal__head">
                        <h5 className="h5">Корзина</h5>
                        <div className="shop-modal__close" onClick={() => toggleShopModal()}>&times;</div>
                    </div>
                    <div className="shop-modal__list">
                        {
                            books.length ? books.map(book => {
                                return (
                                    <BookList book={book} key={book.id} />
                                )
                            })
                                :
                                <div className="shop-modal__list-null title">Корзина пуста</div>
                        }
                    </div>
                    <div className="modal-total">
                        {
                            books.length ?
                                <>
                                    <div className="modal-total__price">
                                        <span className="modal-total__text">Итого:</span>
                                        <span className="modal-total__total-price h4">${totalPrice.toFixed(2)}</span>
                                    </div>
                                    <div>Taxes and shipping calculated at checkout</div>
                                    <div className="modal-total__order total__button"><button className="total__btn" onClick={() => toggleShopModal()}><Link to='order'>Оформить заказ</Link></button></div>
                                    <div className="modal-total__cart" onClick={() => toggleShopModal()}><Link to='cart' className="modal-total__cart-link">Перейти в корзину</Link></div>
                                </>
                                : null
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShopModal