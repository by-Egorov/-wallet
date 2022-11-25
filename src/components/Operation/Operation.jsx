import React from "react";
import style from "../Operation/Operation.module.scss";
import ButtonOperation from "./ButtonOperation";

const Operation = ({
  addTodo,
  addTodoR,
  textValue,
  setTextValue,
  numberValue,
  setNumberValue,
  active,
  setActive,
  modalActive,
  setModalActive,
}) => {
  return (
    <div
      className={active ? style.modal + " " + style.active : style.modal}
      onClick={() => setActive(false)}
    >
      <ButtonOperation active={modalActive} setActive={setModalActive} />

      <div className={style.operation} onClick={(e) => e.stopPropagation()}>
        <div
          className={style.operation__close}
          onClick={() => setActive(false)}
        >
          <i className="fa fa-times-circle-o" aria-hidden="true"></i>
        </div>
        <div className={style.operation__title}>
          <p>New entry</p>
        </div>
        <div className={style.operation__form}>
          <input
            className={style["operation__form--text"]}
            type="text"
            placeholder="Enter a description"
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
          />
          <input
            className={style["operation__form--num"]}
            type="tel"
            placeholder="Enter amount"
            value={numberValue}
            onChange={(e) => setNumberValue(e.target.value)}
          />
          <div className={style.operation__buttons}>
            <button
              className={style["operation__buttons--income"]}
              onClick={() => {
                addTodo();
              }}
            >
              income
            </button>
            <button
              className={style["operation__buttons--expenses"]}
              onClick={() => {
                addTodoR();
              }}
            >
              expenses
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Operation;
