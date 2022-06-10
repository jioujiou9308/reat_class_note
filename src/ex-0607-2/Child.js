import { useState } from 'react';

function Child(props) {
  //const [total, setTotal] = useState(0)

  return (
    <>
      {console.log('render')}
      <h1>Child</h1>
      <div>來自Parent: {props.count} </div>
      <hr />
      {/* <div>{total}</div>
      <button onClick={() => setTotal(total + 1)}>+1</button>
      <button onClick={() => setTotal(1)}>=1</button> */}
    </>
  );
}

export default Child;
