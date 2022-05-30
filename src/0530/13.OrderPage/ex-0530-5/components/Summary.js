import React from 'react';

function Summary(props) {
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
          <div className="col col-style">共 {props.counter.a} 項目</div>
        </div>
        <div className="row row-style">
          <div className="col">總價</div>
          <div className="col text-right">${props.counter.a * 300}</div>
        </div>
        <button className="btn">前往付款</button>
      </div>
    </>
  );
}

export default Summary;
