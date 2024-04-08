const checkNames = (names) => {
  names.forEach(item => {
    if (item.match(/^[А-Я][а-я]+$/g) === null)
    throw new Error ("Данные введены некорректно! Имя, фамилия и отчество должны быть написаны на русском языке и начинаться с заглавной буквы", {cause: "name surname patronym"});
  });
};

export default checkNames;