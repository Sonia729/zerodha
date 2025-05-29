import React from "react";

function Stats() {
  return (
    <div className="container p-3">
      <div className="row p-5">
        <div className="col-6 p-5">
          <h1 className="fs-2 mb-5">Trust with confidence </h1>
          <h2 className="fs-4">Customer-first approach</h2>
          <p className="text-muted"> That's why we are trusted by more than 2 million customers</p>
          <h2  className="fs-4"> No Spam Or gimmicks</h2>
          <p className="text-muted">
            We don't use any gimmicks or scams high quaility and transparency,
            the way you like.
          </p>
          <h2 className="fs-4">The Zerodha Universe</h2>
          <p className="text-muted">
            Zerodha is a one-stop solution for all your trading needs .Not just
            one app but a whole ecosystem.our investment platform is a one-stop
            solution for all your trading needs{" "}
          </p>
          <h2 className="fs-4">Do better with money</h2>
          <p className="text-muted">
            With inititative like Nudge and Kill SWitch, we don't just help you
            trade better but also help you do better with your money
          </p>
        </div>
        <div className="col-6 p-5">
          <img
            src="../assets/ecosystem.png"
            alt="stats"
            style={{ width: "90%" }}
          />
          <div className="text-center p-5"> 
            <a className="mx-5" style={{ textDecoration: "none" }} href="">Explore our Products
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            <a href="" className="mx-5" style={{ textDecoration: "none" }}>Try Kite demo
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
