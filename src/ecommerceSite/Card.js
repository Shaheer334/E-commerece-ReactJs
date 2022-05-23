import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { selectAllPosts, getProductAsync } from './redux/ecommereceSlice'
// import StripeCheckout from 'react-stripe-checkout'


const Card = () => {
    const productStatus = useSelector((state) => state.product.status)
    // const error = useSelector((state) => state.product.error)
    const products = useSelector(selectAllPosts)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (productStatus === 'idle') {
            dispatch(getProductAsync())
        }
    }, [productStatus, dispatch])

    // console.log("cardData card :", products)
    return (
        <>
            <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                {products.map((val) => (
                    <div className="rounded-2xl overflow-hidden shadow-2xl shadow-slate-600 h-fit" key={val._id}>
                        <div className="px-0 py-0">
                            <img className="object-fill w-screen h-60 lg:m-2" src={`http://localhost:3001/${val.imageUrl}`} alt="pic" />
                        </div>
                        <div className="px-4 py-4">
                            <div className="font-bold text-xl mb-2">{val.name}</div>
                            <p className="text-gray-700 text-base">
                                {val.detail}
                            </p>
                        </div>
                        <div className="px-4 pt-4 pb-4">
                            <span className="inline-block bg-gray-200 rounded-full px-1 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Price {val.price}</span>
                            <span className="inline-block bg-gray-200 rounded-full px-1 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Quantity {val.quantity}</span>
                        </div>
                        <div className="px-4 pt-4 pb-4">
                            <button className="bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white 
                                    text-white px-3 py-1 text-sm font-medium hover:bg-gray-600 hover:text-white p-1 rounded-full" onClick={() => navigate('/purchase', { state: { data: val } })}>Purchase</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Card
