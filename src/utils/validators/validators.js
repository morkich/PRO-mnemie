export const required = value => {
    if(value) return undefined;
    return '!Это поле обязательно';    
}

export const maxLengthCreator = (maxValue) => (value) => {
    if(value.length > maxValue ) return `!Максимальное количество символов ${maxValue}`;
    return undefined;    
}

export const dataListHardCode = (itemsArray) => (value) => {
    let goal = itemsArray.some(itemValue => itemValue === value); 
    if (!goal) return `Уточните город`; 
    return undefined;    
}