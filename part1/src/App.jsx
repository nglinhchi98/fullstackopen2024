const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const Header = (props) => {
    return(
      <>
      <p>{props.course}</p>
      </>
    )
  }

  const Part = (props) => {
    return (
      <>
      <p>{props.name}: {props.exercise}</p>
      </>
    )
  }
  
  return (
    <div>
      <Header course={course}/>
      <Part name={part1} exercise={exercises1} />
      <Part name={part2} exercise={exercises2} />
      <Part name={part3} exercise={exercises3} />
    </div>
  )
}

export default App