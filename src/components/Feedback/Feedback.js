import { useState, useEffect } from "react";
import FeedbackMarkup from "../feedbackMarkup";
import StatisticsMarkup from "../statisticMarkup";
import Notification from "../notification";
import PropTypes from "prop-types";

export default function Feedback() {
  const [badFeedback, setBadFeedback] = useState(0);
  const [neutralFeedback, serNeutralFeedback] = useState(0);
  const [goodFeedback, setGoodFeedback] = useState(0);

  const onLeaveFeedback = (name) => {
    switch (name) {
      case (name = "bad"):
        setBadFeedback((state) => state + 1);
        break;
      case (name = "good"):
        setGoodFeedback((state) => state + 1);
        break;
      case (name = "neutral"):
        serNeutralFeedback((state) => state + 1);
        break;
      default:
        throw new Error();
    }
  };
  const countTotalFeedback = () => {
    return goodFeedback + neutralFeedback + badFeedback;
  };

  const countPositiveFeedbackPercentage = () => {
    return (goodFeedback / (goodFeedback + badFeedback)) * 100;
  };

  return (
    <div className="App">
      <section className="App-section">
        <FeedbackMarkup
          options={["bad", "neutral", "good"]}
          leaveFeedback={onLeaveFeedback}
        />
        {countTotalFeedback() > 0 ? (
          <StatisticsMarkup
            positiveFeedbackValue={goodFeedback}
            neutralFeedbackValue={neutralFeedback}
            badFeedbackValue={badFeedback}
            totalFeedback={countTotalFeedback()}
            positiveFeedbackPercentage={countPositiveFeedbackPercentage().toFixed(
              2
            )}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </section>
    </div>
  );
}

// class Feedback extends Component {
//   static defaultProps = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   static propTypes = {
//     good: PropTypes.number.isRequired,
//     neutral: PropTypes.number.isRequired,
//     bad: PropTypes.number.isRequired,
//   };

//   state = {
//     good: this.props.good,
//     neutral: this.props.neutral,
//     bad: this.props.bad,
//   };
//   onLeaveFeedback = value => {
//     this.setState(prevState => ({
//       [value]: prevState[value] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good, bad } = this.state;
//     return (good / (good + bad)) * 100;
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     return (
//       <div className="App">
//         <section className="App-section">
//           <FeedbackMarkup
//             options={['bad', 'neutral', 'good']}
//             leaveFeedback={this.onLeaveFeedback}
//           />
//           {this.countTotalFeedback() > 0 ? (
//             <StatisticsMarkup
//               positiveFeedbackValue={good}
//               neutralFeedbackValue={neutral}
//               badFeedbackValue={bad}
//               totalFeedback={this.countTotalFeedback()}
//               positiveFeedbackPercentage={this.countPositiveFeedbackPercentage().toFixed(2)}
//             />
//           ) : (
//             <Notification message="No feedback given" />
//           )}
//         </section>
//       </div>
//     );
//   }
// }

// export default Feedback;
