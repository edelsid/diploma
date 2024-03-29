const composeClassName = (id, errorCause) => {
  let className = "passenger__input";
  if (errorCause.includes(id)) className = className + " incorrect";
  return className;
}

export default composeClassName;