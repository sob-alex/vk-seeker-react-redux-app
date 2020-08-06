import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeRelation } from '../../../../redux/actions';

const Relation = () => {
  const state = useSelector((state) => state.params.relation);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    let selectedNumber = +e.target.selectedIndex;
    console.dir(e.target);
    if (selectedNumber == 0) selectedNumber = -1;
    dispatch(changeRelation(selectedNumber));
  };
  return (
    <div className="add-settings-panel__human-filters--relation">
      <form>
        <p>Семейное положение:</p>

        <select name="relation" onClick={handleClick}>
          <option selected={-1 === state}>Любое</option>
          <option selected={1 === state}>не женат/не замужем</option>
          <option selected={2 === state}>есть друг/есть подруга</option>
          <option selected={3 === state}>помолвлен/помолвлена</option>
          <option selected={4 === state}>женат/замужем</option>
          <option selected={5 === state}>всё сложно</option>
          <option selected={6 === state}>в активном поиске</option>
          <option selected={7 === state}>влюблён/влюблена</option>
          <option selected={8 === state}>в гражданском браке</option>
        </select>
      </form>
    </div>
  );
};

export default Relation;
