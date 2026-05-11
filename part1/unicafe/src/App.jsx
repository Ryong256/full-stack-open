import { useState } from 'react'

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  )
}

const StatisticsLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const { good, neutral, bad } = props
  const total = good + neutral + bad
  const average = total === 0 ? 0 : (good - bad) / total
  const positive = total === 0 ? 0 : (good / total) * 100

  if (total === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  } 
  
  return (
    <table>
      <tbody>
        <StatisticsLine text="Good" value={good} />
        <StatisticsLine text="Neutral" value={neutral} />
        <StatisticsLine text="Bad" value={bad} />
        <StatisticsLine text="Average" value={average.toFixed(2)} />
        <StatisticsLine text="Positive" value={`${positive.toFixed(2)} %`} />
        <StatisticsLine text="Total" value={total} />
      </tbody>
    </table>
    )
  }

const App = () => {
  const title = 'Provide feedback'
  const [clicks, setClicks] = useState({
    good: 0, neutral: 0, bad: 0
  })

  const handleGood = () => {
    setClicks({ ...clicks, good: clicks.good + 1 })
  }

  const handleNeutral = () => {
    setClicks({ ...clicks, neutral: clicks.neutral + 1 })
  }

  const handleBad = () => {
    setClicks({ ...clicks, bad: clicks.bad + 1 })
  }
  return (
    <div>
      <Header title={title} />
      <button onClick={handleGood}>Good</button>
      <button onClick={handleNeutral}>Neutral</button>
      <button onClick={handleBad}>Bad</button>
      <Statistics good={clicks.good} neutral={clicks.neutral} bad={clicks.bad} />
    </div>
  )
}

export default App
