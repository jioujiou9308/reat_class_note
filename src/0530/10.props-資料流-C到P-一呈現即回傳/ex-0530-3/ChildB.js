import { useEffect, useState } from 'react';

function ChildB(props) {
  const [childBData, setChildBData] = useState('child B data');

  // ChildB一旦呈現在真實DOM中就執行callback
  useEffect(() => {
    props.setDataFromChildB(childBData);
  }, []);

  return (
    <>
      <h1>ChildB</h1>
      {/* <button
        onClick={() => {
          //觸發callback回送內部的狀態值
          props.setDataFromChildB(childBData)
        }}
      >
        送資料給Parent
      </button> */}
    </>
  );
}

export default ChildB;
