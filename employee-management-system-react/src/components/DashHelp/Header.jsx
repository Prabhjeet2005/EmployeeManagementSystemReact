import React from 'react'

const Header = () => {
  return (
      <>
    <div className='bg-zinc-800 flex justify-between rounded-xl mb-4 screen p-8'>
              <div className='flex flex-col text-lg font-semibold'>Welcome! 👋🏼 <span className='font-bold text-3xl'>Prabhjeet</span></div>
              <button className='bg-red-600 text-black p-2 rounded-xl'>Log Out</button>
    </div>
      </>
  )
}

export default Header