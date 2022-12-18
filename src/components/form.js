import React from 'react'

const form = ({ filter, keyword, handleSearch, handleClear }) => {
  return (
    <form className='form'>
      <input onChange={filter} type="text" value={keyword} placeholder="Search words" />
      <button type="button" className='btn' onClick={handleSearch}>Search</button>
      <button type="button" className='btn btn-red' onClick={handleClear}>Clear</button>
    </form>
  )
}

export default form