import { useState, useEffect } from "react"
import { useFetch } from "../../../hooks/useFetch";
import checkEmail from "../../../utils/checkEmail";
import { func } from "prop-types";

export default function ContactForm({ callPopup }) {
  const [ adress, setAdress ] = useState(null);
  const [ body, setBody ] = useState(null);
  const rawURL = import.meta.env.VITE_API_URL;
  let { data } = useFetch(adress, body);
  const [ input, setInput ] = useState('');

  const inputChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  const subscribe = (e) => {
    e.preventDefault();
    try {
      checkEmail(input);
      setBody(input);
      const encoded = encodeURIComponent(input);
      setAdress(`${rawURL}/subscribe?email=${encoded}`);
      setInput('');
    } catch (error) {
      callPopup({
        type: "err",
        message: error.message,
      });
    }
  };

  useEffect(() => {
    if (data && data.status) {
      callPopup({
        type: "info",
        message: `Вы успешно подписались на рассылку. Сообщения будут приходить на электронный адрес ${body}`,
      });
      setAdress(null);
      setBody(null);
      data = {};
    }
  }, [data]);

  return (
    <form className="subscribeForm" onSubmit={subscribe}>
      <label>Будьте в курсе событий</label>
      <div className="formInput flex">
        <input 
          className="subscribeInput"
          id="subscribeMail"
          value={input}
          onChange={inputChange}
          required>
        </input>
        <button type="submit" className="transp__button onBlack__small">Отправить</button>
      </div>
    </form>
  )
}

ContactForm.propTypes = {
  callPopup: func,
}