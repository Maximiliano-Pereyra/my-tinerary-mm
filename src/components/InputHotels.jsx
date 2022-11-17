import React from 'react'

export default function InputHotels(props) {
 let {filter} = props

  return (
    <form className='input-search2'>
      <input
        placeholder='Hotel...'
        type='search'
        onChange={filter}>
      </input>
    </form>
  )
}
