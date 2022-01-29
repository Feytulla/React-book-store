import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const apiShopCart = createAsyncThunk(
    'shopCart/apiShopCart',
    async (id, { rejectWithValue }) => {
        try {
            const response = await axios.get(`https://api.itbook.store/1.0/books/${id}`);

            
            if (!response.status) {
                throw new Error('Server Error!');
            }
            const data = await response.data;
            console.log(data)
            return data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)


export const shopCart = createSlice({
    name: 'shopCart',
    initialState: {
        books: [],
        status: null,
        error: null,
    },
    extraReducers: {
        [apiShopCart.pending]: (state) => {
            state.status = 'loading';
            state.error = null
        },
        [apiShopCart.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.books.push(action.payload);
        },
        [apiShopCart.rejected]: (state, action) => {
            state.error = action.payload
        }
    }
})

export default shopCart.reducer