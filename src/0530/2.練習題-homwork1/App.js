import { useState } from 'react';
import './App.css';

function App() {
  //代表選中的選單項目
  const [selectedItem, setSelectedItem] = useState('');

  // 所有選單項目，先組成陣列
  const menuItems = ['首頁', '關於我們', '產品'];

  return (
    <>
      <ul>
        {/* 用mpa跑出陣列中所有的值 */}
        {menuItems.map((v, i) => {
          return (
            <li
              key={i}
              onClick={() => {
                setSelectedItem(v);
              }}
            >
              <a href="/" className={v === selectedItem ? 'active' : ''}>
                {v}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
