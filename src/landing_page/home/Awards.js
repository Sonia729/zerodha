import React from "react";

function Awards() {
  return (
    <div className="container mt-5 " style={{ marginTop: "100px" }}>
      <div className="row">
        <div className="col-6">
          <img
            src="../assets/largestBroker.svg"
            alt="award"
            className="w-100"
          />
        </div>
        <div className="col-6 mt-3 p-5">
          <h1>Largest Stock Broker in India</h1>
          <p className="mb-5">
            2+ million Zerodha Clients contribuute to over 15% of the retail
            order volume in India daily by trading and investing in stocks,
            derivatives, mutual funds, ETFs, bonds and more
          </p>
          <div className="row">
          
              <div className="col-6">
                <ul>
                <li>Futures and Options</li>
                <li>Commodity Derivatives</li>
                <li>Currency Derivatives</li>
                </ul>
              </div>
              <div className="col-6">
                <ul>
                <li>Stocks and IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds and Government bonds </li>
                </ul>
              </div>
            <img src="../assets/pressLogos.png" alt="award" className="w-100" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
