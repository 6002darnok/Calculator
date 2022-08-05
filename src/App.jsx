import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import './App.css'

function App() {
  const [numberOne, setNumberOne] = useState("0")
  const [numberTwo, setNumberTwo] = useState("0")
  const [result, setResult] = useState(true)
  const [character, setCharacter] = useState("+")
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
  ]

  const setValue = (key) => {
    console.log(key)
    setClearAll(false)
    if(key==="clear"){
      clear()
      return;
    }
    if(numbers.includes(key)){
      setResult(false)
      if(key==="."){
        if(!numberOne.includes(".")){
          setNumberOne(numberOne+key)
        }
      }else{
        if(!numberOne || !numberOne===0 || result){
          setNumberOne(key)
          setResult(false)
        }else{
          setNumberOne(numberOne+key)
        }
      }
    }
    if(characters.includes(key) || key==="Enter"){
      if(characters.includes(key)){
        setCharacter(key)
      }
      if(result) {return};
      switch(character){
        case "-":
            setNumberOne(parseFloat(numberTwo)-parseFloat(numberOne))
            setTwo(parseFloat(numberTwo)-parseFloat(numberOne))
          break;

        case "+":
            setNumberOne(parseFloat(numberTwo)+parseFloat(numberOne))
            setTwo(parseFloat(numberTwo)+parseFloat(numberOne))
          break;

        case "*":
            setNumberOne(parseFloat(numberTwo)*parseFloat(numberOne))
            setTwo(parseFloat(numberTwo)*parseFloat(numberOne))
          break;

        case "/":
            setNumberOne(parseFloat(numberTwo)/parseFloat(numberOne))
            setTwo(parseFloat(numberTwo)/parseFloat(numberOne))
          break;
        default:
          break;
      }
      setResult(true)
    }
    if(key==="Escape"){
      clear()
    }
    if(key==="Backspace"){
      if(numberOne){
        if(numberOne.length>1){
          setNumberOne(numberOne.slice(0, numberOne.length-1))
        }else{
          setNumberOne(0)
        }
      }
    }
  }

  const setTwo = (nmbr) =>{
    setNumberTwo(nmbr)
  }

  const keyUp = (e) => {
    setValue(e.key)
  }

  const clear = () =>{
    if(clearAll){
      setNumberOne("0")
      setNumberTwo("0")
      setCharacter("+")
    }else{
      setNumberOne("0")
      setCharacter("+")
    }
    setClearAll(!clearAll)
  }

  const list = [
    {small: true, label: "/"},
    {small: true, label: "7"},
    {small: true, label: "4"},
    {small: true, label: "1"},
    {small: true, label: "0"},
    {small: true, label: "*"},
    {small: true, label: "8"},
    {small: true, label: "5"},
    {small: true, label: "2"},
    {small: true, label: "."},
    {small: true, label: "-"},
    {small: true, label: "9"},
    {small: true, label: "6"},
    {small: true, label: "3"},
    {small: true, label: "clear"},
    {small: true, label: "🔙"},
    {small: false, label: "+"},
    {small: false, label: "enter"},
  ]

  return (
    <Body  tabIndex={0} onKeyUp={(e) => {keyUp(e)}}>
      <Box>
        <CalculatorBody>
          <CalculatorBodyTop>{numberTwo}</CalculatorBodyTop>
          <CalculatorBodyTop>{character}</CalculatorBodyTop>
          <CalculatorBodyMid>{numberOne}</CalculatorBodyMid>
          <CalculatorBodyBot>
            {list.map(ele => {
              return (
              <CalculatorButton 
                small={ele.small} 
                label={ele.label==="clear"? clearAll ? "AC" : "C" : ele.label} 
                onClick={() => setValue(ele.label==="🔙"? "Backspace" : ele.label==="enter"? "Enter" : ele.label)}
              ></CalculatorButton>)
            })}
          </CalculatorBodyBot>
        </CalculatorBody>
      </Box>
    </Body>
  )
}

const Body = styled.div`
  margin-top: -35px;
  margin-left: -102px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 99vw;
  height: 96vh;
`;

const Box = styled.div`
  background-color: #43bbff;
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
