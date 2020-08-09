import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { showSearchModal } from '../../../redux/actions';
const Tile = ({ name, datee, src, ownIds, numberId }) => {
  const dispatch = useDispatch();

  const img = useRef(null);
  let Name = useRef(null);
  let date = useRef(null);

  const obr = () => {
    dispatch(
      showSearchModal({
        href: ownIds,
        img: img.current,
        Name: Name.current.innerHTML,
        date: date.current.innerHTML,
        numberId: numberId,
      })
    );
  };
  return (
    <div className="search-results-panel__row--column" onClick={obr}>
      <img src={src} ref={img} />
      <div className="search-results-panel__column--description">
        <p ref={Name} className="search-results-panel__column--description--person-name">
          {name}
        </p>
        <span ref={date} className="search-results-panel__column--description--date">
          {datee}
        </span>
      </div>
    </div>
  );
};

export default Tile;
