import './OrderPage.css';
import OrderList from './components/OrderList';
import Summary from './components/Summary';
import { useState } from 'react';

function OrderPage() {
  const [counter, setCounter] = useState({ a: 0, b: 0 });
  return (
    <div className="card">
      <div className="row">
        <OrderList counterKey={counter} setCounterKey={setCounter} />
        <Summary counter={counter} />
      </div>
    </div>
  );
}

export default OrderPage;
