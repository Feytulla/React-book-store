import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { apibook } from '../store/book';
import Breadcrumb from '../components/Breadcrumb';
import { useParams } from 'react-router-dom';
import BookInfo from '../components/book/BookInfo';
import QuickOrder from '../components/book/QuickOrder';
import { addBook, apiAddBook } from '../store/bookCart';



function Book() {
    const params = useParams();
    const dispatch = useDispatch();
    const book = useSelector((store) => store.book.book);
    const [orderBlock, setOrderBlock] = useState(false)
    const [price, setPrice] = useState()
    const [value, setValue] = useState(1)


    useEffect(() => {
        dispatch(apibook(params.bookId))
    }, [dispatch])

    useEffect(() => {
        if (book.price) {
            setPrice(
                '$' + Number(book.price.replace('$', '') * value).toFixed(2)
            )
        }
    }, [value])

    useEffect(() => {
        if (localStorage.getItem('book')) {
            const response = JSON.parse(localStorage.getItem('book'));
            dispatch(apiAddBook(response))
        }
    }, [])

    function buyProduct() {
        const books = {
            count: value,
            title: book.title,
            price: book.price,
            image: book.image,
            id: book.isbn13,
        }
        dispatch(addBook(books))
    }

    return (
        <>
            <div className="containers">
                <Breadcrumb currentPage={`${book.title}`} />
                <h1 className="title">{book.title}</h1>
                <div className="row">
                    <div className="col-md-4">
                        <div className="content-container">
                            <img src={book.image} alt="book" />
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="content-container">
                            <table className="table table-striped table-sm">
                                <tbody>
                                    {
                                        book && <BookInfo book={book} />
                                    }
                                </tbody>
                            </table>
                            <div className="price">
                                <div className="price__total h4">
                                    {price || book.price}
                                    <div className='marker'>?? ??????????????</div>
                                </div>
                                <div className="price__count">
                                    <button className="price__btn" onClick={() => setValue(value > 1 ? value - 1 : 1)}><span className='price__minus'>-</span></button>
                                    <input type="number" className="price__value" min='1' value={value} required />
                                    <button className="price__btn" onClick={() => setValue(value + 1)}><span className='price__plus'>+</span></button>
                                </div>
                            </div>
                            <button className="book__buy" onClick={buyProduct}>????????????</button>
                            <button className="book__quick-order" onClick={() => setOrderBlock(!orderBlock)}>?????????????? ??????????</button>
                            {
                                orderBlock && <QuickOrder />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Book