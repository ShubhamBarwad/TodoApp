import { createSlice } from "@reduxjs/toolkit";

export const buttonSlice = createSlice({
    name: 'button',
    initialState: {
        text: '',
        value: '',
        modalIsOpen: false,
        apiEndpoint: '',
    },
    reducers: {
        setModalState(state){
            state.modalIsOpen = !state.modalIsOpen;
        },
        submitData(state, path){
            state.apiEndpoint = path;
        }
    }
});

export const { setModalState, setButtonText, submitData } = buttonSlice.actions;
export default buttonSlice.reducer;