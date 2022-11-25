import React from "react";
import Tippy from "@tippy.js/react";
import style from "../Story/Story.module.scss";
import "tippy.js/dist/tippy.css";

const Story = ({ money, clearHistory, todo }) => {
  return (
    <div className={style.story}>
      <div className={style.story__title}>
        <div className={style.clearHistory}>
          <button
            onClick={() => {
              clearHistory();
            }}
          >
            new story
            <i class="fa fa-refresh" aria-hidden="true"></i>
          </button>
        </div>
      </div>

      <ul className={style.story__list}>
        {todo.map((item) => (
          <Tippy content={item.data}>
            <li key={item.id} className={style.story__item}>
              <div className={style["story__item-box"]}>
                <i
                  className={item.classArrow + " " + item.classArrowColor}
                  aria-hidden="true"
                ></i>
                <span className={style["story__item-title"]}>{item.title}</span>
              </div>
              <span className={style["story__item-number"] + " " + item.class}>
                {item.num} {money}
              </span>
            </li>
          </Tippy>
        ))}
      </ul>
    </div>
  );
};

export default Story;
