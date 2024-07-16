import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = ({good, neutral, bad}) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return <div>No feedback given</div>
  }

  return ( 
  <table>
    <tbody>
      <tr><td><StatisticsRow text='good'/></td><td><StatisticsRow value={good}/></td></tr>
      <tr><td><StatisticsRow text='neutral'/></td><td><StatisticsRow value={neutral}/></td></tr>
      <tr><td><StatisticsRow text='bad'/></td><td><StatisticsRow value={bad}/></td></tr>
      <tr><td><StatisticsRow text='all'/></td><td><StatisticsRow value={good+bad+neutral}/></td></tr>
      <tr><td><StatisticsRow text='average'/></td><td><StatisticsRow value={(good-bad)/(good+bad+neutral)}/></td></tr>
      <tr><td><StatisticsRow text='positive'/></td><td><StatisticsRow value={good*100/(good+bad+neutral)+'%'}/></td></tr>
    </tbody>
  </table> )
}

const StatisticsRow = (props) => {
  return(
      <div>
      {props.text}
      {props.value}
      </div>
    )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setGoodFB = () => {
    setGood(good+1)
  }
  const setNeutralFB = () => {
    setNeutral(neutral+1)
  }
  const setBadFB = () => {
    setBad(bad+1)
  }
  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={setGoodFB} text='good'/>
      <Button handleClick={setNeutralFB} text='neutral'/>
      <Button handleClick={setBadFB} text='bad'/>
      <h1>statistics</h1>      
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App