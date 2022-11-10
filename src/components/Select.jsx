import React from 'react';
import { useRef } from 'react';

export default function Select() {

  const ascSelect = useRef();
  const dscSelect = useRef();

  let handleSubmit = (event) => {
      event.preventDefault();
      const data = {
        asc: ascSelect.current?.value,
        
      };
      localStorage.setItem('selec-data', JSON.stringify(data))
  }

  let handleSubmit2 = (event) => {
    event.preventDefault();
    const data = {
      
      dsc: dscSelect.current?.value,
    };
    localStorage.setItem('selec-data2', JSON.stringify(data))
}

  return (

    <select className='selectH' defaultValue={'DEFAULT'} onClick={handleSubmit} onChange={handleSubmit2}>
        <option ref={ascSelect}>Ascending</option>
        <option ref={dscSelect}>Descending</option>
      </select>

  )
}