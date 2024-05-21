import React from 'react'

const GptSearchBar = () => {
  return (
    <div className='pt-[10%]  flex justify-center'>
        <form className='w-1/2 bg-black grid grid-cols-12'>
            <input type="text" placeholder="Search for a movie" className='p-2 m-2 border-2 border-gray-500 col-span-9'/>
            <button className='p-2 m-2 bg-red-700 text-white rounded-lg col-span-3'>Search</button>
        </form>
    </div>
  )
}

export default GptSearchBar