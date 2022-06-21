import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);
const Votes = ({ votes }) => <div>Has {votes} votes</div>;

const Head = () => <h1>Anecdote of the day</h1>;

const Body = ({ totalVotes, anecdotes, votes }) => {
  if (totalVotes === 0) return <></>;
  else
    return (
      <div>
        <h1>Anecdote with most votes</h1>
        <p>{anecdotes}</p>
        <Votes votes={votes} />
      </div>
    );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];

  let random = Math.floor(Math.random() * anecdotes.length);
  const [selected, setSelected] = useState(random);
  const [randomNumber, setRandomNumber] = useState(0);
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0));

  const totalVotes = points.reduce((a, b) => a + b, 0);
  const maxVotes = Math.max(...points);
  const indexOfMaxPoints = points.indexOf(maxVotes);

  const setSelectedTo = () => {
    random = Math.floor(Math.random() * anecdotes.length);
    setRandomNumber(random);
    setSelected(random);
  };

  const setPointsTo = () => {
    setPoints(
      points.map((value, i) => {
        if (i === randomNumber) return value + 1;
        return value;
      })
    );
  };

  return (
    <>
      <Head />
      <div>{anecdotes[selected]}</div>
      <Votes votes={points[randomNumber]} />
      <Button handleClick={setPointsTo} text="vote" />
      <Button handleClick={setSelectedTo} text="next anecdote" />
      <Body
        totalVotes={totalVotes}
        anecdotes={anecdotes[indexOfMaxPoints]}
        votes={points[indexOfMaxPoints]}
      />
    </>
  );
};

export default App;
