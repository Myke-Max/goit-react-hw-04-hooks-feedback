import React from "react";
import s from "./statisticMarkup.module.css";

const statisticMarkup = ({
  positiveFeedbackValue,
  neutralFeedbackValue,
  badFeedbackValue,
  totalFeedback,
  positiveFeedbackPercentage,
}) => {
  return (
    <>
      <h2 className={s.statistics_title}>Statistics</h2>
      <div className={s.info_wrapper}>
        <span className={s.statistics_value}>Total: {totalFeedback} </span>
        <span className={s.statistics_value}>
          Positive feedback:{positiveFeedbackPercentage}%
        </span>
      </div>

      <ul className={s.statistics_list}>
        <li className={s.statistics_item}>
          <span className={s.statistics_value}>bad:{badFeedbackValue}</span>
        </li>
        <li className={s.statistics_item}>
          <span className={s.statistics_value}>
            neutral:{neutralFeedbackValue}{" "}
          </span>
        </li>
        <li className={s.statistics_item}>
          <span className={s.statistics_value}>
            good:{positiveFeedbackValue}
          </span>
        </li>
      </ul>
    </>
  );
};

export default statisticMarkup;
