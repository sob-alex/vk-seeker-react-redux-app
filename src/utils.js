export const getToken = (url) => url.hash.slice(14, 99);

export const getDateForResults = (date) => {
  date = new Date(date * 1000);
  return `${date.getDate()}.${
    date.getMonth() + 1
  }.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
};

export const chooseSizeForMap = (arr) => {
  return arr.find((item) => item.type == 'q').url;
};

export const chooseSize = (arr, option) => {
  arr.reverse();
  if (!option) return arr.find((item) => item.type == 'z' || item.type == 'y').url;
  else {
    return arr.find((item) => item.type == 'x').url;
  }
};

export const changeToDot = (str) => {
  return str
    .split('')
    .map((e) => {
      if (e == ',') return '.';
      else return e;
    })
    .join('');
};
export const UpperCaseFirstLetter = (str) => {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
};
