import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../store/index';
import classes from './Counter.module.css';

const Counter = () => {

  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const showCounter = useSelector(state => state.showCounter);
  const toggleIncrementHandler = () => {
    // dispatch({ type: 'increment' });
    dispatch(counterActions.increment());
  }

  const toggleDecrementHandler = () => {
    // dispatch({ type: 'decrement' });
    dispatch(counterActions.decrement());
  }
  const toggleCounterHandler = () => {
    // dispatch({ type: 'toggle' });
    dispatch(counterActions.toggle());
  };
  const toggleIncreaseHandler = () => {
    // dispatch({ type: 'increase', amount: 10 })
    dispatch(counterActions.increase(10))
  }

  const counterContent = <Fragment>
    <div className={classes.value}>{counter}</div>
    <div>
      <button onClick={toggleIncrementHandler}>Increment</button>
      <button onClick={toggleIncreaseHandler}>Increase</button>
      <button onClick={toggleDecrementHandler}>Decrement</button>
    </div>
  </Fragment>;
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && counterContent}

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
