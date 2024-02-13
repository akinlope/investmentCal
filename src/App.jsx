import React, { useState } from 'react'
import { Header } from './Components/Header'
import { UserInput } from './Components/UserInput'
import { MainResult } from './Components/MainResult'

export default function App() {
  const [inputValues, setInputValues] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
});

const isValidInput = inputValues.duration >= 1

const handleChanges = (investmentIdentifier, invesmentValue) => {
    setInputValues(preValues => {
        return {
            ...preValues,
            [investmentIdentifier] : +invesmentValue
        }
    })
}
console.log(inputValues)
  return (
    <div>
      <Header />
      <UserInput inputValues={inputValues} userInput={handleChanges} />

      {isValidInput ? <MainResult inputValues={inputValues} /> : <p className=' center'>Ooops, Duration cannot be less than one!</p>}
    </div>
  )
}



// import { useState } from "react";
// import { Result } from "./Components/Result"

// function App() {
//   const [amount, setAmount] = useState();
//   const [period, setPeriod] = useState ();
//   const [result, setResult] = useState();

//   console.log(typeof(result))

//   function cal (){
//     if(amount < 0 || amount === 0 || period < 0 || period === 0) return setResult("Value inputted is not correct");

//     let sum = amount * (1 + 0.05) ** period - amount
//     // let sum = 1000000 * (1 + 0.05) ** 5 - 1000000
//     setResult(sum)
//     console.log("Inside function", sum);
//   }
//   // cal()
//   return (
//     <div>
//       <h1>React Investment Calculator</h1>
//     <input type="number" placeholder="Amount" onChange={(e)=> {setAmount(e.target.value)}}/>
//     <input type="number" placeholder="Year" onChange={(e)=> {setPeriod(e.target.value)}}/>
//     {/* <input type="number" /> */}
//     <div>
//       <button onClick={cal}>Cal</button>
//     </div>

// {
//   result !== undefined && result !== null ? (
//     <Result result={result} />
//   ) : ""
// }
//     </div>
//   )
// }

// export default App
