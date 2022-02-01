import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookList from "./BookList";
import { apiAddBook } from '../../store/bookCart';

function BookTable() {
    const dispatch = useDispatch();
    const books = useSelector((state) => state.cart.book);


    useEffect(() => {
        if (localStorage.getItem('book')) {
            const response = JSON.parse(localStorage.getItem('book'));
            dispatch(apiAddBook(response))
        }
    }, [])


    return (
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
                            <BookList book={book} key={book.id} />
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default BookTable