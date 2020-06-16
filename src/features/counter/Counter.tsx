import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Counter.module.css';
import { RootState } from '..';
import { Decrement, Increment, InitAsync } from './actions';

export function Counter() {
  const dispatch = useDispatch();
  const count = useSelector<RootState, number>(state => state.counter.count);

  useEffect(() => {
    dispatch(InitAsync.request());
  }, [dispatch]);

  const [incrementAmount, setIncrementAmount] = useState('2');
  const amount = parseInt(incrementAmount, 10);

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(Increment(amount))}
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(Decrement(amount))}
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
      </div>
    </div>
  );
}
