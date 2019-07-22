import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = props => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="Good" />

      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />

      <Button handleClick={() => setBad(bad + 1)} text="Bad" />

      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

const Button = (props) => {
  return(
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const Statistics = (props) => {
  return(
    <table>
      <tbody>
        <tr>
          <td>Good: </td>
          <td>{props.good}</td>
        </tr>
        <tr>
          <td>Neutral: </td>
          <td>{props.neutral}</td>
        </tr>
        <tr>
          <td>Bad: </td>
          <td>{props.bad}</td>
        </tr>
        <tr>
          <td>All: </td>
          <td>{props.good + props.neutral + props.bad}</td>
        </tr>
        <tr>
          <td>Average: </td>
          <td>{CalculateAverage(props)}</td>
        </tr>
        <tr>
          <td>Positive: </td>
          <td>{CalculatePositive(props)}</td>
        </tr>
      </tbody>
    </table>
  )
}

const CalculateAverage = (stats) => {
  if ((stats.good + stats.neutral + stats.bad) === 0) {
    return "N/A"
  }
  // the value of neutral is zero so we don't need to take it into account
  let negative = stats.bad * (-1)
  let all = stats.good + stats.neutral + stats.bad
  let divide = (stats.good + negative) / all
  return divide
}

const CalculatePositive = (stats) => {
  if ((stats.good + stats.neutral + stats.bad) === 0) {
    return "N/A"
  }
  let good = stats.good
  let all = stats.good + stats.neutral + stats.bad
  let returnValue = good / all
  let rounded = Math.round(returnValue * 1000) / 10
  return rounded + " %"
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)