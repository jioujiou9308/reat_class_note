import React from 'react';
// import CCLifeCycle from './CCLifeCycle';
// import FCLifecycle from './FCLifecycle';
import FCLifecycle2 from './FCLifecycle';
import { useState } from 'react';

const App = () => {
  const [isShow, setIsShow] = useState(true);

  return (
    <div>
      {isShow && <FCLifecycle2 />}
      <hr />
      <button
        onClick={() => {
          setIsShow(!isShow);
          // show = !show
        }}
      >
        {isShow ? '移除' : '呈現'}
      </button>
    </div>
  );
};

export default App;
