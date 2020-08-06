import DG from '2gis-maps';
import { chooseSizeForMap } from './utils';
import marker from './images/marker-01.png';
import { hideSearchModal, hideSearchResultsPanel } from './redux/actions';

let map_;
let myIcon;
let group_of_markers;

export default async function (changeCoords, clearData) {
  //   let Datastore = require('nedb');

  //   let map_;

  //   db = new Datastore({ filename: 'city/cities.txt' });
  //   db.loadDatabase();

  // загрузка карты
  try {
    await DG;
  } catch (err) {
    console.log(err);
    if (err.message == 'DG is not defined') {
      console.log('Ошибка! Карта не загрузилась\nПроверьте подключение к интернету');
      //   errorWidnow = document.querySelector('.place-map__error-window');
      //   errorWidnow.querySelector('h3').innerHTML =
      //     'Ошибка! Карта не загрузилась\nПроверьте подключение к интернету';
      //   return;
    }
  }

  // получение карты по айди и установка центра и масштаба на карте
  map_ = DG.map('map', {
    center: [52.26, 87.12],
    zoom: 6,
  });
  console.log(map_);
  //Создаем маркер
  myIcon = DG.icon({
    iconUrl: marker,
    iconSize: [12, 12],
  });

  //контейнер для главного маркера
  let group_main_marker = DG.featureGroup();

  //   //определяем координаты по клику
  map_.on('click', function (e) {
    // Удаление фотомаркеров
    group_of_markers.clearLayers();
    global.countImgs = 0;
    clearData();
    // document.querySelector('.search-results-panel__row').innerHTML = '';

    // // удаляется маркер предыдущего клика
    group_main_marker.clearLayers();

    // //записываем в параметры широту и долготу, которые будут отправляться в запросе к апи вк
    changeCoords({ lat: e.latlng.lat, lng: e.latlng.lng });

    // // установка главного маркера
    DG.marker([e.latlng.lat, e.latlng.lng], {
      icon: myIcon,
    }).addTo(group_main_marker);

    group_main_marker.addTo(map_);
  });

  group_of_markers = DG.featureGroup();

  //   let submitSearchCityButton = document.querySelector('.place-map__search-sity-pannel i');
  //   let inputSearchCity = document.querySelector('.place-map__search-sity-pannel input');
  //   const changeToDot = require('./utils').changeToDot;
  //   const UpperCaseFirstLetter = require('./utils').UpperCaseFirstLetter;
  //   submitSearchCityButton.onclick = () => {
  //     console.log('rrr');
  //     db.find({ Город: UpperCaseFirstLetter(inputSearchCity.value) }, function (err, docs) {
  //       console.log(docs);
  //       if (docs.length != 0) {
  //         console.log([changeToDot(docs[0].lat), changeToDot(docs[0].lng)]);
  //         map_.setView([+changeToDot(docs[0].lat), +changeToDot(docs[0].lng)], 12);
  //       }
  //     });
  //   };
}

export const openPopup = (id, dispatch) => {
  console.log('in openPopup id: ', id);
  let mark = group_of_markers.getLayers()[+id];
  console.log(mark.getLatLng());
  map_.setView([mark.getLatLng().lat, mark.getLatLng().lng]);

  mark.openPopup();
  dispatch(hideSearchModal());
  dispatch(hideSearchResultsPanel());
};

export const clear_map_of_markers = () => {
  group_of_markers.clearLayers();
};

//добавление по одной фотографии на карту
export const addMarkersToMap = async (objects) => {
  // console.log('addMarkersToMap', objects);
  group_of_markers.clearLayers();
  if (!objects) return;
  for (let i = 0; i < objects.length; i++) {
    if (objects[i].lat) {
      let image = document.createElement('img');
      image.src = chooseSizeForMap(objects[i].sizes);
      image.style.width = '175px';
      let a = document.createElement('a');
      a.href = `https://vk.com/photo${objects[i].owner_id}_${objects[i].id}`;
      a.target = '_blank';
      a.append(image);

      let popup = DG.popup().setContent(a);

      DG.marker([objects[i].lat, objects[i].long]).bindPopup(popup).addTo(group_of_markers);

      group_of_markers.addTo(map_);
    }
    // задержка добавления маркеров в 50мс (иначе если все разом, может подвиснуть
    // если маркеров много)
    await new Promise((resolve) => setTimeout(resolve, 25));
  }
};
