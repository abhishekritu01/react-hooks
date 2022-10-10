import React,{useContext} from 'react'
import { CounterContext } from "./CounterContext"

const Fcomponent = () => {

  const {counter,setCounter} =useContext(CounterContext);
  return (
    <div>
      <h1>Functional-component</h1>
      <h1>{counter} </h1>
      <Fchild  counter ={counter}/>
    </div>
  )
}
//////////////////////////////



const Fchild = ({}) => {

  const {counter,setCounter} =useContext(CounterContext);
  return (
    <div>
      <hr />
      <h1>Function Child Component </h1>
      <h1>{counter} </h1>
    </div>

  )
}
export default Fcomponent