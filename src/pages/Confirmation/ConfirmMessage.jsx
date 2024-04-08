import tickets from "../../assets/icons/tickets.png"
import worker from "../../assets/icons/worker.png"
import pcTickets from "../../assets/icons/pc__ticket.png"
import List from "../../models/List"
import Step from "../../components/items/Step"
import { object } from "prop-types"

export default function ConfirmMessage({ payer }) {
  const { name, patronym } = payer;

  const steps = [{
    id: 1,
    text: `билеты будут отправлены на\u00A0ваш e${String.fromCharCode(8209)}mail`,
    img: pcTickets,
  }, {
    id: 2,
    text: "распечатайте и\u00A0сохраняйте билеты до\u00A0даты поездки",
    img: tickets,
  }, {
    id: 3,
    text: "предъявите распечатанные билеты при\u00A0посадке",
    img: worker,
  }];

  return (
    <div className="overview__panel">
      <List className="furtherSteps flex">
        {steps.map((item) => <Step key={item.id} item={item}></Step>)}
      </List>
      <div className="thanks">
        <h3>{name} {patronym}!</h3>
        <p>
          Ваш заказ успешно оформлен.<br/>
          В ближайшее время с&nbsp;вами свяжется оператор связи для&nbsp;подтверждения.
        </p>
        <p className="bestWishes bold">
          Благодарим Вас за&nbsp;оказанное доверие и желаем приятного путешествия!
        </p>
      </div>
    </div>
  )
}

ConfirmMessage.propTypes = {
  payer: object,
}