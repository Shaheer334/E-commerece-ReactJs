import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../redux/ecommereceSlice'
export const configStore = configureStore(
    
    {
        reducer: {
            product: productReducer,
        }
    }
)
export default configStore