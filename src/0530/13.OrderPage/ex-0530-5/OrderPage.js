import './OrderPage.css';
import OrderList from './components/OrderList';
import Summary from './components/Summary';
import { useState } from 'react';

function OrderPage() {
  const [counter, setCounter] = useState({ a: 0, b: 0 });
  const item = { inner: 'item' };
  return (
    <div className="card">
      <div className="row">
        {/* <OrderList counter={counter} setCounter={setCounter} /> */}
        <OrderList {...{ setCounter, counter }} />
        <Summary counter={counter} />
      </div>
    </div>
  );
}

export default OrderPage;
