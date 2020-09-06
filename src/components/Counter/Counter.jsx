import React, { useState, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';

// function Counter(props) {
//   const { step } = props;
//   const [count, setCount] = useState(0);

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'inc':
      return { count: state.count + 1 };
    case 'dec':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter(props) {
  //   useEffect(() => {
  //     const handlerClick = () => {
  //       reducer((prevCountValue) => prevCountValue + 1);
  //     };
  //     document.body.addEventListener('dblclick', handlerClick);
  //     return () => {
  //       document.body.removeEventListener('dblclick', handlerClick);
  //     };
  //   });

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'inc' })}> + </button>
      <button onClick={() => dispatch({ type: 'dec' })}> - </button>
    </div>
  );
}

//   const funIncrement = () => {
//     setCount(count + step);
//   };

//   const funDecrement = () => {
//     setCount(count - step);
//   };

// useEffect(() => {
//     const handlerClick = () => {
//         setCount((prevCountValue) => prevCountValue + step);
//     };
//     document.body.addEventListener('dblclick', handlerClick);
//     return () => {
//         document.body.removeEventListener('dblclick', handlerClick);
//     };
// }, [step]);

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={funIncrement}> + </button>
//       <button onClick={funDecrement}> - </button>
//     </div>
//   );
// }

Counter.propTypes = {
  step: PropTypes.number,
};

Counter.defaultProps = {
  step: 1,
};

export default Counter;
