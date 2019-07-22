import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
          {
            name: 'Fundamentals of React',
            exercises: 10
          },
          {
            name: 'Using props to pass data',
            exercises: 7
          },
          {
            name: 'State of a component',
            exercises: 14
          }
        ]
    }
    let sum = Sum(course.parts)

  return (
    <div>
        <Header course={course.name} />
        <Content name={course.parts[0].name} exercises={course.parts[0].exercises} />
        <Content name={course.parts[1].name} exercises={course.parts[1].exercises} />
        <Content name={course.parts[2].name} exercises={course.parts[2].exercises} />
        <Total total={sum} />
    </div>
  )
}

const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    )
}

const Content = (props) => {
    return (
        <p>
            {props.name} {props.exercises}
        </p>
    )
}

const Total = (props) => {
    return (
        <p>Number of exercises {props.total}</p>
    )
}

const Sum = p => {
    let sumValue = 0

    p.forEach(element => {
        sumValue += element.exercises
    });

    return (
        sumValue
    )
}

ReactDOM.render(<App />, document.getElementById('root'))