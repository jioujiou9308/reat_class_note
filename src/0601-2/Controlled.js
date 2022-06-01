import React from 'react';
import { useState } from 'react';

function Controlled() {
     const [inputText, setInputText] = useState('');
     const [textArea, setTextArea] = useState('');

     //radio single
     const [isChecked, setIsChecked] = useState(false);
     //radio group
     const [gender, setGender] = useState('');
     //比較好的做法是，先把選項寫出來，不然已經一職在復職一樣的程式碼
     const genderOption = ['男', '女', '不提供'];
     //select
     const [selectedValue, setSelectedValue] = useState('');
     const carOptions = ['vovle', 'benze', 'bmw'];
     //checkbox single
     const [agree, setAgree] = useState(false);
     //checkbox group
     const [likeList, setLikeList] = useState([]);
     //簡化寫法
     const fruitOption = ['西瓜', '芒果', '芭樂'];

     return (
          <>
               <section id="input-text">
                    <h1>文字輸入框</h1>
                    <input
                         type="text"
                         value={inputText}
                         onChange={(e) => {
                              setInputText(e.target.value);
                         }}
                    />
               </section>
               {/* --------------------- */}
               <section id="textarea">
                    <h1>文字輸入區域</h1>
                    <textarea
                         value={textArea}
                         onChange={(e) => {
                              setTextArea(e.target.value);
                         }}
                    />
               </section>
               {/* -------------------------- */}
               <section id="radio">
                    <h1>選項按鈕</h1>
                    <input
                         type="radio"
                         checked={isChecked}
                         onChange={(e) => {
                              setIsChecked(e.target.checked);
                         }}
                         onClick={() => {
                              setIsChecked(!isChecked);
                         }}
                    />
               </section>
               {/* ------------------------------------ */}
               <section id="radio-group">
                    <h1>選項按鈕(群組)</h1>
                    {genderOption.map((v, i) => {
                         return (
                              <div key={i}>
                                   <input
                                        type="radio"
                                        value={v}
                                        checked={gender === v}
                                        onChange={(e) => {
                                             setGender(e.target.value);
                                        }}
                                   />
                                   <label>{v}</label>
                              </div>
                         );
                    })}

                    {/* <input
                         type="radio"
                         value="女"
                         checked={gender === '女'}
                         onChange={(e) => {
                              setGender(e.target.value);
                         }}
                    />
                    <label>女森</label>
                    <input
                         type="radio"
                         value="不提供"
                         checked={gender === '不提供'}
                         onChange={(e) => {
                              setGender(e.target.value);
                         }}
                    />
                    <label>不公開</label> */}
               </section>
               {/* ----------------------------------- */}
               <section id="select">
                    <h1>下拉清單</h1>
                    <label>車子品牌</label>
                    <select
                         value={selectedValue}
                         onChange={(e) => {
                              setSelectedValue(e.target.value);
                         }}
                    >
                         <option value="">請選擇</option>
                         {carOptions.map((v, i) => {
                              return (
                                   <option id={i} value={v}>
                                        {v}
                                   </option>
                              );
                         })}
                    </select>
               </section>
               {/* --------------------------------- */}
               <section id="checkbox-single">
                    <h1>核取方塊</h1>
                    <input
                         type="checkbox"
                         checked={agree}
                         onChange={(e) => {
                              setAgree(e.target.checked);
                         }}
                    />
                    <label>同意新會員註冊條款</label>
               </section>
               <section id="checkbox-group">
                    <h1>核取方塊(群組)</h1>
                    {fruitOption.map((v, i) => {
                         return (
                              <div key={i}>
                                   <input
                                        type="checkbox"
                                        value={v}
                                        checked={likeList.includes(v)}
                                        // 陣列中是否有包含西瓜的字串
                                        onChange={(e) => {
                                             //1.先判斷目前的值是否有在陣列中

                                             if (likeList.includes(e.target.value)) {
                                                  //if     有 ->從陣列中移除
                                                  const newLikeList = likeList.filter((v, i) => {
                                                       return v !== e.target.value;
                                                  });
                                                  //最後都要設定回狀態陣列中
                                                  setLikeList(newLikeList);
                                             } else {
                                                  //else 沒有 ->加入陣列中
                                                  const newLikeList = [...likeList, e.target.value];
                                                  //最後都要設定回狀態陣列中
                                                  setLikeList(newLikeList);
                                             }
                                        }}
                                   />
                                   <label>{v}</label>
                              </div>
                         );
                    })}

                    {/* <input
                         type="checkbox"
                         value="芒果"
                         // 陣列中是否有包含芒果的字串
                         checked={likeList.includes('芒果')}
                    />
                    <label>芒果</label> */}
               </section>
          </>
     );
}

export default Controlled;
