import React from 'react';
function RightSection({imageUrl,productName,productDescription,learnMore}) {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 mt-5 p-5' style={{fontSize:"1rem"}}>
                    <h1 >{productName}</h1>
                    <p className='text-muted fs-5'>{productDescription}</p>
                    <div className='mb-3'>
                        <a href={learnMore} >Learn More <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
                <div className='col-6'>
                    <img src={imageUrl} style={{width:"100%"}}/>
                </div>
            </div>
        </div>    
    );
}

export default RightSection;