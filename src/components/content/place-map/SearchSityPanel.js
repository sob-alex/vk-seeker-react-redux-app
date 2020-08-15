import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {fetchCityCoodrs} from '../../../redux/actions';
const SearchSityPanel = () => {
  const dispatch = useDispatch();
   const [city, setCity] = useState('');
  const handleChange = (e)=>{
    setCity(e.target.value);
  }
  const handleClick = () =>{
    dispatch(fetchCityCoodrs(city))
  }
  return (
    <div className="place-map__search-sity-pannel">
      <input type="text" placeholder="Введите название города" onChange={handleChange} value={city} />
      <i className="material-icons" onClick={handleClick}>search</i>
    </div>
  );
};

export default SearchSityPanel;
