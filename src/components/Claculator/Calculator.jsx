import React, { useState } from "react";
import styles from "./calculator.module.css";

const Calculator = () => {
  const buttonData = [
    7,
    8,
    9,
    "+",
    4,
    5,
    6,
    "-",
    1,
    2,
    3,
    "*",
    "C",
    0,
    "=",
    "/",
  ];

  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  return (
    <div className={styles.wrapper}>
      <h1>React Calculator</h1>
      <input type="text" value={input} />
      <div><p>{result}</p></div>
      <div className={styles.dailPad}>
        {buttonData.map((button) => (
          <CustomButton
            title={button}
            clickHandler={(event) => {
                const button = event.target.textContent;
                if(button == "="){
                    
                    try{
                        if(!input) throw "Error";
                        const result = eval(input);
                        setResult(result);
                    }catch {
                        setResult("Error");
                    }
                    
                }else if(button == "C"){
                    setInput("");
                    result("");
                }else
                    setInput((prv) => prv + button);
            }}
          />
        ))}
      </div>
    </div>
  );
};

const CustomButton = ({ title, clickHandler }) => {
  return <button onClick={clickHandler} className={styles.customButton}>{title}</button>;
};

export default Calculator;
