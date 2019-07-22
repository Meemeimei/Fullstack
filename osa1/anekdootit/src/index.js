import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)

  return (
    <div>
        <div>{props.anecdotes[selected].anectode}</div>
        <div>Votes: {props.anecdotes[selected].votes}</div>
        <Button handleClick={() => VoteSelected(props.anecdotes[selected])} text="vote" />
        <Button handleClick={() => setSelected(Math.floor((Math.random() * 5) + 0))} text="next anecdote" />
        <Statistics props={props} />
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

const VoteSelected = (props) => {
  props.votes += 1
}

const Statistics = (props) => {
  let topAnectode = "No votes yet :("
  let topVotes = "N/A"
  for(let i = 0; i < props.props.anecdotes.length; i++) {
    let currentArrayItem = props.props.anecdotes[i]
    if (currentArrayItem.votes > 0) {
      if (topVotes === "N/A") {
        topAnectode = currentArrayItem.anectode
        topVotes = currentArrayItem.votes
      } else if (currentArrayItem.votes > topVotes) {
        topAnectode = currentArrayItem.anectode
        topVotes = currentArrayItem.votes
      }
    }
  }
  return(
    <div>
      <div>Anectode with most votes:</div>
      <div>{topAnectode}</div>
      <div>Votes: {topVotes}</div>
    </div>
  )
}

const anecdotes = [
  {anectode:'If it hurts, do it more often', votes:0},
  {anectode:'Adding manpower to a late software project makes it later!', votes:0},
  {anectode:'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.', votes:0},
  {anectode:'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', votes:0},
  {anectode:'Premature optimization is the root of all evil.', votes:0},
  {anectode:'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', votes:0}
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)