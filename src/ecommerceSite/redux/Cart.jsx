import React from 'react'
import { Increment, Decrement } from '../redux/ecommereceSlice'
import { useDispatch, useSelector } from 'react-redux'

const Cart = (props) => {
    const dispatch = useDispatch()
    const count = useSelector(state => state.product.count)


    const increment = () => {
        dispatch(Increment())
    }
    const decrement = () => {
        dispatch(Decrement())

    }
    return (
        <>
            <div className="container mx-auto mt-10">
                <div className="flex shadow-xl my-10">
                    <div className="w-3/4 bg-white px-10 py-10">
                        <div className="flex justify-between border-b pb-8">
                            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                        </div>
                        <div className="flex mt-10 mb-5">
                            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
                            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Quantity</h3>
                            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Price</h3>
                            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Total</h3>
                        </div>
                        <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                            <div className="flex w-2/5">
                                <div className="w-20">
                                    <img className="h-24" src={`http://localhost:3001/${props.data.imageUrl}`} alt={props.data.name} />
                                </div>
                            </div>
                            <div className="flex justify-center w-1/5 hover:cursor-pointer">
                                <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                                    <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" onClick={decrement} />
                                </svg>

                                <p className="mx-2 border text-center w-8">{count}</p>

                                <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" onClick={increment} />
                                </svg>
                            </div>
                            <span className="text-center w-1/5 font-semibold text-sm">${props.data.price}</span>
                            <span className="text-center w-1/5 font-semibold text-sm">${props.data.price * count}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart
