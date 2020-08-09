/* eslint-disable default-case */
import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { changeStartTime, changeEndTime, changeWordSearch } from '../../../redux/actions';

const TimeBounds = () => {
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [word, setWord] = useState('');
  const startTimeInput = useRef(null);
  const endTimeInput = useRef(null);
  const dispatch = useDispatch();

  const handleTimeChange = (e) => {
    let time = new Date(e.target.value).getTime() / 1000;
    console.log(time);
    time = isNaN(time) ? '' : time;
    console.log(time);

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

  const handleClickStartTime = (e) => {
    setStartTime('');
    dispatch(changeStartTime(''));
    startTimeInput.current.value = '';
  };
  const handleClickEndTime = (e) => {
    setEndTime('');
    dispatch(changeEndTime(''));
    endTimeInput.current.value = '';
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
        <span className="settings-panel__time-bounds--clear">
          <span>Дата начала:</span> <span onClick={handleClickStartTime}>Сбросить</span>
        </span>
        <br />
        <input
          ref={startTimeInput}
          className="settings-panel__time-bounds-data"
          name="start"
          type="date"
          onBlur={handleTimeChange}
        />
        <br />
        <span className="settings-panel__time-bounds--clear">
          <span>Дата конца:</span> <span onClick={handleClickEndTime}>Сбросить</span>
        </span>
        <input
          ref={endTimeInput}
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
