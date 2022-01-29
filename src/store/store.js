import { configureStore } from '@reduxjs/toolkit';
import newBooks from './newBooks';
import book from './book';
import bookCount from './bookCount';
import bookCart from './bookCart';
import shopCart from './shopCart';

export const store = configureStore({
    reducer: {
        newBooks,
        book,
        count: bookCount,
        cart: bookCart,
        shop: shopCart,
    },
})