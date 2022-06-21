import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const StatisticsLine = ({ data }) => (
  <tr>
    <td>{data.text}</td>
    <td>{data.value}</td>
  </tr>
);

const Statistics = ({ data }) => {
  if (data.all.value === 0) return <p>No feedback given</p>;
  else
    return (
      <table>
        <tbody>
          <StatisticsLine data={data.good} />
          <StatisticsLine data={data.neutral} />
          <StatisticsLine data={data.bad} />
          <StatisticsLine data={data.all} />
          <StatisticsLine data={data.average} />
          <StatisticsLine data={data.positive} />
        </tbody>
      </table>
    );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const totalFeedbacks = good + neutral + bad;
  const averageFeedbacks = (good - bad) / totalFeedbacks;
  const positiveFeedbacksRatio = (good / totalFeedbacks) * 100;
  const data = {
    good: { value: good, text: "good" },
    neutral: { value: neutral, text: "neutral" },
    bad: { value: bad, text: "bad" },
    all: { value: totalFeedbacks, text: "all" },
    average: { value: averageFeedbacks, text: "average" },
    positive: {
      value: positiveFeedbacksRatio.toString().concat(" %"),
      text: "positive",
    },
  };
  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text={data.good.text} />
      <Button
        handleClick={() => setNeutral(neutral + 1)}
        text={data.neutral.text}
      />
      <Button handleClick={() => setBad(bad + 1)} text={data.bad.text} />
      <h1>Statistics</h1>
      <Statistics data={data} />
    </div>
  );
};
export default App;
