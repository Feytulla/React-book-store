import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// export const apiBookCart = createAsyncThunk(
//     'bookCart/apiBookCart',
//     async (_, { rejectWithValue }) => {
//         try {
//             const response = await localStorage.getItem('book')

//             if (!response.status) {
//                 throw new Error('Server Error!');
//             }
//             const data = await JSON.stringify(response)
//             return data
//         } catch (error) {
//             return rejectWithValue(error.message)
//         }
//     }
// )

export const bookCart = createSlice({
    name: 'bookCart',
    initialState: {
        book: [],
        status: null,
        error: null,
    },
    reducers: {
        addBook: (state, action) => {
            const book = state.book.find(book => book.id === action.payload.id);
            console.log(book)
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
        }
    },
    // extraReducers: {
    //     [apiBookCart.pending]: (state) => {
    //         state.status = 'loading';
    //         state.error = null
    //     },
    //     [apiBookCart.fulfilled]: (state, action) => {
    //         state.status = 'resolved';
    //         state.book.push(action.payload);
    //     },
    //     [apiBookCart.rejected]: (state, action) => {
    //         state.error = action.payload
    //     }
    // }
})

export const { addBook } = bookCart.actions

export default bookCart.reducer