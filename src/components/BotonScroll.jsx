import {useEffect} from 'react';

export default function ScrollToTop() {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (


      <button className='botonFooterS'
        onClick={() => {
            console.log("se ejecuta scrollToTop")
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}
      >
        ↥
      </button>

  );
}
