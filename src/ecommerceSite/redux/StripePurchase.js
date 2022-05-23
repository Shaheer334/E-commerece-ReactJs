import React, { useState } from 'react'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router'
import Cart from './Cart'
import axios from 'axios'
import '../../App.css'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router'



const StripePurchase = () => {
    const [success, setSuccess] = useState(false)
    const navigate = useNavigate()
    const elements = useElements()
    const stripe = useStripe()
    const count = useSelector(state => state.product.count)
    const { state } = useLocation()
    const productData = state.data
    let price = productData.price
    // console.log("product state data for purchasing gooooooooooood :", price)
    const CARD_OPTIONS = {
        iconStyle: 'solid',
        style: {
            base: {
                iconColor: '#c4f0ff',
                color: '#fff',
                fontweight: 500,
                fontFamily: "Roboto, Open Sans, Segoe UI, sans serif",
                fontSize: '16px',
                fontSmoothing: 'antialiased',
                ":-webkit-autofill": { color: '#fce883' },
                "::placeholder": { color: '#87bbfd' }
            },
            invalid: {
                iconColor: '#ffc7ee',
                color: '#ffc7ee'
            }
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!stripe || !elements) {
            return
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })
        if (!error) {
            try {
                const { id } = paymentMethod
                const response = await axios.post('http://localhost:3001/product/paymentintent', {
                    amount: price * count * 100,
                    id
                })
                if (response.data.success) {
                    console.log("successful payment")
                    setSuccess(true)
                    toast.success(`You just bought ${productData.name}, congrats this is the best decision of your life`, {
                        position: toast.POSITION.TOP_CENTER
                    })
                }
            } catch (error) {
                console.log("Error", error)
            }
        }
        else {
            console.log(error.message)
        }
    }

    return (
        <>
            <Cart data={productData} />
            {!success ?
                <form onSubmit={handleSubmit}>
                    <fieldset className="FormGroup">
                        <div className="FormRow">
                            <CardElement options={CARD_OPTIONS} />
                        </div>
                    </fieldset>
                    <button className="buttonClass">Pay ${count === 1 ? price : price * count}</button>
                </form>
                :
                <div>
                    {navigate('/')}
                </div>
            }
        </>
    )
}

export default StripePurchase