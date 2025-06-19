import React from 'react';
function Stats() {
    return ( 
        <div className='container p-5'>
            <div className='row p-5'>
                <div className='col-12 p-5 col-md-6 col-sm-12'>
                    <h1 className='mb-3 fw-bolder'>Trust with confidence</h1>
                    <h3 className='fw-bold'>Customer-first always</h3>
                    <p>That's why 1.3+ crore customers trust Zerodah with &#8377;+ lakh crores worth of equity investments.</p>
                    <h3 className='fw-bold'>No spam or gimmicks</h3>
                    <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    <h3 className='fw-bold'>The Zerodha universe</h3>
                    <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h3 className='fw-bold'>Do better with money</h3>
                    <p>With initiatives like <span style={{color:"blue"}}>Nudge</span> and <span style={{color:"blue"}}>Kill Switch</span>, we don't just facilitate transactions, but actively help you do better with your money.</p>           
                </div>
                <div className='col-12 p-5 col-md-6 col-sm-12'>
                    <img src='media/images/ecoSystem.png' style={{width:"100%"}}/>
                    <div className='text-center'>
                        <a href='' className='mx-5' style={{textDecoration:"none"}}>Explore our Products <i class="fa-solid fa-arrow-right"></i></a>
                        <a href='' style={{textDecoration:"none"}}>Try Kite Demo <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;