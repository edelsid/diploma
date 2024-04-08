const checkEmail = (email) => {
  const result = email.match(/[\w\d]+@\w+\.[a-z]+/g);
  if (result === null) throw new Error ("Адрес электронной почты введен некорректно! Пример: demo@gmail.ru", {cause: "email"});
}

export default checkEmail