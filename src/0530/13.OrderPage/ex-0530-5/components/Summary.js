import React from 'react';

function Summary({ counter: { a, b } }) {
  //第三種寫法
  // const counter = props.counter.a;
  // const counterB = props.counter.b;

  // const { a, b } = counter; 解構成這樣

  return (
    <>
      <div className="col-md-4 summary">
        <div>
          <h5>
            <b>付款摘要</b>
          </h5>
        </div>
        <hr />
        <div className="row">
          <div className="col col-style">共 {a + b} 項目</div>
        </div>
        <div className="row row-style">
          <div className="col">總價</div>
          <div className="col text-right">${a * 300 + b * 300}</div>
        </div>
        <button className="btn">前往付款</button>
      </div>
    </>
  );
}

export default Summary;
