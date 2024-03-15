export default function ChosenPayment() {
  return (
    <div className="panel__wrapper seat">
      <div className="panel__standart border__btm flex__standart">
        <div className="flex__standart">
          <h4 className="medium">Способы оплаты</h4>
        </div>
      </div>
      <div className="overview flex">
        <p className="chosen__option">Наличными</p>
        <div className="changeback flex">
          <button className="button__transp narrow__black">Изменить</button>
        </div>
      </div>
    </div>
  )
}
