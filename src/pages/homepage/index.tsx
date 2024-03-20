import React, { useEffect, useState } from 'react';
import { Diskominfo, Earth, Square, Square2, Thumbnail } from '../../assets';
import Navbar from '../../components/navbar';
import '../../index.css';
import {FaArrowLeft, FaArrowRight, FaTelegram} from 'react-icons/fa'
import API from '../../services/services';

// https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=nzMzA1BTCj2_1wZPILBteg&cb_client=search.gws-prod.gps&w=408&h=240
// https://www.google.com/maps/place/Lobunta+Lestari+Kencana+1/@-6.7552763,108.5730397,18.79z/data=!4m6!3m5!1s0x2e6f1dd5b1deca6b:0xcc329e33131fe7e9!8m2!3d-6.7548583!4d108.573104!16s%2Fg%2F11gnq1ynz7?entry=ttu
// https://maps.google.com/maps/dir//Lobunta+Lestari+Kencana+1+Gg.+Kencana+1+No.12+Blok+D5+Banjarwangunan+Mundu,+Cirebon,+West+Java+45173/@-6.7548583,108.573104,18z/data=!4m5!4m4!1m0!1m2!1m1!1s0x2e6f1dd5b1deca6b:0xcc329e33131fe7e9

const Homepage: React.FC = () => {

    const [listGeoData, setListGeoData] = useState<any[]>([])

    useEffect(() => {
        (async () => {
            const response = await API.getAllTitle()
            setListGeoData(response?.data?.data)
        })()
    }, [])

    return (
    <div className='w-screen h-max'>
        <Navbar />
        {/* <img src="https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=nzMzA1BTCj2_1wZPILBteg&cb_client=search.gws-prod.gps&w=408&h=240&yaw=92.16629&pitch=0&thumbfov=100" alt="map" /> */}

        <div className='w-screen h-[50px] bg-[#e1f3fc] flex items-center justify-center text-blue-600 text-[14px]'>
            <p>Cirebon merupakan salah satu simpul Jaringan Informasi Geospasial Nasional <b className='underline text-blue-600 cursor-pointer hover:text-blue-900 ml-1' onClick={() => null}>(JIGN)</b>.</p>
        </div>

        {/* Hero Component */}
        <section className='relative w-full border-b-[3px] border-t-[3px] border border-blue-300 h-[100vh] overflow-hidden flex justify-center items-center bg-blue-800 p-12'>
            <img src={Square} alt="square" className='absolute opacity-[1] w-[40%] left-0 top-0' />
            <img src={Square} alt="square" className='absolute opacity-[1] w-[40%] left-[30%] top-0' />
            <img src={Square} alt="square" className='absolute opacity-[1] w-[40%] left-[45%] bottom-[-80px]' />
            <div className='w-1/2 z-[3333] relative h-full p-4 flex flex-col justify-center text-white'>
                <h2 className='text-[54px] mt-[-25px] w-full font-bold'>Web Geoportal 2024, Koordinat Daerah Cirebon.</h2>
                <p className='text-[18px] leading-loose mt-4 x-[555]'>Firebase adalah platform pengembangan aplikasi yang membantu Anda mem-build serta mengembangkan aplikasi dan game favorit pengguna. Didukung oleh Google.</p>
                <div id='btn-hero' className='relative overflow-hidden brightness-[90%] px-6 py-3 text-[17px] mt-8 bg-white rounded-[10px] shadow-lg text-blue-600 text-[20px] w-max flex items-center justify-center cursor-pointer hover:brightness-[90%] active:scale-[0.99]'>
                    Cek Geospasial Sekarang
                </div>
            </div>
            <div className='w-1/2 h-full p-4 relative flex flex-col justify-center items-center'>
                <div className='absolute w-[450px] ml-5 h-[450px] rounded-full border-[4px] border-dashed border-white'>
                </div>
                <div className='absolute w-[350px] h-[650px] border-[4px] border-blue-300 right-[20px] border-opacity-[0.8] border-dashed'>
                </div>
                <div className='absolute w-[650px] h-[5px] border-[4px] border-blue-300 right-[20px] mb-24 border-opacity-[0.8] border-dashed'>
                </div>
                <img src={Earth} className='scale-[1.2]' alt="earth" />
            </div>
        </section>

        {/* Section 1 Component */}
        <section className='relative overflow-hidden w-screen bg-[#f1f2ff] h-max pt-12 pb-16 px-16'>
            <img src={Square2} alt="square" className='absolute opacity-[0.7] w-[40%] right-[-140px] rotate-[90deg] z-[1] top-[0px]' />
            
            <h2 className='text-[36px] font-bold'>Daftar Data Geospasial</h2>
            <p className='text-slate-500 mt-2 mb-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, perferendis.</p>

            <div className='w-max flex items-center z-[44]'>
                <div className='w-max h-max border bg-white border-slate-400 rounded-[10px] shadow-lg py-[12px] mr-4 px-6 py-2 flex items-center justify-center cursor-pointer hover:brightness-[90%] active:scale-[0.99]'>
                    Data Geospasial
                </div>
                <div className='w-max h-max border bg-white border-slate-400 rounded-[10px] shadow-lg py-[12px] mr-4 px-6 py-2 flex items-center justify-center cursor-pointer hover:brightness-[90%] active:scale-[0.99]'>
                    Data Kecamatan
                </div>
                <div className='w-max h-max border bg-white-[2px] border-blue-300 rounded-[10px] bg-blue-800 text-white shadow-lg py-[12px] mr-4 px-6 py-2 flex items-center justify-center cursor-pointer hover:brightness-[90%] active:scale-[0.99]'>
                    Google Map
                </div>
                <div className='w-max h-max border bg-white border-slate-400 rounded-[10px] shadow-lg py-[12px] mr-4 px-6 py-2 flex items-center justify-center cursor-pointer hover:brightness-[90%] active:scale-[0.99]'>
                    Web Open Data
                </div>
                <div className='w-max h-max border bg-white border-slate-400 rounded-[10px] shadow-lg py-[12px] mr-4 px-6 py-2 flex items-center justify-center cursor-pointer hover:brightness-[90%] active:scale-[0.99]'>
                    Tanggapan
                </div>
            </div>

            <div className='w-full my-6'>
                <input type="text" name='search' placeholder='Cari data lebih cepat...' className='bg-white rounded-[10px] w-[50%] px-3 py-3 outline-0 border border-blue-700' />
                <select name="type_dinas" id="type_dinas" className='bg-white outline-0 border border-blue-700 rounded-[10px] ml-4 px-4 py-3'>
                    <option className='w-[90%]' value="">Semua Dinas</option>
                    <option className='w-[90%]' value="">Dinas Pendidikan</option>
                    <option className='w-[90%]' value="">Dinas Kesehatan</option>
                </select>
            </div>

            <div className='relative mt-6 z-[44] w-full h-max flex flex-wrap justify-between'>
                {
                    listGeoData?.length > 0 ? (
                        listGeoData?.map((data: any, index: number) => (
                            <div key={index} className='w-[23%] h-[300px] my-3 shadow-lg border border-blue-500 border-dashed rounded-[12px] bg-white show-lg p-4'>
                                <div className='w-full h-[50%] overflow-hidden rounded-[8px] bg-cover'>
                                    <img src={Thumbnail} alt="peta" />
                                </div>
                                <div className='w-full pt-4 h-1/2'>
                                    <h3>{data?.title}</h3>
                                    <small>2024</small>
                                    <div id='btn-hero' className='relative overflow-hidden w-[100%] h-[50px] flex items-center justify-center cursor-pointer hover:brightness-[90%] active:scale-[0.99] bg-blue-700 text-white rounded-[8px] mt-4 mx-auto'>
                                        Lihat peta
                                    </div>
                                </div>
                            </div>
                        ))
                    ):
                    null
                }
            </div>

            <div className="flex w-full justify-between px-6 md:pr-6 md:mt-4 md:mb-0 mb-16">
                <button
                    className={`bg-blue-600 flex items-center text-white font-bold py-4 px-4 rounded-[8px] hover:bg-blue-600 cursor-pointer`}
                    onClick={() => null}
                    // disabled={currentPage === 0}
                >
                    <FaArrowLeft className='cursor-pointer' />
                </button>
                <span className="text-slate-700 font-normal mx-4 flex items-center md:px-4">
                    <p className='md:inline hidden'>Page</p> 
                        {/* {currentPage + 1} of {totalPages} */}
                        1 of 2
                </span>
                <button
                    // ${currentPage === totalPages - 1 ? 'cursor-not-allowed opacity-50 bg-slate-500' : 'cursor-pointer hover:bg-blue-700'}
                    className={`bg-blue-600 flex items-center text-white font-bold py-4 px-4 rounded-[8px] hover:bg-blue-600 cursor-pointer`}
                    onClick={() => null}
                    // disabled={currentPage === totalPages - 1}
                >
                    <FaArrowRight className='cursor-pointer' />
                </button>
            </div>
        </section>

        <div className='border-t border-t-[2px] border-dashed border-blue-700 w-screen mx-auto relative'></div>
        
        <section className='w-screen h-max flex items-center px-16 pb-6 pt-12'>
            <div className='w-1/2 min-h-[400px]'>
                <h2 className='text-[36px] font-bold'>Berikan Masukan Untuk Kami</h2>
                <p className='text-slate-500 w-[80%] leading-loose mt-2 mb-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex saepe atque perferendis voluptate accusamus possimus? Atque aperiam aut provident iusto, similique iste fugit nisi qui..</p>
            </div>

            <form className='w-1/2 h-max p-6 border border-slate-300 mt-6 bg-white shadow-lg rounded-[12px]'>
                <div className='flex flex-col my-5'>
                    <label className='mb-3 font-bold' htmlFor="username">Nama anda</label>
                    <input type="text" name='search' placeholder='Muhammad Khoirulhuda' className='bg-white rounded-[10px] w-full px-3 py-3 outline-0 border border-blue-700' />
                </div>
                <div className='flex flex-col my-5'>
                    <label className='mb-3 font-bold' htmlFor="username">Akun Email</label>
                    <input type="text" name='search' placeholder='your@gmail.com' className='bg-white rounded-[10px] w-full px-3 py-3 outline-0 border border-blue-700' />
                </div>
                <div className='flex flex-col my-5'>
                    <label className='mb-3 font-bold' htmlFor="username">Masukan atau saran</label>
                    <textarea name='search' placeholder='Sampaikan saran anda disini...' className='bg-white rounded-[10px] w-full px-3 py-3 h-[150px] outline-0 border border-blue-700' />
                </div>
                <div className='w-[100%] h-[50px] flex items-center justify-center cursor-pointer hover:brightness-[90%] active:scale-[0.99] bg-blue-700 text-white rounded-[8px] mt-6 mx-auto'>
                    Kirim sekarang <FaTelegram className='ml-2 relative top-[0.8px]' />
                </div>
            </form>
        </section>

        <footer className='w-screen mx-auto p-12 mt-16 h-max bg-blue-800 border-y-[3px] border-dashed border-blue-300'>
            <div className='w-full h-full flex items-center'>
                <div className='text-white h-full w-[40%]'>
                    <div className='bg-white rounded-[10px] w-max'>
                        <img src={Diskominfo} alt="diskominfo-logo" className='w-[55%] my-6' />
                    </div>
                    <p className='text-[14px] w-[80%] leading-loose'>Jl. Sunan Drajat No.15, Sumber, Kec. Sumber, Kabupaten Cirebon, Jawa Barat 45611</p>
                </div>
                <ul className='text-white w-[30%] h-full flex flex-col justify-between'>
                    <li className='mb-7 cursor-pointer active:scale-[0.99] relative rounded-full w-max hover:px-3 py-2 cursor-pointer hover:bg-blue-300 hover:text-blue-700 duration-200'>Geoportal</li>
                    <li className='mb-7 cursor-pointer active:scale-[0.99] relative rounded-full w-max hover:px-3 py-2 cursor-pointer hover:bg-blue-300 hover:text-blue-700 duration-200'>Open Data</li>
                    <li className='mb-7 cursor-pointer active:scale-[0.99] relative rounded-full w-max hover:px-3 py-2 cursor-pointer hover:bg-blue-300 hover:text-blue-700 duration-200'>Sat0u Data</li>
                    <li className='cursor-pointer active:scale-[0.99] relative rounded-full w-max hover:px-3 py-2 cursor-pointer hover:bg-blue-300 hover:text-blue-700 duration-200'>Kabupaten Cirebon</li>
                </ul>
                <ul className='text-white w-[30%] h-full flex flex-col justify-between'>
                    <li className='mb-7 cursor-pointer active:scale-[0.99] relative rounded-full w-max hover:px-3 py-2 cursor-pointer hover:bg-blue-300 hover:text-blue-700 duration-200'>Diskominfo Cirebon</li>
                    <li className='mb-7 cursor-pointer active:scale-[0.99] relative rounded-full w-max hover:px-3 py-2 cursor-pointer hover:bg-blue-300 hover:text-blue-700 duration-200'>Berita Cirebon</li>
                    <li className='mb-7 cursor-pointer active:scale-[0.99] relative rounded-full w-max hover:px-3 py-2 cursor-pointer hover:bg-blue-300 hover:text-blue-700 duration-200'>Google Map</li>
                    <li className='cursor-pointer active:scale-[0.99] relative rounded-full w-max hover:px-3 py-2 cursor-pointer hover:bg-blue-300 hover:text-blue-700 duration-200'>Pelayanan Adminidistratif</li>
                </ul>
            </div>
        </footer>
    </div>
  )
}

export default Homepage
