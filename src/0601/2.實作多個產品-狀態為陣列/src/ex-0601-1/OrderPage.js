import './OrderPage.css'
import OrderList from './components/OrderList/OrderList'
import Summary from './components/Summary'
import { useState } from 'react'

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
    price: 500,
  },
]

// 傳入products陣列，回傳 [1,1....]
const initState = (productArray) => {
  const state = []

  for (let i = 0; i < productArray.length; i++) {
    state.push(1)
  }

  return state
}

// 與上述函式同功能
//const initState = (productArray) => Array(productArray.length).fill(1)

function OrderPage() {
  //ex. [1,1] 代表 [產品1數量, 產品2數量]
  const [counts, setCounts] = useState(initState(products))

  const totalNumber = () => {
    let result = 0

    for (let i = 0; i < counts.length; i++) {
      result += counts[i]
    }

    return result
  }

  const totalPrice = () => {
    let result = 0

    for (let i = 0; i < counts.length; i++) {
      result += counts[i] * products[i].price
    }

    return result
  }

  return (
    <div className="card">
      <div className="row">
        <OrderList setCounts={setCounts} counts={counts} products={products} />
        <Summary totalNumber={totalNumber()} totalPrice={totalPrice()} />
      </div>
    </div>
  )
}

export default OrderPage
