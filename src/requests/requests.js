import { filter } from '../filterForResults';
import fetchJsonp from 'fetch-jsonp';
import * as utils from '../utils';
import { showErrorWindow, showAuthForm } from '../redux/actions';

const addRequest = async (items, params, dispatch) => {
  let results = [];
  async function requestGroups(ids) {
    if (ids.length != 0) {
      if (ids.length >= 500) {
        let idsFirstPart = ids.slice(0, (ids.length / 2) | 0);
        let idsSecondPart = ids.slice((ids.length / 2) | 0);
        const url1 = `https://api.vk.com/method/groups.getById?group_ids=${idsFirstPart.join()}&fields=members_count,city&access_token=${
          params.token
        }&v=5.103`;
        const url2 = `https://api.vk.com/method/groups.getById?group_ids=${idsSecondPart.join()}&fields=members_count,city&access_token=${
          params.token
        }&v=5.103`;
        try {
          const response1 = await fetchJsonp(url1);
          const response2 = await fetchJsonp(url2);
          const data1 = await response1.json();
          const data2 = await response2.json();
          // console.log('users: ', data.response);
          results.push(...data1.response);
          results.push(...data2.response);
        } catch (error) {
          dispatch(showErrorWindow(error.message));
          console.log(error);
        }
      } else {
        const url = `https://api.vk.com/method/groups.getById?group_ids=${ids.join()}&fields=members_count,city&access_token=${
          params.token
        }&v=5.103`;
        try {
          const response = await fetchJsonp(url);
          const data = await response.json();

          // console.log('groups:', data.response);
          results.push(...data.response);
        } catch (error) {
          dispatch(showErrorWindow(error.message));
          console.log(error);
        }
      }
    }
  }
  async function requestUsers(ids) {
    if (ids.length != 0) {
      if (ids.length >= 500) {
        let idsFirstPart = ids.slice(0, (ids.length / 2) | 0);
        let idsSecondPart = ids.slice((ids.length / 2) | 0);
        const url1 = `https://api.vk.com/method/users.get?user_ids=${idsFirstPart.join()}&fields=city,common_count,relation,sex,bdate&access_token=${
          params.token
        }&v=5.103`;
        const url2 = `https://api.vk.com/method/users.get?user_ids=${idsSecondPart.join()}&fields=city,common_count,relation,sex,bdate&access_token=${
          params.token
        }&v=5.103`;
        try {
          const response1 = await fetchJsonp(url1);
          const response2 = await fetchJsonp(url2);
          const data1 = await response1.json();
          const data2 = await response2.json();
          // console.log('users: ', data.response);
          results.push(...data1.response);
          results.push(...data2.response);
        } catch (error) {
          dispatch(showErrorWindow(error.message));
          console.log(error);
        }
      } else {
        const url = `https://api.vk.com/method/users.get?user_ids=${ids.join()}&fields=city,common_count,relation,sex,bdate&access_token=${
          params.token
        }&v=5.103`;
        try {
          const response = await fetchJsonp(url);
          const data = await response.json();
          // console.log('users: ', data.response);
          results.push(...data.response);
        } catch (error) {
          dispatch(showErrorWindow(error.message));
          console.log(error);
        }
      }
    }
  }

  //Проверяем, фотографии пользователей и/или групп искать
  if (!params.type) {
    //   Выдергиваем из объектов только айдишники пользователей
    let idsUsers = items.filter((e) => e.owner_id > 0).map((e) => e.owner_id);
    let idsGroups = items.filter((e) => e.owner_id < 0).map((e) => -1 * e.owner_id);

    await requestUsers(idsUsers);
    await requestGroups(idsGroups);
    // Если нужны только фото пользователей
  } else if (params.type == 1) {
    let idsUsers = items.filter((e) => e.owner_id > 0).map((e) => e.owner_id);
    await requestUsers(idsUsers);
  } else {
    let idsGroups = items.filter((e) => e.owner_id < 0).map((e) => -1 * e.owner_id);
    await requestGroups(idsGroups);
  }
  // console.log('resultsss: ', results);
  return results;
};

//Главная экспортируемая функция для отправки запроса к API VK
export default async (params, dispatch) => {
  const url = `https://api.vk.com/method/photos.search?lat=${params.lat}&long=${params.long}&sort=${params.sort}&q=${params.search}&start_time=${params.start_time}&end_time=${params.end_time}&offset=${params.offset}&count=${params.count}&radius=${params.radius}&access_token=${params.token}&v=5.103`;

  try {
    //   Отправка главного запроса

    let response = await fetchJsonp(url);
    let data = await response.json();

    let results = [];
    // Ошибка, если токен устарел, или его нет
    if (data.error && data.error.error_code == 5) {
      console.log('ошибка, токен устарел или его нет');
      dispatch(showAuthForm());
      return results;
    } else {
      // Получаем результаты поиска, пока не подробные
      const items = data.response.items;

      //Если нужна расширенная информация
      if (params.add) {
        await addRequest(items, params, dispatch).then((res) => {
          let count = 0;
          //   Здесь добавляем к массиву объектов первоначального запроса расширенную информацию

          items.forEach((e) => {
            // Ищем одинаковые айдишники, чтобы сопоставить результаты главного запроса и дополнительного
            //То есть находится пересечение дополнительного и главного запроса по айдишникам
            // Чаще всего дополнительный запрос содержит меньше эелементов, чем главный,
            // потому что если в дополнительном запросе к вк в параметрах есть одинаковые айдишники,
            // то они считается как один
            let index = res.findIndex((ee) => ee.id == Math.abs(e.owner_id));
            // нужные нам результаты записываем в массив результатов

            if (index != -1) {
              let toItems = res[index];

              let element = { ...e };
              element.addInfo = toItems;
              // порядковый номер
              element.numberId = count++;
              results.push(element);
            }
          });
        });

        results = filter(params, results);
      }

      return results;
      // return data;
    }
  } catch (error) {
    console.log(error.message);
    dispatch(showErrorWindow(error.message));
  }
};
