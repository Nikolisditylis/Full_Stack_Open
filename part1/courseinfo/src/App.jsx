import {useState} from 'react'

const Header = (props) => {
  //console.log(props)
  return(
    <div>
      <p>{props.name}</p>
    </div>
  )
}


const Part = (props) => {
  const parts = [
    {name: 'Fundamentals Of React' , number: 10} ,
    {name: 'Using props to pass data' , number: 7 },
    {name: 'State of a component' , number: 14}
  ] 

  return(
    <div>
      <p> {parts[props.index].name} : {parts[props.index].number} </p>
    </div>
  )
}

const Content = () => {
  return(
    <div>
      <Part index = '0' />
      <Part index = '1' />
      <Part index = '2' />
    </div>
  )
}

//export default Content

const Total = (props) => {
  return(
    <div>
      <p>Number of exercises is : {props.number}</p>
    </div>
  )
}


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

  return (
    <div>
      <h2> {course.name} </h2>
      <p> {course.parts[0].name} : {course.parts[0].exercises} </p>
      <p> {course.parts[1].name} : {course.parts[1].exercises} </p>
      <p> {course.parts[2].name} : {course.parts[2].exercises} </p>
      
    </div>
  )
}




export default App
