import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function BookTotal({ btn, link }) {
    const books = useSelector((state) => state.cart.book);
    const [totalPrice, setTotalPrice] = useState()

    useEffect(() => {
        if (books) {
            let total = 0

            books.forEach(book => {
                let price = +book.price.replace('$', '');
                let count = +book.count;
                let sum = price * count;
                total += sum
            })
            setTotalPrice(total)
        }
    }, [books])
    return (
        <>

            {totalPrice ?
                <div className="total">
                    <div className='total__sum'><span className="total__text">Итого:</span>
                        <span className="total__price">${totalPrice.toFixed(2)}</span></div>
                    <div className='total__button mb-4'><Link to={link}><button className="total__btn">{btn}</button></Link></div>
                </div> : null}
        </>
    )
}

BookTotal.propTypes = {
    btn: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
};

export default BookTotal