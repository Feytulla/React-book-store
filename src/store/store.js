import { configureStore } from '@reduxjs/toolkit';
import newBooks from './newBooks';

export const store = configureStore({
    reducer: {
        newBooks,
    },
})