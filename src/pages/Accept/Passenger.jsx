import personIcon from "../../assets/icons/person.png"
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

export default function Passenger({ passenger }) {
  const { person, doc } = passenger;
  const ages = useSelector(state => state.root.site.ages);
  const [age, setAge] = useState("взрослый");
  const [gender, setGender] = useState("мужской");
  const [docType, setDocType] = useState("Паспорт РФ");

  useEffect(() => {
    ages.forEach(item => {
      if (item.id === person.type) setAge(item.name);
    });
    if (person.gender === "female") setGender("женский");
    if (doc.docType === "birthCert") setDocType("Свидетельство о рождении");
  }, []);

  return (
    <li className="passenger flex">
      <div className="passenger__icon__wrapper flex__column">
        <img className="passenger__icon" src={personIcon} />
        <p className="px18">{age}</p>
      </div>
      <div className="passenger__info__wrapper flex">
        <p className="px18">{person.surname} {person.name} {person.patronym}</p>
        <p className="px18 grey">Пол {gender}</p>
        <p className="px18 grey">Дата рождения {person.birthdate}</p>
        <p className="px18 grey">{docType} {doc.docType === "passport" && doc.series} {doc.number}</p>
      </div>
    </li>
  )
}
