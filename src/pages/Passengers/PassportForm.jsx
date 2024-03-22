import { useState } from "react"
import List from "../../models/List";

export default function PassportForm() {
  const documents = [{
    id: "passport",
    name: "Паспорт",
  }, {
    id: "birthCert",
    name: "Свидетельство о рождении",
  }];

  const [open, setOpen] = useState(false);
  const [document, setDocument] = useState(documents[0]);

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
    })
  };

  return (
    <div className="passport__form__wrapper border__btm">
      <form className="passport__form">
        <div className="passport flex">
          <label className={`px18 form__label${document.name.length > 10 ? "__long" : ""}`}>
            Тип документа
            <div className="customSelect__form" onClick={dropdown}>
              <p>{document.name}</p>
              {open && <List className="customDropdown__form">
                {documents.map((item) => <li key={item.id} id={item.id} onClick={changeType} className="black">{item.name}</li>)}
              </List>}
            </div>
          </label>
          {document.id === "passport" && <>
            <label className="form__label px18">
              Серия
              <input className="passenger__input" id="series" placeholder="_ _ _ _"></input>
            </label>
            <label className="form__label px18">
              Номер
              <input className="passenger__input" id="number" placeholder="_ _ _ _ _ _"></input>
            </label>
          </>}
          {document.id === "birthCert" && <>
            <label className="form__label px18">
              Номер
              <input className="passenger__input" id="number" placeholder="12 символов"></input>
            </label>
          </>}
        </div>
      </form>
    </div>
  )
}
