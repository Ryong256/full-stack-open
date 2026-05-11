// import { useState } from 'react'

// const Header = (props) => {
//   return (
//     <div>
//       <h1>{props.title}</h1>
//     </div>
//   )
// }

// const StatisticsLine = (props) => {
//   return (
//     <tr>
//       <td>{props.text}</td>
//       <td>{props.value}</td>
//     </tr>
//   )
// }

// const Statistics = (props) => {
//   const { good, neutral, bad } = props
//   const total = good + neutral + bad
//   const average = total === 0 ? 0 : (good - bad) / total
//   const positive = total === 0 ? 0 : (good / total) * 100

//   if (total === 0) {
//     return (
//       <div>
//         <p>No feedback given</p>
//       </div>
//     )
//   } 
  
//   return (
//     <table>
//       <tbody>
//         <StatisticsLine text="Good" value={good} />
//         <StatisticsLine text="Neutral" value={neutral} />
//         <StatisticsLine text="Bad" value={bad} />
//         <StatisticsLine text="Average" value={average.toFixed(2)} />
//         <StatisticsLine text="Positive" value={`${positive.toFixed(2)} %`} />
//         <StatisticsLine text="Total" value={total} />
//       </tbody>
//     </table>
//     )
//   }

// const App = () => {
//   const title = 'Provide feedback'
//   const [clicks, setClicks] = useState({
//     good: 0, neutral: 0, bad: 0
//   })

//   const handleGood = () => {
//     setClicks({ ...clicks, good: clicks.good + 1 })
//   }

//   const handleNeutral = () => {
//     setClicks({ ...clicks, neutral: clicks.neutral + 1 })
//   }

//   const handleBad = () => {
//     setClicks({ ...clicks, bad: clicks.bad + 1 })
//   }
//   return (
//     <div>
//       <Header title={title} />
//       <button onClick={handleGood}>Good</button>
//       <button onClick={handleNeutral}>Neutral</button>
//       <button onClick={handleBad}>Bad</button>
//       <Statistics good={clicks.good} neutral={clicks.neutral} bad={clicks.bad} />
//     </div>
//   )
// }

// export default App


import { useState } from 'react'

const App = () => {
  
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const handleNext = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const handleVotes = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  const maxVotes = Math.max(...votes)
  const maxIndex = votes.indexOf(maxVotes)

  
  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>Has votes {votes[selected]}</p>
      <button onClick={handleVotes}>Add a vote</button>
      <button onClick={handleNext}>Next Anecdote</button>
      <p>Anecdote with most votes</p>
      <p>{anecdotes[maxIndex]}</p>
      <p>has {maxVotes} votes</p>
    </div>

  )
}

export default App