import { func, object } from "prop-types";

export default function Popup({ removePopup, data }) {
  const { type, message } = data;

  const dismiss = (e) => {
    e.preventDefault();
    removePopup();
  };

  const splitMessage = () => {
    const splitStr = message.split("! ");
    const result = [splitStr[0], splitStr.slice(1).join(". ")];
    return result;
  };

  return (
    <div className="noticeWrapper">
      <div className="notice_box">
        <div className={`notice_header flex__standart ${type === "err" ? "errorWindow" : "infoWindow"}`}>
          <div className="popup__message flex__standart">
            <span className={`flex__center bold ${type === "err" ? "icon__error" : "icon__info"}`}>
              {type === "err" ? "!" : "i"}
            </span>
          </div>
        </div>
        <div className="notice_body border__btm">
          {type === "err" ? 
          <>
            <p className="px24 bold msg_header">{splitMessage()[0]}</p>
            <p className="px18">{splitMessage()[1]}</p>
          </>
          : <p className="px18">{message}</p>}
        </div>
        <div className="notice_footer flex__center">
          <button className="button__transp narrow__black" onClick={dismiss}>Понятно</button>
        </div>
      </div>
    </div>
  )
}

Popup.propTypes = {
  removePopup: func,
  data: object,
}