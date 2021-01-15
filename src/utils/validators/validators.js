export const required = (values, errors) => {
  if (!values) {
    errors = '!Это поле обязательно';
  } 
}

export const onlyNumbers = value => {
  if (value && !isNaN(Number(value))) return undefined;
  return 'Только числа';
}

export const maxLengthCreator = (maxValue) => (value) => {
  if (value.length > maxValue) return `!Максимальное количество символов ${maxValue}`;
  return undefined;
}

export const checkPassTwins = (item) => (value) => {
  if(item !== value) return `Пароли не совпадают`;
  return undefined;
}

export const dataListHardCode = (itemsArray) => (value) => {
  let goal = itemsArray.some(itemValue => itemValue === value);
  if (!goal) return `Уточните город`;
  return undefined;
}