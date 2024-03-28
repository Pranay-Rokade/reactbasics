// import React, { useState } from 'react'

// function HeadCounter1(){
//     const [count, setCount] = useState(0)
//         return (
//           <div>
//             <button onClick={() => setCount(count+1)}>
//                 Count {count}
//             </button>
//             <button onClick={() => setCount(0)}>
//                 Reset
//             </button>
//           </div>
//         )
// }

// export default HeadCounter1

import React, { useState } from 'react';

function HeadCounter1() {
  const [count, setCount] = useState(0);

  const incrementCount = () => setCount(count + 1);
  const inCount = () => {
    let newCount = count;
    for (let i = 0; i < 5; i++) {
      setCount((prev) => prev+1)
    }
  };
  const decrementCount = () => setCount(count - 1);
  const resetCount = () => setCount(0);

  return (
    <div>
      <span>Count {count}</span>

      <button onClick={incrementCount}>
        Increment
      </button>

      <button onClick={inCount}>
        Increment by 5
      </button>

      <button onClick={decrementCount}>
        Decrement
      </button>

      <button onClick={resetCount}>
        Reset
      </button>
    </div>
  );
}

export default HeadCounter1;