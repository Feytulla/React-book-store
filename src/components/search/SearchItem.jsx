import { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addBook } from '../../store/bookCart';
import SearchItemMazay from "./SearchItemMazay";
import SearchItemWidth from "./SearchItemWidth";
import Context from "../../context";

function SearchItem({ book }) {
    const dispatch = useDispatch();
    const { mazay, widthBlock } = useContext(Context)



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
            {mazay &&
                <SearchItemMazay book={book} buy={buyProduct} />
            }
            {widthBlock &&
                <SearchItemWidth book={book} buy={buyProduct} />
            }
        </>
    )
}

export default SearchItem