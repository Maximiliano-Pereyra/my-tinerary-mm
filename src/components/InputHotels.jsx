import React, { useState } from 'react'

export default function InputHotels() {
    const [search, setSearch] = useState('')

  return (
    <form className='input-search2'>
        <input
                placeholder='Hotel...'
                value={search}
                name="search"
                onChange={ev=>setSearch(ev.target.value)}>
                </input>
        <button type='submit'>Buscar</button>
        <p> Resultados para: {search}</p>
    </form>
         )
}
