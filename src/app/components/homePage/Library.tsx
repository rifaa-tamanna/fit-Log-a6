import React from 'react';
import LibraryCard from '../shared/LibraryCard';
import { ILibrary } from '@/type/libraryType';



const getLibraryData = async() => {
    const response = await fetch('http://localhost:3000/libraryData.json')
    const data = await response.json()
    return data;
}


const TheLibrary = async() => {

    const libraryDatas = await getLibraryData()
    // console.log(libraryDatas)

    return (
        <section id="library" className='max-w-7xl mx-auto'>
              <div className='max-w-7xl mx-auto my-[20px]'>
                <h1 className='font-oswald text-white text-[30px] font-bold'>THE LIBRARY</h1>
                <p className='font-inter text-[14px] text-[#9CA3AF]'>Twelve lifts covering every major muscle group.</p>
              </div>

              <div className='grid grid-cols-3 gap-6 mt-[20px] mb-[80px]'>
                {
                   libraryDatas.map((libraryData: ILibrary, ind: number) => {
                    return <LibraryCard key={ind} libraryData={libraryData}></LibraryCard>
                   }) 
                }
              </div>
        </section>
    );
    };

export default TheLibrary;  