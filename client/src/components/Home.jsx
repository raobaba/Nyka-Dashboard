import React from 'react'
import Navbar from './Navbar';
import Home_Page from '../assets/Home.avif'
import { useSelector, useDispatch } from 'react-redux';

function Home() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  
  return (
    <div className='w-full h-10'>
        <Navbar/>
        <div className='w-full h-96'>
         <img src={Home_Page} alt="Home_page" className='w-full h-[89vh]' />
        </div>
    </div>
  )
}

export default Home