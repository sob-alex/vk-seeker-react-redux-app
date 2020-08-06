import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeAge } from '../../../../redux/actions';

const Age = () => {
  const paramsAgeFrom = useSelector((state) => state.params.age_from);
  const paramsAgeTo = useSelector((state) => state.params.age_to);
  const [from, setFrom] = useState(paramsAgeFrom);
  const [to, setTo] = useState(paramsAgeTo);
  const dispatch = useDispatch();
  const handleFrom = (e) => {
    const from = e.target.value;
    if (+from < 0 || +from > 100) {
      setFrom(0);
      dispatch(changeAge({ from: 0, to: +to }));
      return;
    }
    if (+from > +to) {
      setFrom(to);
      dispatch(changeAge({ from: +to, to: +to }));
      return;
    }
    setFrom(from);
    dispatch(changeAge({ from: +from, to: +to }));
  };

  const handleTo = (e) => {
    const to = e.target.value;
    if (+to < 0 || +to > 100) {
      setTo(100);
      dispatch(changeAge({ from: +from, to: 100 }));
      return;
    }

    setTo(to);
    dispatch(changeAge({ from: +from, to: +to }));
  };

  const handleBlur = (e) => {
    const to = e.target.value;
    if (+from > +to) {
      setTo(from);
      dispatch(changeAge({ from: +from, to: +from }));
      return;
    }
  };
  return (
    <div className="add-settings-panel__human-filters--age">
      <p>Укажите возраст:</p>

      <form>
        От:
        <input type="number" name="age" min="0" max="100" onChange={handleFrom} value={from} />
        До:
        <input
          type="number"
          name="age"
          min="0"
          max="100"
          onBlur={handleBlur}
          onChange={handleTo}
          value={to}
        />
      </form>
    </div>
  );
};

export default Age;
