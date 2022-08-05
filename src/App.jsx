import { useEffect, useState } from 'react'
import styled from 'styled-components';
import './App.css'

function App() {
  const [numberOne, setNumberOne] = useState(0)
  const [numberTwo, setNumberTwo] = useState(0)
  const [character, setCharacter] = useState("")
  const [clearAll, setClearAll] = useState(false)
  
  const numbers = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    ".",
  ]
  const characters = [
    "/",
    "*",
    "-",
    "+",
    "Enter",
  ]
  const special = [
    "Backspace",
    "Escape",
  ]

  const setValue = (key) => {
    setClearAll(false)
    if(numbers.includes(key)){
      if(key==="."){
        if(!numberOne.includes(".")){
          setNumberOne(numberOne+key)
        }
      }else{
        if(!numberOne || !numberOne===0){
          setNumberOne(key)
        }else{
          setNumberOne(numberOne+key)
        }
      }
    }
    if(characters.includes(key)){
      setCharacter(key)
      switch(key){
        case "-":
          setNumberTwo(`${numberOne.toString()}-`)
          break;
          
        case "+":
          setNumberTwo(`${numberOne.toString()}+`)
          break;

        case "*":
          setNumberTwo(`${numberOne.toString()}*`)
          break;

        case "/":
          setNumberTwo(`${numberOne.toString()}/`)
          break;

        default:
          break;
      }
      setNumberOne(0)
    }
    if(key==="Escape"){
      if(clearAll){
        setNumberOne(0)
        setNumberTwo(0)
        setCharacter("")
      }else{
        setNumberOne(0)
        setCharacter("")
      }
      setClearAll(!clearAll)
    }
    if(key==="Backspace"){
      if(numberOne){
        setNumberOne(numberOne.slice(0, numberOne.length-1))
      }
    }
  }

  const keyUp = (event) => {
    setValue(event.key)
  }

  const setClear = () =>{
    setClearAll(!clearAll)
  }

  const keyFunction = (key) => {
    console.log(key)
    keyUp(key)
  }

  return (
    <Box tabIndex={0} onKeyUp={(e) => {console.log(e);console.log("succes")}} >
      <CalculatorBody>
        <CalculatorBodyTop>{numberTwo}</CalculatorBodyTop>
        <CalculatorBodyMid>{numberOne}</CalculatorBodyMid>
        <CalculatorBodyBot>
          <CalculatorButton small={true} label={"/"}></CalculatorButton>
          <CalculatorButton small={true} label={"7"}></CalculatorButton>
          <CalculatorButton small={true} label={"4"}></CalculatorButton>
          <CalculatorButton small={true} label={"1"}></CalculatorButton>
          <CalculatorButton small={true} label={"0"}></CalculatorButton>
          <CalculatorButton small={true} label={"*"}></CalculatorButton>
          <CalculatorButton small={true} label={"8"}></CalculatorButton>
          <CalculatorButton small={true} label={"5"}></CalculatorButton>
          <CalculatorButton small={true} label={"2"}></CalculatorButton>
          <CalculatorButton small={true} label={"."}></CalculatorButton>
          <CalculatorButton small={true} label={"-"}></CalculatorButton>
          <CalculatorButton small={true} label={"9"}></CalculatorButton>
          <CalculatorButton small={true} label={"6"}></CalculatorButton>
          <CalculatorButton small={true} label={"3"}></CalculatorButton>
          <CalculatorButton small={true} label={`${clearAll ? "AC" : "C"}`} onClick={() => setClear()}></CalculatorButton>
          <CalculatorButton small={true} label={"-"}></CalculatorButton>
          <CalculatorButton small={false} label={"+"}></CalculatorButton>
          <CalculatorButton small={false} label={"enter"}></CalculatorButton>
        </CalculatorBodyBot>
      </CalculatorBody>
    </Box>
  )
}

const Box = styled.div`
  background-color: #FFBB34;
  width: 400px;
  height: 700px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const CalculatorBody = styled.div`
  width: 95%;
  height: 95%;
  background-color: rgba(0,0,0,0.7);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
const CalculatorBodyTop = styled.div`
  margin-top: 10px;
  margin-right: 10px;
  display: flex;
  justify-content: flex-end;
  font-size: 20px;
  width: 95%;
  height: 15%;

`;
const CalculatorBodyMid = styled.div`
  margin-right: 10px;
  display: flex;
  justify-content: flex-end;
  font-size: 30px;
  width: 95%;
  height: 10%;

`;
const CalculatorBodyBot = styled.div`
  margin: 2px;
  width: 95%;
  height: 75%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  flex-grow;
`;

const CalculatorButton = styled.div`
  background-color: rgba(0,0,0,0.7);
  margin: 2px;
  width: 85px;
  min-height: 85px;
  text-align: center;
  font-size: 30px;
  cursor: pointer;

  ${props => props.small ? "" : "flex-grow: 1;"}
  &:after{
    padding: ${props => props.small ?"40%": "100%"} 50%;
    content: "${props => props.label}";
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default App
