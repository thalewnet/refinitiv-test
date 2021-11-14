import React, { useEffect, useState } from "react";
import styled from "styled-components";
const Decoration = styled.div`
  .container {
    display: flex;
    height: 100vh;
  }
  .box1 {
    border: 1px solid black;
    width: 200px;
  }
  .box3 {
    border: 1px solid black;
    width: 300px;
  }
  .box2 {
    width: calc(100% - 500px);
    min-width: 100px;
  }
  .text-error {
    color: red;
  }
  @media (max-width: 600px) {
    .container {
      overflow-x: scroll;
    }
  }
`;

function First() {
  const [input, setInput] = useState("");
  const [method, setMethod] = useState("prime");

  const handleBlur = () => {
    if (+input < 0) {
      setInput(1);
      return;
    }
    setInput((curr) => Math.round(curr));
  };
  const handleChangeInput = (e) => {
    if (!isNaN(+e.target.value) || e.target.value === "-") {
      setInput(e.target.value);
    }
  };

  const handleselectmethod = (e) => {
    setMethod(e.target.value);
  };
  const isPrimeCheck = (num) => {
    if (num === 1 || num === 0) return "false";
    for (let i = 2; i < num; i++) if (num % i === 0) return "false";
    return "true";
  };
  function isSquare(n) {
    return n > 0 && Math.sqrt(n) % 1 === 0;
    // let s = parseInt(Math.sqrt(x));
    // return s * s == x;
  }
  const isFibonacciCheck = (num) => {
    if (isSquare(5 * (num * num) - 4) || isSquare(5 * (num * num) + 4)) {
      return "true";
    } else {
      return "false";
    }
  };
  return (
    <Decoration>
      <div className="container">
        <div className="box1">
          <input
            type="text"
            placeholder="Enter number"
            value={input}
            onChange={handleChangeInput}
            onBlur={handleBlur}
          />
        </div>
        <div className="box2">
          <select onChange={handleselectmethod}>
            <option value="prime">isPrime</option>
            <option value="fibo">isFibonacci</option>
          </select>
        </div>
        <div className="box3">
          {method === "prime" ? (
            <span>{isPrimeCheck(input)}</span>
          ) : (
            <span>{isFibonacciCheck(input)}</span>
          )}
        </div>
      </div>
    </Decoration>
  );
}

export default First;
