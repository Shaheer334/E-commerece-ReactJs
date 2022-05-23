import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { toast } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';
import store from './ecommerceSite/redux/store';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css'
import { getProductAsync } from './ecommerceSite/redux/ecommereceSlice';
import reportWebVitals from './reportWebVitals'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios';
toast.configure()

async function start() {
  store.dispatch(getProductAsync())
  // store.dispatch(purchaseProductAsync())

  const res = await axios.get('http://localhost:3001/product/config')
  const stripePromise = loadStripe(res.data)
  console.log("key :", res.data)
  // const stripePromise = loadStripe('pk_test_51KCenDJ2SqQVVo39VimwT20bpwuczWHC8joVPhejWpZbVvu07OWJ6aYxWJpXHQu0HTfQgfSUX5FBbOpS5LA7fi8A00xRL7qOm1')

  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <Provider store={store}>
          <Elements stripe={stripePromise}>
            <App />
          </Elements>
        </Provider>
      </React.StrictMode>
    </BrowserRouter>
    ,
    document.getElementById('root')
  );
}

start()
reportWebVitals();