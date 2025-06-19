import React from "react";
import { Link } from "react-router-dom";
export default function Education(){
    return (
    <div className="container p-5">
        <div className="row mb-5">
            <div className="col-12 col-md-6 col-sm-12 mb-5">
                <img src="media/images/education.svg" style={{width:"70%"}}/>
            </div>
            <div className="col-12 col-md-6 col-sm-12 mb-5">
                <h2 className="fw-bold fs-2 text-nowrap mb-4">Free and open market education</h2>
                <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                <a href="" style={{textDecoration:"none"}}>Versity <i class="fa-solid fa-arrow-right"></i></a>
                <p className="mt-5">Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                <Link to={''} style={{textDecoration:"none"}}>TradingQ&A<i class="fa-solid fa-arrow-right"></i></Link>
            </div>
        </div>
    </div>        
    )
}