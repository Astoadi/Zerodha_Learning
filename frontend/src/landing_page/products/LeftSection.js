import React from 'react';
function LeftSection({imageUrl,productName,productDescription,tryDemo,learnMore,googlePlay,appStore}) {
    return ( 
        <div className='container mt-5'>
            <div className='row p-5'>
                <div className='col-6 p-3'>
                    <img src={imageUrl}/>
                </div>
                <div className='col-2'></div>
                <div className='col-4 mt-5 p-3' style={{fontSize:"1rem"}}>
                    <h1>{productName}</h1>
                    <p className='fs-5 text-muted'>{productDescription}</p>
                    <div className='mb-3'>
                        <a href={tryDemo}>Try demo <i class="fa-solid fa-arrow-right"></i></a>
                        <a href={learnMore} style={{marginLeft:"3rem"}}>Learn More <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <div style={{display:"flex",alignItems:"start",justifyContent:"space-between",margin:"3rem 3rem 3rem 0rem"}}>
                        <a href={googlePlay}><img src='media/images/googlePlayBadge.svg'/></a>
                        <a href={appStore}><img src='media/images/appstoreBadge.svg'/></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;