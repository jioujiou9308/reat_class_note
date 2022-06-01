import React, { useState } from 'react';

const MultipleInput = () => {
     const [userData, setUserData] = useState({
          fullName: '',
          phone: '',
     });
     //這是表單元素裡的固定寫法(handleChange)
     const handleChange = (e) => {
          //為啥要看這三個東西呢
          //這三個指的是下面元素表單裡面的值
          console.log(e.target.type, e.target.name, e.target.value);
          //這裡代表了後面的值會覆蓋、更新前面的數值
          //ex  const oa = {x:1, y:2}
          //  const ob ={...oa, y:789}
          // ob = {x:1, y:789}
          //狀態是一個物件的時候很常看到
          const newUserData = { ...userData, [e.target.name]: e.target.value };
          setUserData(newUserData);
          //可精簡成
          // setUserData({ ...userData, [e.target.name]: e.target.value });
     };

     return (
          <>
               <div>
                    {/* 表單元素最好都要有name */}
                    <label>姓名</label>
                    <input
                         type="text"
                         name="fullName"
                         value={userData.fullName}
                         onChange={handleChange}
                    />
               </div>
               <div>
                    <label>電話</label>
                    <input
                         type="text"
                         name="phone"
                         value={userData.phone}
                         onChange={handleChange}
                    />
               </div>
          </>
     );
};

export default MultipleInput;
