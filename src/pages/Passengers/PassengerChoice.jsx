import PassportForm from "./PassportForm"
import PassengerForm from "./PassengerForm"
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPassenger } from "../../store/order";
import { getYear } from "date-fns";
import { func, number, string } from "prop-types";

export default function PassengerChoice({ id, num, deletePassenger }) {

  const dispatch = useDispatch();
  const currentDate = useSelector (state => state.root.site.date);
  const [error, setError] = useState({ message: "", cause: "" });
  const errLength = error.message.length;
  const [complete, setComplete] = useState(false);
  const [formData, setFormData] = useState({
    person: {},
    doc: {},
    id,
  });

  const { person, doc } = formData;

  const validateForm = (e) => {
    console.log(formData)
    e.preventDefault();
    try {
      checkNames([person.surname, person.name, person.patronym]);
      checkDate(person.birthdate);
      if (doc.docType === "passport") {
        checkSeries(doc.series);
        checkNumber(doc.number);
      } else checkBirthCert(doc.number);
      console.log('form passed');
      dispatch(addPassenger({formData}));
      setComplete(true);
    } catch (error) {
      setError({ message: error.message, cause: error.cause });
      if(complete) setComplete(false)
      console.log('form failed', error.cause);
    }
  };

  const checkNames = (names) => {
    names.forEach(item => {
      if (item.match(/^[А-Я][а-я]+$/g) === null)
      throw new Error ("Имя, фамилия и отчество должны быть написаны на русском языке и начинаться с заглавной буквы", {cause: "name surname patronym"});
    });
  };

  const checkDate = (birthdate) => {
    const err = new Error ("Дата рождения введена некорректно. Пример: 10.05.1992", {cause: "birthdate"});
    const currentYear = getYear(new Date(currentDate));
    const dateArr = birthdate.split('.');
    if (Number(dateArr[0]) > 31 || dateArr[0] === "00") throw err;
    if (Number(dateArr[1]) > 12 || dateArr[1] === "00") throw err;
    if (Number(dateArr[2]) > currentYear || dateArr[2] === "0000" || dateArr[2].length < 4) throw err;
  };

  const checkSeries = (series) => {
    if (series.match(/[0-9]{4}/g) === null) 
    throw new Error ("Серия паспорта введена некорректно. Пример: 1234", {cause: "series"});
  }

  const checkNumber = (number) => {
    if (number.match(/[0-9]{6}/g) === null) 
    throw new Error ("Номер паспорта введен некорректно. Пример: 123456", {cause: "number"});
  }

  const checkBirthCert = (number) => {
    const result = number.match(/^(I|II|III|IV|V|VI|VII|VIII|IX|X)-[А-Я]{2}-[0-9]{6}$/g);
    if (result === null) throw new Error ("Номер свидетельства о рождении введен некорректно. Пример: VI-МЯ-193452", {cause: "number"});
  }

  const gatherData = (data, label) => {
    setFormData((prevForm) => ({
      ...prevForm,
      person: label === "person" ? data : prevForm.person,
      doc: label === "doc" ? data : prevForm.doc,
    }));
  }

  const acceptError = () => {
    setError({ message: "", cause: "" });
  };

  return (
    <form className="panel__wrapper psg" id={`totalPassengerForm${num}`} onSubmit={validateForm}>
      <div className="panel__standart border__btm flex__standart">
        <div className="flex__standart">
          <button type="button" className="button__round flex__center">—</button>
          <h4 className="medium">Пассажир {num}</h4>
        </div>
        <span onClick={() => deletePassenger(id)}>&#x2716;</span>
      </div>
      <PassengerForm gatherData={gatherData} errorCause={error.cause}/>
      <PassportForm gatherData={gatherData} errorCause={error.cause}/>

      <div className={
        `form__wrapper__standart ${errLength > 0 && "errorWindow"} ${complete && "completeWindow"} ${errLength > 0 || complete ? "flex__standart" : "flex__end"}`}>

        {complete && <div className="popup__message flex__standart">
          <span className="icon__complete flex__center px18">&#x2714;</span>
          <p className="px14">Готово</p>
        </div>}

        {errLength > 0 && <div className="popup__message flex__standart">
          <span className="icon__error flex__center px18" onClick={acceptError}>&#x2716;</span>
          <p className="px14">{error.message}</p>
        </div>}

        {errLength === 0 && <button 
          type="submit"
          form={`totalPassengerForm${num}`}
          className="button__transp compact narrow__black">Следующий пассажир
        </button>}
      </div>
    </form>
  )}

  PassengerChoice.propTypes = {
    id: string,
    num: number,
    deletePassenger: func
  }