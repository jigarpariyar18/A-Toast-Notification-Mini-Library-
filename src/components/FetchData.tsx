import React, { useState } from 'react'

const Fetchdata = ({data}:any) => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(data?.length / 5);
  
    const handlePrevPage = () => {
      setCurrentPage((prevPage) => prevPage - 1);
    };
  
    const handleNextPage = () => {
      setCurrentPage((prevPage) => prevPage + 1);
    };
  
    const startPostIndex = (currentPage - 1) * 5;
    const paginatedPosts = data?.slice(startPostIndex, startPostIndex + 5);
  
  return (
    <div>
        <div className='flex justify-end gap-3'>
        <button  className={` bg-[#b1b1f1] ${currentPage === 1 && 'bg-[lightgrey]'} w-[100px] h-[40px] rounded-lg text-white`} disabled={currentPage === 1} onClick={handlePrevPage}>
        Prev
      </button>
      <button
        disabled={currentPage === totalPages }
        onClick={handleNextPage}
        className={` bg-[#b1b1f1] ${currentPage === totalPages && 'bg-[lightgrey]'} w-[100px] h-[40px] rounded-lg text-white`}
      >
        Next
      </button>
        </div>
        {paginatedPosts.map((post:any) => (
        <div key={post.country_id}>{post.country_name}</div>
      ))}


    </div>
  )
}

export default Fetchdata