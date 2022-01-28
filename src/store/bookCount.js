import { createSlice } from '@reduxjs/toolkit';

export const bookCount = createSlice({
    name: 'bookCount',
    initialState: {
        value: 1,
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            if (state.value > 1) {
                state.value -= 1
            }
        }
    }
})

export const { increment, decrement } = bookCount.actions

export default bookCount.reducer