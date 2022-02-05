import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const apiSearch = createAsyncThunk(
    'searchBook/apiSearch',
    async (request, { rejectWithValue }) => {
        try {
            if (request) {

                const response = await axios.get(`https://api.itbook.store/1.0/search/${request.result}/${request.pageNumber}`);
                if (!response.status) {
                    throw new Error('Server Error!');
                }


                const data = response.data
                return data
            }



        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const searchBook = createSlice({
    name: 'searchBook',
    initialState: {
        data: [],
        bookItems: [],
        value: '',
        pageNumber: 1,
        filter: 'default',
        status: null,
        error: null,
    },
    reducers: {
        addValue: (state, action) => {
            state.value = action.payload;
        },
        valueClear: (state) => {
            state.value = '';
        },
        addPageNumber: (state, action) => {
            state.pageNumber = action.payload
        },
        addFilter: (state, action) => {
            state.filter = action.payload.value;
        },
        addBooks: (state, action) => {
            state.bookItems = []
            state.bookItems.push(action.payload)
        }
    },
    extraReducers: {
        [apiSearch.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
            state.data = []
            state.bookItems = []
        },
        [apiSearch.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.data.push(action.payload);
            state.bookItems.push(action.payload.books);
        },
        [apiSearch.rejected]: (state, action) => {
            state.error = action.payload
        }
    }
})

export const { addValue, valueClear, addPageNumber, addFilter, addBooks } = searchBook.actions

export default searchBook.reducer