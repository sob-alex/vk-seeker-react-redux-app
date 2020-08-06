import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeMembersCount } from '../../../../redux/actions';

const MembersCount = () => {
  const paramsFrom = useSelector((state) => state.params.countMembers_from);
  const paramsTo = useSelector((state) => state.params.countMembers_to);
  const [from, setFrom] = useState(paramsFrom);
  const [to, setTo] = useState(paramsTo);
  const dispatch = useDispatch();
  const handleFrom = (e) => {
    const from = e.target.value;
    if (+from < 0 || +from > 10000000) {
      setFrom(0);
      dispatch(changeMembersCount({ from: 0, to: +to }));
      return;
    }
    if (+from > +to) {
      setFrom(to);
      dispatch(changeMembersCount({ from: +to, to: +to }));
      return;
    }
    setFrom(from);
    dispatch(changeMembersCount({ from: +from, to: +to }));
  };

  const handleTo = (e) => {
    const to = e.target.value;
    if (+to < 0 || +to > 10000000) {
      setTo(10000000);
      dispatch(changeMembersCount({ from: +from, to: 10000000 }));
      return;
    }

    setTo(to);
    dispatch(changeMembersCount({ from: +from, to: +to }));
  };

  const handleBlur = (e) => {
    const to = e.target.value;
    if (+from > +to) {
      setTo(from);
      dispatch(changeMembersCount({ from: +from, to: +from }));
      return;
    }
  };
  return (
    <div className="add-settings-panel__group-filters--members_count">
      <p>Количество участников:</p>
      <span>От: </span>
      <input type="number" onChange={handleFrom} value={from} />
      <span>До: </span>
      <input type="number" onChange={handleTo} onBlur={handleBlur} value={to} />
    </div>
  );
};

export default MembersCount;
