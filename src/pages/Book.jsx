import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import book, { apibook } from '../store/book';
import Breadcrumb from '../components/Breadcrumb';
import { useParams } from 'react-router-dom';
import BookInfo from '../components/book/BookInfo';
import QuickOrder from '../components/book/QuickOrder';
import { increment, decrement } from '../store/bookCount';
import { addBook } from '../store/bookCart';



function Book() {
    const params = useParams();
    const dispath = useDispatch();
    const book = useSelector((store) => store.book.book);
    const count = useSelector((state) => state.count.value);
    const cart = useSelector((state) => state.cart.book);
    const [orderBlock, setOrderBlock] = useState(false)
    const [price, setPrice] = useState()


    useEffect(() => {
        dispath(apibook(params.bookId))
    }, [dispath])

    useEffect(() => {
        if (book.price) {
            setPrice(
                '$' + Number(book.price.replace('$', '') * count).toFixed(2)
            )
        }
    }, [count])

    useEffect(() => {
        localStorage.setItem('book',JSON.stringify(cart))
    },[cart])


    function buyProduct() {
        const books = {
            title: book.title,
            price: book.price,
            image: book.image,
            count: count,
            id: book.isbn13,
        }
        dispath(addBook(books))
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
                                    <div className='marker'>в наличии</div>
                                </div>
                                <div className="price__count">
                                    <button className="price__btn" onClick={() => dispath(decrement())}><span className='price__minus'>-</span></button>
                                    <input type="number" className="price__value" min='1' value={count} required />
                                    <button className="price__btn" onClick={() => dispath(increment())}><span className='price__plus'>+</span></button>
                                </div>
                            </div>
                            <button className="book__buy" onClick={buyProduct}>Купить</button>
                            <button className="book__quick-order" onClick={() => setOrderBlock(!orderBlock)}>Быстрый заказ</button>
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