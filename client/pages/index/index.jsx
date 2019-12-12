import React, { useState } from 'react';

import './index.css';

const App = ({ name }) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>hello {name}</h1>
      <button onClick={() => setCount(count + 1)} >click: {count}</button>
    </div>
  );
};

export default App;