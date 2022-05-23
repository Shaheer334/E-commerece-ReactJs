import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { postProductAsync } from '../ecommerceSite/redux/ecommereceSlice'
const AddCard = () => {
    const dispatch = useDispatch()
    const schema = Yup.object().shape({
        name: Yup.string().required("Product name is required").max(30).min(3),
        price: Yup.string().required("Price cannot be empty").max(25).min(1),
        quantity: Yup.string().required("Quantity cannot be empty ").min(1),
        detail: Yup.string().required("Details must be entered").max(255).min(5),
        imageUrl: Yup.mixed()
            .nullable()
            .required('An image is required'),
    })

    return (
        <>
            <Formik initialValues={{ name: "", detail: "", quantity: "", price: "", imageUrl: "" }}
                validationSchema={schema}
                
                onSubmit={(values, actions) => {
                    console.log("addCard data:", values.imageUrl)
                    let formData = new FormData()
                    formData.append('name', values.name)
                    formData.append('detail', values.detail)
                    formData.append('quantity', values.quantity)
                    formData.append('price', values.price)
                    formData.append('imageUrl', values.imageUrl)
                    
                    dispatch(
                        postProductAsync(formData)
                    )
                }}
            >
                {({
                    errors,
                    values,
                    touched,
                    handleChange,
                    handleSubmit,
                    handleBlur,
                    setFieldValue
                }) => (
                    <form encType='multipart/form-data'>
                        <div className="py-3 max-h-full bg-gray-300">
                            <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-md">
                                <div className="md:flex">
                                    <div className="w-full p-3 px-6 py-10">
                                        <div className="text-center mb-4">
                                            <span className="text-xl text-gray-700">Add Product</span>
                                        </div>
                                        <div className="mb-6">
                                            <label htmlFor="prodname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Product Name</label>
                                            <input type="text" id="prodname" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                                        focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                                        dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
                                          dark:shadow-sm-light" placeholder="enter product name"
                                                name='name'
                                                onChange={(event) => setFieldValue('name', event.target.value)}
                                                onBlur={handleBlur}
                                            />
                                            <label className="error" style={{ color: "red" }}> {errors.name && touched.name && errors.name}
                                            </label>
                                        </div>
                                        <div className="mb-6">
                                            <label htmlFor="prodprice" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Price</label>
                                            <input type="number" id="prodprice" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                                        focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                                        dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
                                          dark:shadow-sm-light" placeholder="enter product price"
                                                name='price'
                                                onChange={(event) => setFieldValue('price', event.target.value)}
                                                onBlur={handleBlur}
                                            />
                                            <label className="error" style={{ color: "red" }}> {errors.price && touched.price && errors.price}
                                            </label>
                                        </div>
                                        <div className="mb-6">
                                            <label htmlFor="prodquantity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Quantity</label>
                                            <input type="number" id="prodquantity" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm 
                                        rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                                      dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
                                        dark:shadow-sm-light" placeholder="enter product quantity"
                                                name='quantity'
                                                onChange={(event) => setFieldValue('quantity', event.target.value)}
                                                onBlur={handleBlur}
                                            />
                                            <label className="error" style={{ color: "red" }}> {errors.quantity && touched.quantity && errors.quantity}
                                            </label>
                                        </div>
                                        <div className="mb-6">
                                            <label htmlFor="proddetails" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Detail</label>
                                            <input type="text" id="proddetails" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm 
                                        rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                                      dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
                                        dark:shadow-sm-light" placeholder="enter product details"
                                                name='detail'
                                                onChange={(event) => setFieldValue('detail', event.target.value)}
                                                onBlur={handleBlur}
                                            />
                                            <label className="error" style={{ color: "red" }}> {errors.detail && touched.detail && errors.detail}
                                            </label>
                                        </div>
                                        <div className="mb-6">
                                            <label htmlFor="prodimage" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Image</label>
                                            <input type="file" id="prodimage" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm 
                                        rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                                      dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
                                        dark:shadow-sm-light"
                                                name='imageUrl'
                                                onChange={(event) => setFieldValue("imageUrl", event.target.files[0])}
                                                onBlur={handleBlur}
                                            />
                                            <label className="error" style={{ color: "red" }}> {errors.imageUrl && touched.imageUrl && errors.imageUrl}
                                            </label>
                                        </div>
                                        <button type="submit" onClick={handleSubmit} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center 
                                      dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 h-12 w-full">Add Product</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                )}
            </Formik>
        </>
    )
}

export default AddCard