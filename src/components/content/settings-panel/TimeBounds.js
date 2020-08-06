import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeStartTime, changeEndTime, changeWordSearch } from '../../../redux/actions';

const TimeBounds = () => {
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [word, setWord] = useState('');

  const dispatch = useDispatch();

  const handleTimeChange = (e) => {
    const time = new Date(e.target.value).getTime() / 1000;
    switch (e.target.name) {
      case 'start':
        if (!isNaN(time)) {
          setStartTime(time);
          dispatch(changeStartTime(time));
        }
        break;
      case 'end':
        if (!isNaN(time)) {
          setEndTime(time);
          dispatch(changeEndTime(time));
        }
        break;
    }
  };
  const handleWordChange = (e) => {
    const word = e.target.value.trim();
    setWord(word);
    dispatch(changeWordSearch(word));
    console.log(word);
  };

  return (
    <div className="settings-panel__time-bounds">
      <h2>Временной диапазон:</h2>
      <form>
        <span>Дата начала:</span> <br />
        <input
          className="settings-panel__time-bounds-data"
          name="start"
          type="date"
          onBlur={handleTimeChange}
        />
        <br />
        <span>Дата конца:</span> <br />
        <input
          className="settings-panel__time-bounds-data"
          name="end"
          type="date"
          onBlur={handleTimeChange}
        />
        <br />
        <span>Поиск по слову:</span> <br />
        <input
          className="settings-panel__time-bounds-word-search"
          name="word"
          type="text"
          onBlur={handleWordChange}
        />
        <br />
      </form>
    </div>
  );
};

export default TimeBounds;
