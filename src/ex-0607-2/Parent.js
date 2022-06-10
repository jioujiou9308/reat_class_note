import { useState } from 'react';
import Child from './Child';

function Parent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Parent</h1>
      <button onClick={() => setCount(count + 1)}>+1(parent)</button>
      <button onClick={() => setCount(1)}>=1(parent)</button>
      <hr />
      <Child count={count} />
    </>
  );
}

export default Parent;
