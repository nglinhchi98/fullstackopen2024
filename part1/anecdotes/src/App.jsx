import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(new Array(anecdotes.length).fill(0))
  const [mostVote, setMostVote] = useState(0)

  //array length
  const arraySize = anecdotes.length;
  //generate random number
  const generateRandomNumber = (min = 0, max = arraySize - 1) => {
      return Math.floor(Math.random() * (max-min +1)) + min;
  }
  const setNewNumber = () => {
    const indexNumber = generateRandomNumber();
    setSelected(indexNumber)
  }

  const Button = (props) => {
    return (
      <button onClick={props.ButtonClick}>
        {props.name}
      </button>
      )
  }

  const setNumberVotes = () => {
    const newVotes = [...vote] //copy of original array
    newVotes[selected] += 1
    setVote(newVotes)
    findHighestVote(selected, newVotes[selected])
  }
  
  const findHighestVote = (selected, val) => {
    
    setMostVote(selected)
    vote.forEach((element, i) => {
      if (val < vote[i]){
        setMostVote(i)
      }
    });
  }

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>has {vote[selected]} votes</p>
      <Button ButtonClick={setNumberVotes} name='vote' />
      <Button ButtonClick={setNewNumber} name='next anecdotes' />
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[mostVote]}</p>
      <p>has {vote[mostVote]} votes</p>

    </div>
  )
}

export default App