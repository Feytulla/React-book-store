import { Link } from "react-router-dom";

function SearchItemWidth({ book, buy }) {


    return (
        <>
            <div className="col-12 mb-3">
                <div className="book-w">
                    <div className="book-w__container">
                        <Link to={`/book/${book.isbn13}`} className="book-w__link">
                            <div className="book-w__image">
                                <img src={book.image} alt="book" />
                            </div>
                            <div className="book-w__head">
                                <h6 className='book__title'>{book.title}</h6>
                                {/* <div className='book-w__subtitle'>{book.subtitle}</div> */}
                                <div className='book-w__subtitle'>Данное издание «Кобзаря» — одно из красивейших изданий самой ценной книги украинской литературы, проиллюстрированное художественными работами самого Шевченка. После смерти поэта осталось огромное наследие произведений живописи и графики. Несмотря на это, исследователи творчества поэта ещё в 1900 ..</div>
                            </div>
                        </Link>
                        <div className="book-w__body">
                            <div className='book-w__price'>${book.price}</div>
                            <button className="book__btn" onClick={buy}><i class="fas fa-shopping-basket"></i>Купить</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchItemWidth