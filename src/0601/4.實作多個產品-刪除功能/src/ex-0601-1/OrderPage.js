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

// 擴充原本的product屬性，多一個記錄數量屬性(count)
// map語法
const initState = (productArray) => {
  return productArray.map((v) => ({ ...v, count: 1 }))
}
// for迴圈
// const initState = (productArray) => {
//   const state = []

//   for (let i = 0; i < productArray.length; i++) {
//     state.push({ ...productArray[i], count: 1 })
//   }

//   return state
// }

function OrderPage() {
  //ex.
  //[
  //  {
  //   id: 1,
  //   name: '咖啡色 T-shirt',
  //   categroy: 'Shirt',
  //   image: 'https://i.imgur.com/1GrakTl.jpg',
  //   price: 300,
  //   count: 1
  //   }
  // ]
  const [productsInOrder, setProductsInOrder] = useState(initState(products))

  const totalNumber = () => {
    let result = 0

    for (let i = 0; i < productsInOrder.length; i++) {
      result += productsInOrder[i].count
    }

    return result
  }

  const totalPrice = () => {
    let result = 0

    for (let i = 0; i < productsInOrder.length; i++) {
      result += productsInOrder[i].count * productsInOrder[i].price
    }

    return result
  }

  return (
    <div className="card">
      <div className="row">
        <OrderList
          productsInOrder={productsInOrder}
          setProductsInOrder={setProductsInOrder}
        />
        <Summary totalNumber={totalNumber()} totalPrice={totalPrice()} />
      </div>
    </div>
  )
}

export default OrderPage
