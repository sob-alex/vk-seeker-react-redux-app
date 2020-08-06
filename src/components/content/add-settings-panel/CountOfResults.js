import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeSearchDepth } from '../../../redux/actions';

const CountOfResults = () => {
  const initialCount = useSelector((state) => state.params.count);
  const [count, setCount] = useState(String(initialCount));
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const count = e.target.value;
    if (+count < 0 || +count > 1000) {
      setCount(100);
      dispatch(changeSearchDepth(100));
      return;
    }
    if (count === '') {
      setCount(count);
      dispatch(changeSearchDepth(100));
      return;
    }
    setCount(count);
    dispatch(changeSearchDepth(+count));
    console.log(typeof count);
  };
  return (
    <div className="add-settings-panel__count-of-results">
      <p>
        Глубина поиска <br />
        (по умолчанию 100, макс. 1000):
      </p>
      <input
        type="number"
        min="1"
        max="1000"
        onChange={handleChange}
        value={count}
        placeholder="100"
      />
    </div>
  );
};

export default CountOfResults;
