import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { bookCount, bookDelete } from '../../store/bookCart';

function BookList({ book }) {
        const dispatch = useDispatch();
        const [count, setCount] = useState(book.count)
        const [id, setId] = useState(book.id)


        useEffect(() => {
            dispatch(bookCount({ count, id }))
        }, [count])


        function deleteBook(id) {
            dispatch(bookDelete({ id }))
        }
        return (
            <>
                <div className="boot-list">
                    <div className="boot-list__image">
                        <img src={book.image} alt="" />
                    </div>
                    <div className="boot-list__info">
                        <div className="boot-list__head">
                            <span className="boot-list__title">{book.title}</span>
                            <span className="boot-list__delete" onClick={() => deleteBook(id)}>&times;</span>
                        </div>
                        <div className="boot-list__body">
                            <div className="boot-list__value">
                                <span>Количество</span>
                                <div className="boot-list__sum">
                                    <div className="boot-list__minus" onClick={() => setCount(count > 1 ? count - 1 : 1)}>-</div>
                                    <div className="boot-list__count">{count}</div>
                                    <div className="boot-list__plus" onClick={() => setCount(count + 1)}>+</div>
                                </div>

                            </div>
                            <div className="boot-list__price">
                                <span>{book.price}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

export default BookList