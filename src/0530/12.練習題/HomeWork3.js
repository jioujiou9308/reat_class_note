import React, { useState } from 'react';
//import { nanoid } from 'nanoid'

const objArray = [
  {
    id: 1,
    text: 'a',
  },
  {
    id: 2,
    text: 'b',
  },
  {
    id: 3,
    text: 'c',
  },
  {
    id: 4,
    text: 'aa',
  },
];

function Homework3() {
  const [data, setData] = useState(objArray);

  return (
    <>
      <h1>物件陣列的各種操作</h1>
      <p>呈現資料</p>
      <table border="1">
        <tbody>
          {data.map((v, i) => {
            return (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>{v.text}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <hr />
      <button
        onClick={() => {
          // 先寫出要新增的物件值
          const newObj = { id: 99, text: 'xxx' };

          // 1. 從目前的狀態拷貝出一個新的變數值(陣列/物件)
          // 2. 在新的變數值(陣列/物件)上作處理
          // 3. 設定回原本的狀態中

          //1 //2
          const newData = [newObj, ...data];

          //3
          setData(newData);
        }}
      >
        陣列最前面新增一個物件值id為99與文字為xxx的物件
      </button>
      <br />
      <button
        onClick={() => {
          const newObj = { id: 88, text: 'yyy' };

          //1 //2
          const newData = [...data, newObj];

          //3
          setData(newData);
        }}
      >
        陣列最後面新增一個物件值id為88與文字為yyy的物件
      </button>
      <br />
      <button
        onClick={() => {
          const newData = data.filter((v, i) => v.text.includes('a'));

          setData(newData);
        }}
      >
        尋找(過濾)只呈現所有文字有a字母的
      </button>
      <br />
      <button
        onClick={() => {
          const newData = data.filter((v, i) => v.text !== 'b');

          setData(newData);
        }}
      >
        刪除文字為b的物件
      </button>
      <br />
      <button
        onClick={() => {
          const newData = data.filter((v, i) => v.id !== 99);

          setData(newData);
        }}
      >
        刪除id為99的物件
      </button>
      <br />
      <button
        onClick={() => {
          const newObj = { id: 5, text: 'bbb' };

          // 尋找id=2的物件的索引值為何
          const index = data.findIndex((v, i) => v.id === 2);
          console.log(index);

          // 有找到時(index !== -1)，要插入新物件在它後面
          if (index > -1) {
            // 先切割分為兩子陣列
            const aArray = data.slice(0, index + 1);
            const bArray = data.slice(index + 1);

            // 合併，把要插入的物件放入
            const newData = [...aArray, newObj, ...bArray];

            // 設定回原狀態
            setData(newData);
          }
        }}
      >
        在id為2後面插入id為5與文字為bbb的物件
      </button>
      <br />
      <button
        onClick={() => {
          // 尋找id=3的物件的索引值為何
          const index = data.findIndex((v, i) => v.id === 3);

          // 有找到時(index !== -1)
          if (index > -1) {
            // 1. 從目前的狀態拷貝出一個新的變數值(陣列/物件)
            // 注意要深拷貝(deep clone)
            const newData = data.map((v) => {
              return v;
            });
            console.log(newData);

            // 另一種方式
            //const newData = JSON.parse(JSON.stringify(data))

            // 2. 在新的變數值(陣列/物件)上作處理
            newData[index].text = 'cccc';
            // 3. 設定回原本的狀態中
            setData(newData);
          }
        }}
      >
        取代id為3的文字為cccc
      </button>
      <br />
      <button
        onClick={() => {
          // 先寫出要新增的物件值
          // 方法1.用外部的函式庫nanoid產生id
          // const newObj = { id: nanoid(), text: 'xxx' }

          // 方法2. 從所有的id值中找出最大值，然後遞增
          // (註:只有id為數字才能這樣作)
          const ids = data.map((v) => v.id);
          // 找出id中的最大值增加 1 ，作為新的id值
          const newId = Math.max(...ids) + 1;
          const newObj = { id: newId, text: 'xxx' };

          //1 //2
          const newData = [newObj, ...data];

          //3
          setData(newData);
        }}
      >
        陣列最前面新增一個物件值id不重覆與文字為xxx的物件
      </button>
      <br />
      <button
        onClick={() => {
          // 方法2. 拉出所有的id值
          const ids = data.map((v) => v.id);
          // 利用所有id裡數字最大值增加1來產生新的id值
          const newId = Math.max(...ids) + 1;
          const newObj = { id: newId, text: 'yyy' };

          //1 //2
          const newData = [...data, newObj];

          //3
          setData(newData);
        }}
      >
        陣列最後面新增一個物件值id不重覆與文字為yyy的物件
      </button>
    </>
  );
}

export default Homework3;
