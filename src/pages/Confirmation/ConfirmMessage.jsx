import tickets from "../../assets/icons/tickets.png"
import worker from "../../assets/icons/worker.png"
import pcTickets from "../../assets/icons/pc__ticket.png"
import List from "../../models/List"
import Step from "../../components/items/Step"

export default function ConfirmMessage() {
  const steps = [{
    id: 1,
    text: "билеты будут отправлены на ваш e-mail",
    img: pcTickets,
  }, {
    id: 2,
    text: "распечатайте и сохраняйте билеты до даты поездки",
    img: tickets,
  }, {
    id: 3,
    text: "предъявите распечатанные билеты при посадке",
    img: worker,
  }];

  return (
    <div className="overview__panel">
      <List className="furtherSteps flex">
        {steps.map((item) => <Step key={item.id} item={item}></Step>)}
      </List>
      <div className="thanks">
        <h3>Ирина Эдуардовна!</h3>
        <p>
          Ваш заказ успешно оформлен.<br/>
          В ближайшее время с вами свяжется оператор связи для подтверждения
        </p>
        <p className="bestWishes bold">
          Благодарим Вас за оказанное доверие и желаем приятного путешествия!
        </p>
      </div>
    </div>
  )
}
