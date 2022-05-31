import React from 'react';

function OrderList(props) {
  // const counter = props.counter.a;
  // const counterB = props.counter.b;
  const { a } = props.counter;
  const { b } = props.counter;

  const setCounter = props.setCounter;
  // const { counterKey, setCounterKey } = props;
  // console.log(counter);
  // let con = {item:1};
  // con = con.item+1
  // con = {item:con.item+1}

  return (
    <>
      <div className="col-md-8 cart">
        <div className="title">
          <div className="row">
            <div className="col">
              <h4>
                <b>訂購單</b>
              </h4>
            </div>
            <div className="col align-self-center text-right text-muted">
              3種商品項目 cpunter:{a}
            </div>
          </div>
        </div>
        <div className="row border-top border-bottom">
          <div className="row main align-items-center">
            <div className="col-2">
              <img
                alt=""
                className="img-fluid"
                src="https://i.imgur.com/1GrakTl.jpg"
              />
            </div>
            <div className="col">
              <div className="row text-muted">Shirt</div>
              <div className="row">咖啡色 T-shirt</div>
            </div>
            <div className="col">
              <a
                href="#/"
                onClick={() => {
                  if (a > 0) {
                    setCounter({ a: a - 1, b });
                  }
                }}
              >
                -
              </a>
              <a href="#/" className="border">
                {a}
              </a>
              <a
                href="#/"
                onClick={() => {
                  setCounter({ a: a + 1, b });
                  //整個物件裡面全部改變
                }}
              >
                +
              </a>
            </div>
            <div className="col">
              $300 <span className="close">&#10005;</span>
            </div>
          </div>
        </div>
        <div className="row border-top border-bottom">
          <div className="row main align-items-center">
            <div className="col-2">
              <img
                alt=""
                className="img-fluid"
                src="https://i.imgur.com/1GrakTl.jpg"
              />
            </div>
            <div className="col">
              <div className="row text-muted">Shirt</div>
              <div className="row">咖啡色 T-shirt</div>
            </div>
            <div className="col">
              <a
                href="#/"
                onClick={() => {
                  if (b > 0) {
                    setCounter({ a, b: b - 1 });
                  }
                }}
              >
                -
              </a>
              <a href="#/" className="border">
                {b}
              </a>
              <a
                href="#/"
                onClick={() => {
                  setCounter({ a, b: b + 1 });
                  //整個物件裡面全部改變
                }}
              >
                +
              </a>
            </div>
            <div className="col">
              $300 <span className="close">&#10005;</span>
            </div>
          </div>
        </div>
        <div className="back-to-shop">
          <a href="#/">←</a>
          <span className="text-muted">回到商品頁</span>
        </div>
      </div>
    </>
  );
}

export default OrderList;
