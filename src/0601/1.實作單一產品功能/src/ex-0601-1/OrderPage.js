import './OrderPage.css';
import OrderList from './components/OrderList/OrderList';
import Summary from './components/Summary';
import { useState } from 'react';

const products = [
  {
    id: 1,
    name: '咖啡色 T-shirt',
    categroy: 'Shirt',
    image: 'https://i.imgur.com/1GrakTl.jpg',
    price: 300,
  },
  {
    id: 2,
    name: '黑色 T-shirt',
    categroy: 'Shirt',
    image: 'https://i.imgur.com/1GrakTl.jpg',
    price: 400,
  },
];

const initState = (productArray) => {
  const state = [];

  for (let i = 0; i < productArray.length; i++) {
    state.push(1);
  }

  return state;
};

function OrderPage() {
  const [counts, setCounts] = useState(initState(products));
  //const [count, setCount] = useState(1)

  const totalNumber = () => {
    let result = 0;

    for (let i = 0; i < counts.length; i++) {
      result = counts[i] + 1;
    }
    return result;
  };

  const totalPrice = () => {
    let result = 0;

    for (let i = 0; i < counts.length; i++) {
      result = counts[i] * products[i].price;
    }
    return result;
  };

  return (
    <div className="card">
      <div className="row">
        <OrderList setCounts={setCounts} counts={counts} products={products} />
        <Summary totalNumber={totalNumber()} totalPrice={totalPrice()} />
      </div>
    </div>
  );
}

export default OrderPage;
