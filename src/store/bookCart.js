import { createSlice } from "@reduxjs/toolkit";

export const bookCart = createSlice({
    name: 'bookCart',
    initialState: {
        book: [],
    },
    reducers: {
        apiAddBook: (state, action) => {
            state.book = action.payload;
        },
        addBook: (state, action) => {
            let book;
            if (state.book) {
                book = state.book.find(book => book.id === action.payload.id);
            }
            if (state.book.length === 0) {
                state.book.push(action.payload);
            } else if (book) {
                state.book.filter((book, index) => {
                    if (book.id === action.payload.id) {
                        state.book[index].count = action.payload.count;
                    }
                });
            } else {
                state.book.push(action.payload);
            }
            localStorage.setItem('book', JSON.stringify(state.book))
        }
    },
})

export const { addBook, apiAddBook } = bookCart.actions

export default bookCart.reducer