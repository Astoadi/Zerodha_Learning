import React from 'react';
function Hero() {
    return ( 
        <div className='container'>
            <div className='mt-5 p-5 text-center border-bottom row'>
                <h1 className='fs-1'>Pricing</h1>
                <p className='text-muted fs-5'>Free equity investments and flat &#8377;20 traday and F&O trades</p>
            </div>
            <div className='row text-center'>
                <div className='col-4'>
                    <img src='media/images/pricingEquity.svg' style={{width:"75%"}}/>
                    <h2 className='fs-2'>Free equity delivery</h2>
                    <p className='text-muted' style={{fontSize:"1.1rem"}}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4'>
                    <img src='media/images/intradayTrades.svg' style={{width:"75%"}}/>
                    <h2 className='fs-2'>Intraday and F&O trades</h2>
                    <p className='text-muted' style={{fontSize:"1.1rem"}}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-4'>
                    <img src='media/images/pricingMF.svg' style={{width:"75%"}}/>
                    <h2 className='fs-2'>Free direct MF</h2>
                    <p className='text-muted' style={{fontSize:"1.1rem"}}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
     );
}

export default Hero;