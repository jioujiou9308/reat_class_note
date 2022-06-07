import { useState, useEffect } from 'react';

// const init = () => {
//   console.log('state初始化(類似constructor一部份)')
//   return 0
// }

function FCLifecycle(props) {
  const [total, setTotal] = useState(0);

  // 模擬didMount+didUpdate
  // 因初始化也算改變，所以didMount也會執行
  useEffect(() => {
    // didUpdate
    console.log('模擬didMount+模擬didUpdate');
  }, [total]);
  // 相依性陣列: 會放入 state 或 props，當state/props有改變時，執行其中程式碼

  //----------------------------------------------------------------------------

  //   // 模擬didMount
  //   useEffect(() => {
  //     // didMount
  //     console.log('模擬didMount');
  //   }, []);

  //   // 模擬willUnmount
  //   useEffect(() => {
  //     return () => {
  //       // willUnmount
  //       console.log('模擬willUnmount');
  //     };
  //   }, []);

  //   useEffect(() => {
  //     // didMount時加入事件監聽
  //     document.getElementById('my-button').addEventListener('click', function () {
  //       alert('hello');
  //     });

  //     return () => {
  //       // willUnmount時移除事件監聽
  //       document.getElementById('my-button').removeEventListener('click');
  //     };
  //   }, []);

  return (
    <>
      {console.log('render')}
      <h1>函式型元件</h1>
      <h2 onClick={() => setTotal(total + 1)}>{total}</h2>
      <button id="my-button">按我</button>
    </>
  );
}

export default FCLifecycle;
