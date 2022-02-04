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
        books: [],
        value: '',
        pageNumber: 1,
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
        }
    },
    extraReducers: {
        [apiSearch.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
            state.books = []
        },
        [apiSearch.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.books.push(action.payload);
        },
        [apiSearch.rejected]: (state, action) => {
            state.error = action.payload
        }
    }
})

export const { addValue, valueClear,addPageNumber } = searchBook.actions

export default searchBook.reducer