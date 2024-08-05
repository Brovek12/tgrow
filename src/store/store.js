// src/store/store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

// Create a slice for form data
const formDataSlice = createSlice({
    name: 'formData',
    initialState: {},
    reducers: {
        setFormData: (state, action) => {
            return {...state, ...action.payload }; // Update state with form data
        },
        clearFormData: () => {
            return {}; // Clear form data
        },
    },
});

// Export actions
export const { setFormData, clearFormData } = formDataSlice.actions;

// Create the Redux store
const store = configureStore({
    reducer: {
        formData: formDataSlice.reducer,
    },
});

export default store;