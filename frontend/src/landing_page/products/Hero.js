import React from 'react';
function Hero() {
    return ( 
        <div className='container mt-5 border-bottom p-4'>
            <div className='row mt-5 p-5 text-center'>
                <h1 className='fw-bold' style={{fontSize:"3rem"}}>Zerodha Products</h1>
                <h5 className='mt-3 fs-4'>Sleek, modern and intuitive trading platforms</h5>
                <p className='mt-3'>Check out our <a href=''>investment offerings  <i class="fa-solid fa-arrow-right"></i></a></p>
            </div>
        </div>
     );
}

export default Hero;