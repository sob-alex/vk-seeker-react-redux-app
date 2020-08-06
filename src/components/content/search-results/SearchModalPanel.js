import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hideSearchModal } from '../../../redux/actions';
import { openPopup } from '../../../map';
const SearchModalPanel = ({ target }) => {
  const data = useSelector((state) => state.app.modal_data);
  console.log(data);
  const dispatch = useDispatch();
  const modalContent = useRef(null);
  const canvas = useRef(null);
  const { img } = data;

  const handleClose = (e) => {
    if (e.target.className == 'search-results-panel__modal') {
      dispatch(hideSearchModal());
    }
  };
  const handleMarkOnMap = () => {
    console.log('handleMap', data);
    openPopup(data.numberId, dispatch);
  };
  useEffect(() => {
    let ctx = canvas.current.getContext('2d');
    let targetComputed = getComputedStyle(modalContent.current);
    console.log(targetComputed.height);
    let k = img.naturalWidth / img.naturalHeight;
    console.log(canvas);
    canvas.current.width = parseFloat(targetComputed.height) * k;
    canvas.current.height = parseFloat(targetComputed.height);
    ctx.drawImage(img, 0, 0, canvas.current.width, canvas.current.height);
  });

  return (
    <div onClick={handleClose} className="search-results-panel__modal">
      <span
        onClick={() => dispatch(hideSearchModal())}
        className="search-results-panel__modal--close-modal"
      >
        x
      </span>
      <div ref={modalContent} className="search-results-panel__modal--content">
        <canvas ref={canvas} className="search-results-panel__modal--img" id="img01"></canvas>

        <div className="search-results-panel__content--description">
          <div className="search-results-panel__description--main">
            <a
              href={`https://vk.com/photo${data.href[0]}_${data.href[1]}`}
              className="search-results-panel__description--person-name"
              id="modal_name"
              target="_blank"
            >
              {data.Name}
            </a>
            <a
              href={`https://vk.com/photo${data.href[0]}_${data.href[1]}`}
              className="search-results-panel__description--person-anchor"
              id="modal_link"
              target="_blank"
            >
              Ссылка ВК
            </a>
          </div>

          <hr />
          <div className="search-results-panel__description--add">
            <span className="search-results-panel__description--date" id="date_modal">
              {data.date}
            </span>
            <span
              className="search-results-panel__description--mark-on-map"
              onClick={handleMarkOnMap}
              id="label_on_map"
            >
              Метка на карте
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModalPanel;
