import React from 'react'
import ProductItem from './ProductItem'

function OrderList(props) {
  const { productsInOrder, setProductsInOrder } = props

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
              商品項目
            </div>
          </div>
        </div>
        {productsInOrder.map((product, i) => {
          const { id, name, categroy, image, price, count } = product

          return (
            <ProductItem
              key={id}
              id={id}
              name={name}
              categroy={categroy}
              price={price}
              image={image}
              count={count}
              setCount={(newCount) => {
                // 1. 從目前的狀態"拷貝"出一個新的變數值(陣列/物件)
                const newProductsInOrder = productsInOrder.map((v) => {
                  return { ...v }
                })

                // 2. 在拷貝出來的新變數(or常數)值(陣列/物件)上作處理
                newProductsInOrder[i].count = newCount < 1 ? 1 : newCount

                // 3. 設定回原本的狀態中
                setProductsInOrder(newProductsInOrder)
              }}
            />
          )
        })}

        <div className="back-to-shop">
          <a href="#/">←</a>
          <span className="text-muted">回到商品頁</span>
        </div>
      </div>
    </>
  )
}

export default OrderList
