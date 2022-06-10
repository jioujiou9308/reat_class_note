//下拉式選單的練習


import React from 'react'
import { useState } from 'react'

const Homework41 = () => {
//這裡對應的index 0對應0   1對應1
const counties=['台北市', '桃園市']
const townships = [['中正區', '大同區', '中山區'], 
['中壢區', '平鎮區', '龍潭區']
]

//紀錄陣列被選重的索引值，預設值為-1 相等於"請選擇"
//countries與 townships 的索引值為相互匹配
//例如countries 選重"台北市"時，索引值為0，此時下個下單選單的值為 townships[0]

const [country,setCountry] = useState('')
const [township, setTownship] = useState('')

  return (
    <>
        <h1>郵遞區號連動下拉表單</h1>
        <select
        value={country}
        onChange={(e)=>{
            setCountry(e.target.value)
            //區域下拉要跳回選擇
            setTownship('')
        }}>
        <option value="-1">請選擇縣市</option>
        {counties.map((v,i)=>{
            return <option key={i} value={v}>{v}</option>
        })}
        </select>
{/* -------------------------------------------------------- */}
        <select
        value={township}
        onChange={(e)=>{
            setTownship(e.target.value)
        }}>
        <option value="-1">請選擇區域</option>
        {/* 
        紀錄陣列被選重的索引值，預設值為-1 相等於"請選擇"
        countries與 townships 的索引值為相互匹配
        例如countries 選重"台北市"時，索引值為0，此時下個下單選單的值為 townships[0] */}
        {country !==''  &&
          townships[counties.indexOf(country)].map((v, i) => {
            return <option key={i} value={v}>{v}</option>
          })}
        </select>
    </>
  )
}

export default Homework41