import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import BookList from '../components/shopCart/BookList';
import { apiAddBook } from '../store/bookCart';

function ShopCart() {
    const dispath = useDispatch();
    const books = useSelector((state) => state.cart.book);
    const [totalPrice, setTotalPrice] = useState(0)


    useEffect(() => {
        if (localStorage.getItem('book')) {
            const response = JSON.parse(localStorage.getItem('book'));
            dispath(apiAddBook(response))
        }
    }, [])

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

    return (
        <>
            <div className="containers">
                <Breadcrumb currentPage={'Корзина'} />
                <h1 className="title mt-4 mb-4">Корзина</h1>
                <div className="content-container">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col" className='tabele__title'>Картинка</th>
                                <th scope="col" className='tabele__title'>Наименование</th>
                                <th scope="col" className='tabele__title'>Количество</th>
                                <th scope="col" className='tabele__title'>Цена</th>
                                <th scope="col" className='tabele__title'>Удалить</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                books && books.map(book => {
                                    return (
                                        <BookList book={book} />
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <div className="total">
                        <div className='total__sum'><span className="total__text">Итого:</span>
                            <span className="total__price">${totalPrice.toFixed(2)}</span></div>
                        <div className='total__button mb-4'><Link to='/order' className="total__btn">Оформить заказ</Link></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShopCart