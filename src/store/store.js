import { configureStore } from '@reduxjs/toolkit';
import newBooks from './newBooks';
import book from './book';

export const store = configureStore({
    reducer: {
        newBooks,
        book,
    },
})