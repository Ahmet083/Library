import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: 'null'
}




const categorySlice = createSlice({
    name: 'categorySlice',
    initialState,
    reducer: {
        setCategory: (state, action) => {
            console.log("SetCategoryAction", state, action)
            state.categories = action.payload
        }
    }
})

export const {setCategory} = categorySlice.actions

export default categorySlice.reducer