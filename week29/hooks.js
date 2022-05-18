import React, { useState } from "react";

// class Counter extends Component {
//     state = {
//       count: 0
//     };
//     handleClick = () => {
//       this.setState(({ count }) => ({
//         count: count + 1
//       }));
//     };
//     render() {
//       return <button onClick={this.handleClick}>{this.state.count}</button>;
//     }
//   }


  function Counter() {
    const [count, setCount] = useState(0);
 
    const handleClick = () =>
    setCount(count => count + 1);

    return (
        <button onClick={handleClick}>{count}</button>
    );
  }
  
  export default Counter;