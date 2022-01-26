import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const apibooks = createAsyncThunk(
    'newBooks/apibooks',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get('https://api.itbook.store/1.0/new');

            
            if (!response.status) {
                throw new Error('Server Error!');
            }
            const data = await response.data.books;
            return data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)


export const newBooks = createSlice({
    name: 'newBooks',
    initialState: {
        newBooks: [],
        status: null,
        error: null,
    },
    extraReducers: {
        [apibooks.pending]: (state) => {
            state.status = 'loading';
            state.error = null
        },
        [apibooks.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.newBooks.push(action.payload);
        },
        [apibooks.rejected]: (state, action) => {
            state.error = action.payload
        }
    }
})

export default newBooks.reducer