import React from 'react';
function CreateTicket() {
    return ( 
        <div className='container'>
            <p className='fs-4 text-muted mb-4'>To create a ticket, select a relevant topic</p>
            <div className='row p-5'>
                <div className='col-4'>
                    <p className='fs-4 mb-2'><i class="fa-solid fa-circle-plus fs-4"></i>  Account Opening</p>
                    <p><a href=''>Getting started</a></p>
                    <p><a href=''>Online</a></p>
                    <p><a href=''>Offline</a></p>
                    <p><a href=''>Charges</a></p>
                    <p><a href=''>Company, Partnership and HUF</a></p>
                    <p><a href=''>Non Resident Indian (NRI)</a></p>
                </div>
                <div className='col-4'>
                    <p className='fs-4 mb-2'><i class="fa-solid fa-user fs-4"></i>  Your Zerodha Account</p>
                    <p><a href=''>Login credentials</a></p>
                    <p><a href=''>Your Profile</a></p>
                    <p><a href=''>Account modification and segment addition</a></p>
                    <p><a href=''>CMR & DP ID</a></p>
                    <p><a href=''>Nomination</a></p>
                    <p><a href=''>Transfer and conversion of shares</a></p>
                </div>
                <div className='col-4'>
                    <p className='fs-4 mb-2'><i class="fa-solid fa-arrow-trend-up"></i>  Trading and Markets</p>
                    <p><a href=''>Trading FAQs</a></p>
                    <p><a href=''>Kite</a></p>
                    <p><a href=''>Margins</a></p>
                    <p><a href=''>Product and order types</a></p>
                    <p><a href=''>Corporate actions</a></p>
                    <p><a href=''>Kite features</a></p>
                </div>
            </div>
            <div className='row p-5'>
                <div className='col-4'>
                    <p className='fs-4 mb-2'><i class="fa-solid fa-bucket"></i>  Funds</p>
                    <p><a href=''>Fund withdrawal</a></p>
                    <p><a href=''>Adding funds</a></p>
                    <p><a href=''>Adding bank accounts</a></p>
                    <p><a href=''>eMandates</a></p>
                </div>
                <div className='col-4'>
                    <p className='fs-4 mb-2'><i class="fa-solid fa-at"></i>  Console</p>
                    <p><a href=''>IPO</a></p>
                    <p><a href=''>Portfolio</a></p>
                    <p><a href=''>Funds statement</a></p>
                    <p><a href=''>Profile</a></p>
                    <p><a href=''>Reports</a></p>
                    <p><a href=''>Referral program</a></p>
                </div>
                <div className='col-4'>
                    <p className='fs-4 mb-2'><i class="fa-solid fa-coins"></i>  Coin</p>
                    <p><a href=''>Understanding mutual funds and Coin</a></p>
                    <p><a href=''>Coin app</a></p>
                    <p><a href=''>Coin web</a></p>
                    <p><a href=''>Transactions and reports</a></p>
                    <p><a href=''>National Pension Scheme (NPS)</a></p>
                </div>
            </div>
        </div>
     );
}

export default CreateTicket;