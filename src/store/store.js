import { configureStore } from '@reduxjs/toolkit';
import newBooks from './newBooks';
import book from './book';
import bookCount from './bookCount'

export const store = configureStore({
    reducer: {
        newBooks,
        book,
        count: bookCount,
    },
})