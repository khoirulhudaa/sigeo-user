import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import { Diskominfo } from '../assets'

const Navbar: React.FC = () => {

  const [activeMenu, setActiveMenu] = useState<boolean>(false)

  return (
    <div className='w-screen h-[50px] bg-white relative flex items-center justify-between shadow-lg shadow-blue-100 px-8 jsutify-between'>
      <div>
        <img src={Diskominfo} alt="logo-diskominfo" className='w-[30%] relative left-6' />
      </div>
      <div className='w-[80%]'>
        <ul className='flex items-center'>
            <li className='md:mr-10 font-medium text-slate-500 hover:text-blue-500 cursor-pointer active:scale-[0.98] text-[14px]'>Homepage</li>
            <li className='md:mr-10 font-medium text-slate-500 hover:text-blue-500 cursor-pointer active:scale-[0.98] text-[14px]'>Daftar geospasial</li>
            <li className='md:mr-10 font-medium text-slate-500 hover:text-blue-500 cursor-pointer active:scale-[0.98] text-[14px]'>Kontak Dinas</li>
            <li className='md:mr-10 font-medium text-slate-500 hover:text-blue-500 cursor-pointer active:scale-[0.98] text-[14px]'>Diskominfo</li>
            <li className={`relative md:mr-10 border rounded-[8px] px-4 py-2 cursor-pointer text-[14px] flex items-center ${activeMenu ? 'bg-blue-600 border-white' : 'bg-white border-slate-300 font-medium text-slate-500'}`}>
              <p onClick={() => setActiveMenu(!activeMenu)} className={`${activeMenu ? 'text-white' : ''}`}>Menu Lainnya </p>
              <span className={`ml-3 text-[12px] relative top-[0.5px] hover:rotate-[-180deg] duration-200 ${activeMenu ? 'text-white' : ''}`}>
                <FaChevronDown />
              </span>
              <div className={`absolute w-max h-max rounded-[8px] bg-white duration-100 shadow-lg p-2 ${activeMenu ? 'bottom-[-180px] z-[9999] left-[0px] opacity-1 duration-400' : 'bottom-[-160px] opacity-0 left-[0px] z-[-1] duration-400'}`}>
                <p className='p-3 cursor-pointer bg-white rounded-md hover:bg-blue-400 hover:text-white active:scale-[0.99] duration-100'>Open Data</p>
                <p className='p-3 cursor-pointer bg-white rounded-md hover:bg-blue-400 hover:text-white active:scale-[0.99] duration-100'>Satu Data</p>
                <p className='p-3 cursor-pointer bg-white rounded-md hover:bg-blue-400 hover:text-white active:scale-[0.99] duration-100'>Web Diskominfo</p>
              </div>
            </li>
            <li className='font-medium text-slate-500 hover:text-blue-500 cursor-pointer active:scale-[0.98] text-[14px]'>Open Data Kabupaten Cirebon</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
