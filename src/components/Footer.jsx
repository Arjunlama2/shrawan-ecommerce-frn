// import React, { useReducer } from 'react'
// const reducer = (state, action) => {
//   console.log("Reducer called", state, action);
//   console.log("Reducer called",action.type);

//   return action.type === "increment" ? { count: state.count + 1 } : { count: state.count - 1 }
// }

function Footer() {


  // const [state, dispatch] = useReducer(reducer, { count: 0 })


  return (
    <div>Footer
      {/* 

{
    <p className='text-center'>Count: {state.count}</p>
} */}
      {/* <button className='primary-btn' onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button className='secondary-btn' onClick={() => dispatch({ type: "decrement" })}>Decrement</button> */}
    </div>
  )
}

export default Footer