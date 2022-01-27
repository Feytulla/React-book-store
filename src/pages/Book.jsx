import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { apibook } from '../store/book';
import Breadcrumb from '../components/Breadcrumb';
import { useParams } from 'react-router-dom';
import BookInfo from '../components/book/BookInfo';
import QuickOrder from '../components/book/QuickOrder';



function Book() {
    const params = useParams();
    const dispath = useDispatch();
    const book = useSelector((store) => store.book.book);
    const [count, setCount] = useState(1);
    const [orderBlock, setOrderBlock] = useState(false)


    useEffect(() => {
        dispath(apibook(params.bookId))
    }, [dispath])
    console.log(book)
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
                                    {book.price}
                                    <div className='marker'>в наличии</div>
                                </div>
                                <div className="price__count">
                                    <button className="price__btn"><span className='price__minus' onClick={() => setCount(count - 1)}>-</span></button>
                                    <input type="number" className="price__value" min='1' value={count} required />
                                    <button className="price__btn"><span className='price__plus' onClick={() => setCount(count + 1)}>+</span></button>
                                </div>
                            </div>
                            <button className="book__buy">Купить</button>
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