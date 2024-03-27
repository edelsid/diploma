import { useState, useEffect } from "react"
import List from "../../models/List";
import { func, string } from "prop-types";

export default function PassportForm({ gatherData, errorCause }) {
  const documents = [{
    id: "passport",
    name: "Паспорт",
  }, {
    id: "birthCert",
    name: "Свидетельство о рождении",
  }];

  const [open, setOpen] = useState(false);
  const [document, setDocument] = useState(documents[0]);
  const [state, setState] = useState({
    docType: "passport",
    series: "",
    number: "",
  });

  const dropdown = () => {
    if (open) {
      setOpen(false);
      return;
    }
    setOpen(true);
  }

  const changeType = (e) => {
    documents.forEach((item) => {
      if (item.id === e.target.id) setDocument(item);
    });
    inputChange(e);
  };

  const inputChange = (e) => {
    const {id, value} = e.target;
    setState ((prevForm) => ({
      ...prevForm,
      docType: documents.find((item) => item.id === id) ? id : prevForm.docType,
      series: id === "series" ? value : prevForm.series,
      number: id === "number" ? value: prevForm.number,
    }));
  };

  useEffect(() => {
    gatherData(state, "doc");
  }, [state]);

  useEffect(() => {
    setState ((prevForm) => ({
      ...prevForm,
      series: "",
      number: "",
    }))
  }, [state.docType]);

  const composeClassName = (id) => {
    let className = "passenger__input";
    if (errorCause.includes(id)) className = className + " incorrect";
    return className;
  }

  return (
    <div className="passport__form__wrapper border__btm">
      <div className="passport__form">
        <div className="passport flex">
          <label className={`px18 form__label${document.name.length > 10 ? "__long" : ""}`}>
            Тип документа
            <div className="customSelect__form" onClick={dropdown}>
              <p>{document.name}</p>
              {open && <List className="customDropdown__form">
                {documents.map((item) => <li 
                  key={item.id} 
                  id={item.id} 
                  onClick={changeType} 
                  className="black">{item.name}
                </li>)}
              </List>}
            </div>
          </label>
          {document.id === "passport" && <>
            <label className="form__label px18">
              Серия
              <input 
                className={composeClassName("series")}  
                id="series" 
                placeholder="_ _ _ _"
                maxLength="4"
                value={state.series}
                onChange={inputChange}
                required>
              </input>
            </label>
            <label className="form__label px18">
              Номер
              <input 
                className={composeClassName("number")}  
                id="number" 
                placeholder="_ _ _ _ _ _"
                maxLength="6"
                value={state.number}
                onChange={inputChange}
                required>
              </input>
            </label>
          </>}
          {document.id === "birthCert" && <>
            <label className="form__label px18">
              Номер
              <input 
                className={composeClassName("number")} 
                id="number" 
                placeholder="12 символов"
                maxLength="12"
                value={state.number}
                onChange={inputChange}
                required>
              </input>
            </label>
          </>}
        </div>
      </div>
    </div>
  )
}

PassportForm.propTypes = {
  gatherData: func,
  errorCause: string,
}