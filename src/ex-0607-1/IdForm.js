/* eslint-disable prettier/prettier */
import React from 'react';


//idform的元件是無法重複使用的


function IdForm() {
     return (
          <>
               <h1>使用id的表單元素</h1>
               <input type="text" id="my-input" />
               <button
                    onClick={() => {
                         document.getElementById('my-input').focus();
                    }}
               >
                    Focus(聚焦)
               </button>
               <button
                    onClick={() => {
                         document.getElementById('my-input').blur();
                    }}
               >
                    Focus(聚焦)
               </button>
               <button
                    onClick={() => {
                         const inputValue = document.getElementById('my-input').value;
                         console.log(inputValue);
                    }}
               >
                    獲得輸入的直
               </button>
          </>
     );
}
export default IdForm;
