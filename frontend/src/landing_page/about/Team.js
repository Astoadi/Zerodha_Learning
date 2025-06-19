import React from 'react';
function Team() {
    return ( 
        <div className='container border-top '>
            <div className='row mt-2 p-5' style={{fontSize:"1.2rem",lineHeight:"1.8"}}>
                <h1 className='text-center fs-1 p-4 fw-bold mb-5'>People</h1>
                <div className='col-6 p-5 text-center'>
                    <img src='media/images/nithinKamath.jpg' className='rounded-circle mb-4' style={{width:"65%"}}/>
                    <h4>Nithin Kamath</h4>
                    <h5 className='text-muted'>Founder,CEO</h5>
                </div>
                <div className='col-6'>
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p>Connect on <a href=''>Homepage</a> / <a href=''>TradingQnA</a> / <a href=''>Twitter</a></p>
                </div>
            </div>
        </div>
     );
}

export default Team;