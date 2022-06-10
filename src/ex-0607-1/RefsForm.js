import React from 'react';
import { useRef } from 'react';

const RefsForm = () => {
  const inputE1 = useRef(null);

  //refs所做出的元件是可以重複使用的
  return (
    <>
      <h1>使用refs的表單元素</h1>
      <input type="text" ref={inputE1} />
      <button
        onClick={() => {
          inputE1.current.focus();
        }}
      >
        Focus(聚焦)
      </button>
      <button
        onClick={() => {
          inputE1.current.blur();
        }}
      >
        Focus(聚焦)
      </button>
      <button
        onClick={() => {
          const inputValue = inputE1.current.value;
          console.log(inputValue);
        }}
      >
        獲得輸入的直
      </button>
    </>
  );
};

export default RefsForm;
