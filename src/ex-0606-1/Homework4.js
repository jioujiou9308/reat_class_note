import React from 'react'
import { useState } from 'react'

const Homework4 = () => {
  const [height, setHeight] = useState(0)
  const [weight, setWeight] = useState(0)
  const [bmi, setBmi] = useState(0)

  

    return(
      <div >
      
        <input 
        type="number" 
        name="myHeight" 
        value={height} 
        //注意 e.target.value 為字串類型
        //所以要加上number轉換成數字
        onChange={(e)=>{
          setHeight(Number(e.target.value))
        }} />身高
        <br />
        <input 
        type="number"
        name="myWeight"
        value={weight}
        //注意 e.target.value 為字串類型
        //所以要加上number轉換成數字
        onChange={(e)=>{
          setWeight(Number(e.target.value))
        }} />體重
        <br />

        <button onClick={()=>{
          const myBmi = weight/ (Math.pow(height/100, 2))
          setBmi(myBmi)
        }}>計算</button>
        <button onClick={()=>{ 
           setHeight(0)
           setWeight(0)
           setBmi(0)
        }}>清除</button>

        {/* toFix()小數點後第幾位 */}
        <p>地的BMI值為:{bmi > 0 ? bmi.toFixed(1) : ''}</p>
    </div>
    )
    
  
}

export default Homework4