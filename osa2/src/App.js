import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
          {
            name: 'Fundamentals of React',
            exercises: 10,
            id: 1
          },
          {
            name: 'Using props to pass data',
            exercises: 7,
            id: 2
          },
          {
            name: 'State of a component',
            exercises: 14,
            id: 3
          }
        ]
    }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

const Course = (props) => {
  return (
    <div>
      <Header course={props.name} />
      <Content content={props} />
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
    <div>
      <Part name={props.content.course.parts[0].name} exercises={props.content.course.parts[0].exercises} />
      <Part name={props.content.course.parts[1].name} exercises={props.content.course.parts[1].exercises} />
      <Part name={props.content.course.parts[2].name} exercises={props.content.course.parts[2].exercises} />
      <Total total={props.content} />
    </div>
  )
}

const Part = (props) => {
    return (
        <p>
            {props.name} {props.exercises}
        </p>
    )
}

const Total = (props) => {
    // let sum = Sum(props.total.course.parts)
    let first = 0;
    const sum = props.total.course.parts.reduce( function(a, b) {
        if (first === 0) {
            first++;
            return (
                a.exercises + b.exercises
            )
        }
        return (
            a + b.exercises
        )
        
    } );
    
    return (
        <span><b>Total of {sum} exercises</b></span>
    )
}

const Sum = (p) => {
    let sumValue = 0

    p.forEach(element => {
        sumValue += element.exercises
    });

    return (
        sumValue
    )
}

export default App;
