import React from "react";

export default function Hero() {
  return (
    <>
      <div className="container p-5 ">
        <div className="row text-center w-100">
          <img src="../assets/homeHero.png" alt="hero" className="mb-5"  />
          <h1 className="mt-5">Invest in everything</h1>
          <p>
            Online platform to invest in stocks, derivatives, mutual funds,
            ETFs, bonds, and more.
          </p>
          <button  className="btn btn-primary mb-5">
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
}
