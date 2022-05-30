import React from 'react';

function OrderList(props) {
  const { counterKey, setCounterKey } = props;
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
              3種商品項目
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
                  if (counterKey.a < 1) return;
                  const { a } = counterKey;
                  setCounterKey({ ...counterKey, a: a - 1 });
                }}
              >
                -
              </a>
              <a href="#/" className="border">
                {counterKey.a}
              </a>
              <a
                href="#/"
                onClick={() => {
                  const { a } = counterKey;
                  setCounterKey({ ...counterKey, a: a + 1 });
                  //{ item: counter.item + 1 }
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
                  if (counterKey < 1) return;
                  setCounterKey({ a: counterKey.a, b: counterKey.b - 1 });
                }}
              >
                -
              </a>
              <a href="#/" className="border">
                {counterKey.b}
              </a>
              <a
                href="#/"
                onClick={() => {
                  setCounterKey({ a: counterKey.a, b: counterKey.b + 1 });
                  //{ item: counter.item + 1 }
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
