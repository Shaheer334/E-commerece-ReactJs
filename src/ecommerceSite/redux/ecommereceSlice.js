import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { toast } from 'react-toastify'

const initialState = {
    product: [],
    status: 'idle',
    error: null,
    count: 1
}

export const postProductAsync = createAsyncThunk(
    'postProduct/postProductAsync',
    async (payload) => {
        const headers = {
            'Content-Type': 'application/json'
        }
        try {
            const res = await axios.post("http://localhost:3001/product/", payload, { headers })
            // console.log("axios response :", (await res).data.message)
            toast.success(`${res.data.message}`, {
                position: toast.POSITION.TOP_CENTER
            })
            console.log(res.data)
            return res.data
        } catch (err) {
            console.log(err)
        }
    }
)
export const getProductAsync = createAsyncThunk(
    'product/getProductAsync',
    async () => {
        const headers = {
            'Content-Type': 'application/json'
        }
        try {
            const res = await axios.get('http://localhost:3001/product/', { headers })
            console.log("get response :", res.data.products)
            return res.data.products
        } catch (err) {
            console.log(err)
        }
    }
)

// export const purchaseProductAsync = createAsyncThunk(
//     'product/purchaseProductAsync',
//     async (payload) => {
//         try {
//             const { data: clientSecret } = await axios.post(`http://localhost:3001/product/paymentintent`, payload)
//             console.log("purchase res :", clientSecret)
//             toast.success(`success`, {
//                 position: toast.POSITION.TOP_CENTER
//             })
//             return clientSecret
//         } catch (err) {
//             console.log(err)
//         }
//     }
// )

export const procductSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        Increment(state, action) {
            // state.count.push(action.payload)
            state.count++
        },
        Decrement(state, action) {
            // state.count.push(action.payload)
            if (state.count <= 1) {
                return
            }
            state.count--
        }
    },
    extraReducers: {
        [postProductAsync.fulfilled]: (state, action) => {
            state.product.push(action.payload)
            console.log("post async :", postProductAsync)
        },
        [getProductAsync.fulfilled]: (state, action) => {
            console.log("get state data", action.payload)
            state.product = action.payload
        },
        // [purchaseProductAsync.fulfilled]: (state, action) => {
        //     console.log("action payload", action.payload)
        //     // return action.payload
        //     // state.product.push(action.payload)
        // }
    }
})

export const selectAllPosts = (state) => state.product.product
export const { Increment, Decrement } = procductSlice.actions
export default procductSlice.reducer