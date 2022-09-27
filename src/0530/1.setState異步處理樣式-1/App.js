import { useState } from 'react';

function App() {
  const [total, setTotal] = useState(0);
  return (
    <>
      <h1>{total}</h1>
      <button
        onClick={() => {
          setTotal(prev + 1);
        }}
      >
        點擊+1
      </button>
    </>
  );
}

export default App;
