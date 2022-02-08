import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Breadcrumb from '../components/Breadcrumb';
import BookTable from '../components/shopCart/BookTable';
import { bookClear } from '../store/bookCart';


import { useNavigate } from "react-router-dom";

function Order() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const books = useSelector((state) => state.cart.book);
    const [totalPrice, setTotalPrice] = useState(0);


    useEffect(() => {
        if (books) {
            let total = 0

            books.forEach(book => {
                let price = +book.price.replace('$', '');
                let count = +book.count;
                let sum = price * count;
                total += sum
            })
            setTotalPrice(total)
        }
    }, [books])

    function submitHandler(event) {
        event.preventDefault();
        navigate("/order/doneOrder");
        
        localStorage.removeItem('book');
        dispatch(bookClear())
    }

    return (
        <>
            <div className="containers">
                <Breadcrumb currentPage={'Оформление заказа'} />
                <h1 className="title mb-4">Оформление заказа</h1>
                <div className="content-container">
                    <h5 className='h5'>Авторизация (если вы уже зарегистрированы на сайте)</h5>
                    <form className='sign-form d-flex' >
                        <div className="mb-3 sign-form__email">
                            <label for="exampleInputEmail1" className="form-label">Ваш email:</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Введите Ваш email" />
                        </div>
                        <div className="mb-3 sign-form__password">
                            <label for="exampleInputPassword1" className="form-label">Ваше пароль:</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Введите Ваш пароль" />
                        </div>
                        <div className="mb-3 sign-form__btn">
                            <button type="submit" className="btn submit">Войти</button>
                        </div>
                    </form>
                </div>
                <h4 className="h4 order__h4">ИЛИ</h4>
                <form className="needs-validation" onSubmit={submitHandler} novalidate>
                    <div className="content-container">
                        <h5 className="h5">Введите ваши данные (для регистрации на сайте отметьте чекбокс внизу)</h5>
                        <div className="row g-3 reg-form">
                            <div className="col-md-4">
                                <div className="reg-form__name">
                                    <label for="validationDefault01" className="form-label">Ваше имя:</label>
                                    <input type="text" className="form-control" id="validationDefault01" placeholder="Введите Ваше имя" required />
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="reg-form__email">
                                    <label for="validationDefault02" className="form-label">Ваш email:</label>
                                    <input type="email" className="form-control " id="validationDefault02" placeholder="Введите Ваш email" required />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="reg-form__password">
                                    <label for="validationDefault02" className="form-label">Ваше телефон:</label>
                                    <input type="number" className="form-control" id="validationDefault02" placeholder="Введите Ваш номер телефона" required />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="true" id="invalidCheck2" required />
                                    <label className="form-check-label" for="invalidCheck2">
                                        Создать аккаунт для покупок в дальнейшем.
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content-container mt-5">
                        <h5 className="h5">Выбрать способ доставки</h5>
                        <p>Пожалуйста, выберите способ доставки, который вам подходит.</p>
                        <strong>Доставка Новой Почтой</strong>
                        <div className="col-12 mt-3">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="true" id="invalidCheck3" required />
                                <label className="form-check-label" for="invalidCheck3">
                                    Создать аккаунт для покупок в дальнейшем.
                                </label>
                                <div className="marker">Цена по запросу!</div>
                            </div>
                        </div>
                    </div>
                    <div className="content-container mt-5">
                        <h5 className="h5">Оплата</h5>
                        <p>Пожалуйста, выберите удобный для вас способ оплаты. Карта для оплаты 5168 7422 1128 7903 Широбоков Александр</p>
                        <div className="row">
                            <div className="col-md-4">
                                <select className="form-select" required>
                                    <option selected disabled value="">Выберите...</option>
                                    <option>Оплата при доставке</option>
                                </select>
                                <div className="invalid-feedback">
                                    Пожалуйста, выберите корректный город.
                                </div>
                            </div>
                            <div className="col-md-12 w100"></div>
                            <div className="col-md-6 mt-3 mb-5">
                                <label for="validationCustom03" className="form-label">Добавьте комментарий к заказу (укажите адресную доставку):</label>
                                <textarea className="form-control reg-form__address" id="validationCustom03" required />
                                <div className="invalid-feedback">
                                    Укажите действующий город.
                                </div>
                            </div>
                        </div>
                    </div>
                    <h5 className="h5 mt-4 mb-4">Товары в корзине</h5>
                    <div className="content-container">
                        <BookTable />
                        <div className="total">
                            <div className='total__sum'><span className="total__text">Итого:</span>
                                <span className="total__price">${totalPrice.toFixed(2)}</span></div>
                            <div className='total__button mb-4'><button type="submit" className="total__btn">Продолжить</button></div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Order