/*
  В функцию personUpdate() приходят данные в виде объекта, содержащую некую информацию о человеке.
  Если этот человек является женщиной (свойство gender содержит значение 'female'), то из этого объекта
  необходимо удалить свойство age, если оно есть.
  Если этот человек является мужчиной (свойство gender содержит значение 'male'), следует убедиться,
  что в этом объекте есть свойство income. Если его нет, необходимо его добавить
  и присвоить начальное значение 100000.
  Объект после манипуляций следует вернуть в качестве результата работы функции.
*/
export function personUpdate(user) {
    if (user.gender === 'female') {
        if ('age' in user) {
            delete user.age;
        }
    } else if (user.gender === 'male') {
        if (!('income' in user)) {
            user.income = 100000;
        }
    }
    return user;
}

/*
  В функцию objectFieldsList приходят три объекта с различными полями, список которых заранее неизвестен.
  Верните список названий этих полей в алфавитном порядке в виде массива строк.
*/
export function objectFieldsList(firstObj, secondObj, thirdObj) {
    let propsFirst = Object.keys(firstObj);
    let propsSecond = Object.keys(secondObj);
    let propsThird = Object.keys(thirdObj);

    let mergedProps = propsFirst.concat(propsSecond).concat(propsThird);
    mergedProps.sort();

    return mergedProps;
}

/*
  Верните в результате работы функции массив с клонами объекта obj.
  При этом каждый клон должен дополнительно содержать поле id со своим порядковым номером в массиве.
  Количество клонов - count.
*/
export function objectClone(sourceObj, amount) {
    let clonesArray = [];

    for (let i = 0; i < amount; i++) {
        let copy = JSON.parse(JSON.stringify(sourceObj));
        copy.id = i;
        clonesArray.push(copy);
    }

    return clonesArray;
}
