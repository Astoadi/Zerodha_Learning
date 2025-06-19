import React from "react";

function Universe() {
    
  return (
    <div className="container">
      <div className="text-center">
        <p className="fs-4 mb-5 p-5">
          Want to know more about our technology stack? Check out the{" "}
          <a href="">Zerodha.tech</a> blog.
        </p>
        <h1>The Zerodha Universe</h1>
        <p className="fs-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="row p-3 mt-5">
          <div className="col-4">
            <img src="media/images/smallcaseLogo.png" style={{width:"55%"}} />
            <p className="fs-6 text-muted mt-3">
              Thematic investment platform
            </p>
          </div>
          <div className="col-4">
            <img src="media/images/streakLogo.png" style={{width:"55%"}} />
            <p className="fs-6 mt-3 text-muted">Algo & strategy platform</p>
          </div>
          <div className="col-4">
            <img src="media/images/sensibullLogo.svg" style={{width:"55%"}} />
            <p className="fs-6 mt-3 text-muted">Options trading platform</p>
          </div>
        </div>
        <div className="row p-3">
          <div className="col-4">
            <img src="media/images/zerodhaFundhouse.png" style={{width:"55%"}} />
            <p className="fs-6 mt-3 text-muted">Asset management</p>
          </div>
          <div className="col-4">
            <img src="media/images/goldenpiLogo.png" style={{width:"55%"}} />
            <p className="fs-6 mt-3 text-muted">Bonds trading platform</p>
          </div>
          <div className="col-4">
            <img src="media/images/dittoLogo.png" style={{width:"55%"}} />
            <p className="fs-6 mt-3 text-muted">Insurance</p>
          </div>
        </div>
        <button className="btn btn-primary fs-5" style={{padding:"1rem 4rem 1rem 4rem"}}>Sign up now</button>
      </div>
    </div>
  );
}

export default Universe;
