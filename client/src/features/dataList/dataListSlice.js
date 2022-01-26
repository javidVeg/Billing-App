import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const getDataList = createAsyncThunk('list/getDataList', async () => {
    return fetch('http://localhost:5001/api/patientsinfo/')
    .then((res) => res.json()
    )
});


const dataListSlice = createSlice({
    name: 'list',
    initialState: {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        status: null,
    },
    extraReducers: {
        [getDataList.pending]: (state, action) => {
            state.status = "loading"
        },
        [getDataList.fulfilled]: (state, { payload }) => {
            state.list = payload
            state.status = "success"
        },
        [getDataList.rejected]: (state, action) => {
            state.status = "failed"
        },
    },

})

export default dataListSlice.reducer 