import React from 'react'
import { useNavigate } from 'react-router'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import { useSelector } from 'react-redux';

const NavBar = () => {
    // const count = useSelector(state => state.product.count)
    const navigate = useNavigate()
    return (
        <>
            <nav className='bg-gray-700 shadow-lg rounded-bl-3xl rounded-tr-3xl lg:m-2 xl:max-w-full'>
                <div className='max-w-6xl mx-auto px-2 sm:px-6 lg:px-8'>
                    <div className='relative flex justify-between items-center h-16'>
                        <div className='flex flex-1 items-center sm:items-stretch sm:justify-start lg:m-2 xl:max-w-full'>
                            <div className='sm:block sm:ml-6'>
                                <div className='flex shrink-0'>
                                    <button className='bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white 
                                    text-white px-3 py-2 text-sm font-medium hover:bg-gray-600 hover:text-white p-1 rounded-full'
                                        onClick={() => navigate('/')}
                                    >
                                        Home</button>
                                </div>
                            </div>
                            <div className='sm:block sm:ml-6'>
                                <div className='flex shrink-0'>
                                    <button className='bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white 
                                    text-white px-3 py-2 text-sm font-medium hover:bg-gray-600 hover:text-white p-1 rounded-full'
                                        onClick={() => navigate('/addcard')}
                                    >
                                        Add Card</button>
                                </div>
                            </div>

                        </div>
                        <div className='flex flex-1 items-center sm:items-stretch sm:justify-end'>
                            <div className='sm:block sm:ml-6 '>
                                <div className='flex justify-items-end'>
                                    
                                    <AddShoppingCartIcon className='text-zinc-200'
                                    />
                                    {/* <label className='text-green-500'>{count}</label> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar
