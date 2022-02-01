import { configureStore } from '@reduxjs/toolkit';
import newBooks from './newBooks';
import book from './book';
import bookCart from './bookCart';
import search from './search';

export const store = configureStore({
    reducer: {
        newBooks,
        book,
        cart: bookCart,
        search,
    },
})