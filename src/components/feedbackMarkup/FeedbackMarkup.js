import React from "react";
import s from "./feedbackMarkup.module.css";

const feedbackMarkup = ({
  onBadFeedback,
  onNeutralFeedback,
  OnGoodFeedback,
}) => {
  return (
    <>
      <h1 className={s.feedback__title}> Please leave your feedback</h1>
      <ul className={s.feedback__list}>
        <li key={"Bad"} className={s.feedback__item}>
          <button
            type="button"
            className={s.feedback__btn}
            onClick={() => onBadFeedback()}
          >
            Bad
          </button>
        </li>
        <li key={"Neutral"} className={s.feedback__item}>
          <button
            type="button"
            className={s.feedback__btn}
            onClick={() => onNeutralFeedback()}
          >
            Neutral
          </button>
        </li>
        <li key={"Good"} className={s.feedback__item}>
          <button
            type="button"
            className={s.feedback__btn}
            onClick={() => OnGoodFeedback()}
          >
            Good
          </button>
        </li>
      </ul>
    </>
  );
};

export default feedbackMarkup;

//  return (
//    <>
//      <h1 className={s.feedback__title}> Please leave your feedback</h1>
//      <ul className={s.feedback__list}>
//        {options.map((name) => (
//          <li key={name} className={s.feedback__item}>
//            <button
//              type="button"
//              className={s.feedback__btn}
//              onClick={() => leaveFeedback(name)}
//            >
//              {name}
//            </button>
//          </li>
//        ))}
//      </ul>
//    </>
//  );
