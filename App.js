import React, { useState } from 'react';
function App(props) {
  const { title } = props;
  const [count, setCount] = useState(1);
  return (
    <div>
      <div>{title}</div>
      <div>{count}</div>
      <div>
        <button onClick={() => setCount(count + 1)}>累加</button>
      </div>
    </div>
  );
}

export default <App title="hello world 112"></App>;
