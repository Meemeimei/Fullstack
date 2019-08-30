import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const courses = [
    {
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ],
      key: 1
    }, 
    {
      name: 'Node.js',
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ],
      key: 2
    }
  ]

  return (
    courses.map(function(item, i){
      return <Course course={item} />
    })
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
    props.content.course.parts.map(function(item, i){
      return <Part name={item.name} exercises={item.exercises} />
    })
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

export default App;
