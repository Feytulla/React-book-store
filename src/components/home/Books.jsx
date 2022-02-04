import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { apibooks } from '../../store/newBooks';
import Loading from '../Loading';

function Books() {
    const dispatch = useDispatch();
    const books = useSelector((state) => state.newBooks.newBooks[0])
    const { status, error } = useSelector((state) => state.newBooks);

    useEffect(() => {
        dispatch(apibooks())
    }, [dispatch])

    return (
        <>
            <div className="row">
                {status === 'loading' && <Loading />}
                {error && <h2>An error occured: {error}</h2>}
                {
                    books && books.map((book, index) => {
                        return (
                            <div className="col-sm-6 col-md-3 mb-3" key={index}>
                                <Link to={`/book/${book.isbn13}`}>
                                    <div className="book">
                                        <div className="book__container">
                                            <div className="book__image">
                                                <img src={book.image} alt="book" />
                                            </div>
                                            <div className="book__info">
                                                <h6 className='book__title'>{book.title}</h6>
                                                <div className='book__subtitle'>{book.subtitle}</div>
                                                <div className='book__price'>{book.price}</div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Books