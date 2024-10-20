
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const StatisticLine = (props) => {
  return(
      <tr>
       <td>{props.text}  : </td> 
       <td>{props.value} </td>
       </tr>
  )
}

const Statistics = (props) =>{

  if(props.total === 0){
    return(<div> No feedback given </div>)
  }

  return(
    <div>
      <table>
        <tbody>
        <StatisticLine text="Good" value={props.good}/>
        <StatisticLine text="Neutral" value={props.neutral}/>
        <StatisticLine text="Bad" value={props.bad}/>
        <StatisticLine text="All" value={props.total} />
        <StatisticLine text="Average" value={props.average}/>
        <StatisticLine text="Positive Percentage" value={props.posPerc}/>
        </tbody>
      </table>
    </div>
  )
} 

const Button = ({click, text}) => (
   <button onClick={click}> {text} </button>
)

const App= () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [posPerc , setPerc] = useState(0)


  const handleGood = () => {
    const updatedGood = good + 1;
    setGood(updatedGood);
    setTotal(updatedGood + neutral + bad);
    setAverage((updatedGood - bad) / (updatedGood + neutral + bad));
    setPerc(100 * updatedGood / (updatedGood + neutral + bad )) ;
  }

  const handleNeutral = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
    setTotal(updatedNeutral + good + bad) ;
    setAverage((good - bad) / (good + updatedNeutral + bad));
    setPerc(100 * good / (good + updatedNeutral + bad )) ;
  }

  const handleBad = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad);
    setTotal(updatedBad + good + neutral);
    setAverage((- updatedBad + good) / (updatedBad + good + neutral));
    setPerc(100 * good / (good + neutral + updatedBad)) ;
  }


  return(
    <div>
      <h2> Give Feedback </h2>
      <Button click = {handleGood} text = "Good"/>
      <Button click = {handleNeutral} text= "Neutral"/>
      <Button click ={handleBad} text="Bad" />
      

      <div>
        <h2>Statistics</h2>
        <Statistics 
          good = {good} 
          bad = {bad}
          neutral = {neutral}
          average = {average}
          total = {total}
          posPerc = {posPerc}/>
      </div>
    </div>
  )
}

export default App
