import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Context from "../../context";
import { addFilter } from '../../store/search';
import { addBooks } from '../../store/search';


function Sorting() {
    const dispatch = useDispatch();
    const { toggleMazay, toggleWidth, mozActive, widActive } = useContext(Context)
    const books = useSelector((state) => state.search.data[0])
    const booksFilter = useSelector((state) => state.search.filter)
    const bookItems = useSelector((state) => state.search.bookItems)

    function handleChange(event) {
        const value = event.target.value
        dispatch(addFilter({ value }))
    }

    useEffect(() => {
        if (books) {
            if (booksFilter === 'low') {
                const booksList = []

                books.books.forEach((book, index) => {
                    const mass = {
                        title: book.title,
                        subtitle: book.subtitle,
                        isbn13: book.isbn13,
                        price: book.price.replace('$', ''),
                        image: book.image,
                        url: book.url,
                    }
                    booksList.push(mass)
                })
                booksList.sort((a, b) => a.price - b.price)
                dispatch(addBooks(booksList));
            } else if (booksFilter === 'high') {
                const booksList = []

                books.books.forEach((book, index) => {
                    const mass = {
                        title: book.title,
                        subtitle: book.subtitle,
                        isbn13: book.isbn13,
                        price: book.price.replace('$', ''),
                        image: book.image,
                        url: book.url,
                    }
                    booksList.push(mass)
                })
                booksList.sort((a, b) => b.price - a.price)
                dispatch(addBooks(booksList));
            } else if (booksFilter === 'default') {
                dispatch(addBooks(books.books));
            }
        }
    }, [booksFilter, books])


    return (
        <>
            <div className="sorting d-flex">
                <span>Вид:</span>
                <div className="sorting-col">
                    <div className="d-flex">
                        <div className="sorting__columns" onClick={() => toggleMazay()}>
                            <div className="columns-row">
                                <div className={`columns-row__mazay ${mozActive}`}></div>
                            </div>
                        </div>
                        <div className="sorting__row" onClick={() => toggleWidth()}>
                            <div className="columns-row">
                                <div className={`columns-row__width ${widActive}`}></div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                        <span>Сортировка: </span>
                        <select class="form-select" value={booksFilter} onChange={handleChange} aria-label="Default select example">
                            <option selected value="default">По умолчанию</option>
                            <option value="low">Сначала дешёвые</option>
                            <option value="high">Сначала дорогие</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sorting