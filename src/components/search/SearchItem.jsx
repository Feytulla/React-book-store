import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addBook } from '../../store/bookCart';

function SearchItem({ book }) {
    const dispatch = useDispatch();



    function buyProduct() {
        const books = {
            count: 1,
            title: book.title,
            price: book.price,
            image: book.image,
            id: book.isbn13,
        }
        dispatch(addBook(books))
    }

    return (
        <>
            <div className="col-sm-6 col-md-3 mb-3">
                <div className="book">
                    <div className="book__container">
                        <Link to={`/book/${book.isbn13}`}>
                            <div className="book__image">
                                <img src={book.image} alt="book" />
                            </div>
                            <div className="book__info">
                                <h6 className='book__title'>{book.title}</h6>
                                <div className='book__subtitle'>{book.subtitle}</div>
                                <div className='book__price'>{book.price}</div>
                            </div>
                        </Link>
                        <button className="book__btn" onClick={buyProduct}><i class="fas fa-shopping-basket"></i>Купить</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchItem