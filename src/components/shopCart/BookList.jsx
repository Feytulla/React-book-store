import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { bookCount, bookDelete } from '../../store/bookCart';


function BookList({ book }) {
    const dispath = useDispatch();
    const [count, setCount] = useState(book.count)
    const [id, setId] = useState(book.id)


    useEffect(() => {
        dispath(bookCount({ count, id }))
    }, [count])


    function deleteBook(id) {
        dispath(bookDelete({id}))
    }

    return (
        <>
            <tr>
                <td><div className="table__image"><img src={book.image} alt="" /></div></td>
                <td><div className="table__book-title"><h5 className="h5">{book.title}</h5></div></td>
                <td><div className="table__value">
                    <button type="button" className="price__btn" onClick={() => setCount(count > 1 ? count - 1 : 1)}><span className='price__minus'>-</span></button>
                    <input type="number" className="price__value" min='1' value={count} required />
                    <button type="button" className="price__btn" onClick={() => setCount(count + 1)}><span className='price__plus'>+</span></button>
                </div></td>
                <td><div className="table__price">{'$' + Number(book.price.replace('$', '') * count).toFixed(2)}</div></td>
                <td><div className="table__btn-container"><button className="table__delete" onClick={() => deleteBook(id)}> &times;</button></div></td>
            </tr>

        </>
    )
}

export default BookList