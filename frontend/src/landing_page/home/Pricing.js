import React from 'react';
function Pricing() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row p-5'>
                <div className='col-6 col-md-4 mb-5'>
                    <h1 className='fw-bolder mb-4 text-nowrap'>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. flat fees and no hidden charges.</p>
                    <a href='' style={{textDecoration:"none"}}>See pricing <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className='col-2'></div>
                <div className='col-12 col-md-6'>
                    <div className='row text-center mb-5'>
                        <div className='col-6 p-4'  style={{border:"1px solid",borderColor:"#D3D3D3"}}>
                            <h1 className='fw-bold'>&#8377;0</h1>
                            <p>Free equity delivery and direct mutual funds</p>
                        </div>
                        <div className='col-6 p-4 ' style={{border:"1px solid",borderColor:"#D3D3D3"}}>
                            <h1 className='fw-bold'>&#8377;20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;