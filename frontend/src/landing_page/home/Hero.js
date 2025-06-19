import React from "react";
function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="Hero Image"
          className="mb-5"
        />
        <h1 className="mt-5">Invest in everything</h1>
        <p className="fs-5">
          Online platform to invest in stock, derivatives, mutual funds, and
          more
        </p>
        <button
          className="btn btn-primary p-3 mb-5 rounded-4"
          style={{
            width: "30%",
            textAlign: "center",
            margin: "0 auto",
            whiteSpace: "nowrap",
            fontSize: "1.2rem",
          }}
        >
          Sign up now
        </button>
      </div>
    </div>
  );
}
export default Hero;
