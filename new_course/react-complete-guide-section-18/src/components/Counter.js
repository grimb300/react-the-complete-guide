/**
 * Functional based components
 */

import { useSelector, useDispatch } from "react-redux";

import { counterActions } from "../store/counter-slice";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const incHandler = () => {
    // dispatch({ type: "increment" });
    dispatch(counterActions.increment());
  };
  const incByFiveHandler = () => {
    // dispatch({ type: "incrementBy", amount: 5 });
    dispatch(counterActions.incrementBy(5));
  };
  const decHandler = () => {
    // dispatch({ type: "decrement");
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    // dispatch({ type: "toggle"()");
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incHandler}>Increment</button>
        <button onClick={incByFiveHandler}>Increment by 5</button>
        <button onClick={decHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

/**
 * Class based components
 */
// import { Component } from "react";
// import { connect } from "react-redux";

// import classes from "./Counter.module.css";

// class Counter extends Component {
//   incHandler() {
//     this.props.increment();
//   }

//   decHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incHandler.bind(this)}>Increment</button>
//           <button onClick={this.decHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return { counter: state.counter };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "increment" }),
//     decrement: () => dispatch({ type: "decrement" }),
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
