import { configureStore } from '@reduxjs/toolkit'
import dataListSlice from '../features/dataList/dataListSlice'
import patientReducer from '../features/Input/patientSlice'
const store = configureStore({
    reducers: {
        patients: dataListSlice
    }
})

export default store;