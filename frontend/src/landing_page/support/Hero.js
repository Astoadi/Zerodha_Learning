import React from 'react';
function Hero() {
    return ( 
        <section className='container-fluid' style={{backgroundColor:"#387ED1",color:"#fff"}}>
            <div className=' p-5 mt-5' style={{display:"flex",justifyContent:"space-between",margin:"0rem 2rem"}}>
                <h3>Support Portal</h3>
                <a href='' style={{color:"#fff"}} className='text-decoration-underline'>Track Tickets</a>
            </div>
            <div className='row mb-5 p-5' style={{padding:"0rem 5rem"}}>
                <div className='col-6'>
                    <h4>
                        Search for an answer or browse help topics to create a ticket
                    </h4>
                    <input placeholder='Eg: how do i activate F&O, why is my order getting rejected..' style={{width:"30rem",padding:"1rem",marginBottom:"1rem",border:"solid 0px transparent",borderRadius:"0.25rem"}}/><br/>
                    <a style={{color:"#fff",fontSize:"1.2rem"}} href=''>Track account opening</a>
                    <a href='' style={{color:"#fff",fontSize:"1.2rem"}} className='mx-3'>Track segment activation</a>
                    <a href='' style={{color:"#fff",fontSize:"1.2rem"}} className='mx-3'>Intraday margins</a>
                    <a href='' style={{color:"#fff",fontSize:"1.2rem"}} className='mx-3'>Kite user manual</a>
                </div>
                <div className='col-1'></div>
                <div className='col-5'>
                    <h4>Featured</h4>
                    <ol type='1'>
                        <li><a href='' style={{color:"#fff",fontSize:"1.2rem"}}>Current Takeovers and Delisting - January 2024</a></li>
                        <li><a style={{color:"#fff",fontSize:"1.2rem"}} href=''>Latest Intraday leverages - MIS & CO</a></li>
                    </ol>
                </div>
            </div>
        </section>
     );
}

export default Hero;