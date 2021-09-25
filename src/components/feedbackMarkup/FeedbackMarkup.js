import React from "react";
import s from "./feedbackMarkup.module.css";

const feedbackMarkup = ({ options, leaveFeedback }) => {
  return (
    <>
      <h1 className={s.feedback__title}> Please leave your feedback</h1>
      <ul className={s.feedback__list}>
        {options.map((name) => (
          <li key={name} className={s.feedback__item}>
            <button
              type="button"
              className={s.feedback__btn}
              onClick={() => leaveFeedback(name)}
            >
              {name}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default feedbackMarkup;
