import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./authSlice";
import categoryReducer from "./categoriesSlice"


export default configureStore({
    reducer: {
        auth: 'authReducer',
        category: 'categoryReducer'

    }
})
