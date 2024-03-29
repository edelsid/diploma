import DataForm from "./DataForm"

export default function PersonalData({ gatherData, errorCause }) {
  return (
    <>
      <div className="panel__standart border__btm flex__standart">
        <div className="flex__standart">
          <h4 className="medium">Персональные данные</h4>
        </div>
      </div>
      <div className="form__wrapper__standart border__btm">
        <DataForm gatherData={gatherData} errorCause={errorCause}/>
      </div>
    </>
  )
}
