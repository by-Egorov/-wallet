import React, { useState, useEffect } from "react";
import Balance from "./components/Balance/Balance";
import Header from "./components/Header/Header";
import Operation from "./components/Operation/Operation";
import Story from "./components/Story/ Story";
import uuid from "react-uuid";
import ButtonOperation from "./components/Operation/ButtonOperation";

function App() {
  const [todo, setTodo] = useState(
    JSON.parse(localStorage.getItem("todo")) || []
  );

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  const [textValue, setTextValue] = useState("");
  const [numberValue, setNumberValue] = useState("");
  const money = "₽";
  const [date, setDate] = useState(
    JSON.parse(localStorage.getItem("date")) || ""
  );

  useEffect(() => {
    localStorage.setItem("date", JSON.stringify(date));
  }, [date]);

  const [countplus, setCountplus] = useState(
    JSON.parse(localStorage.getItem("countplus")) || 0
  );

  useEffect(() => {
    localStorage.setItem("countplus", JSON.stringify(countplus));
  }, [countplus]);
  const [countminus, setCountminus] = useState(
    JSON.parse(localStorage.getItem("countminus")) || 0
  );

  useEffect(() => {
    localStorage.setItem("countminus", JSON.stringify(countminus));
  }, [countminus]);
  const [balance, setBalance] = useState(
    JSON.parse(localStorage.getItem("balance")) || 0
  );

  useEffect(() => {
    localStorage.setItem("balance", JSON.stringify(balance));
  }, [balance]);

  function addTodo() {
    if (textValue && numberValue !== "") {
      setTodo([
        ...todo,
        {
          id: uuid(),
          title: textValue,
          data: new Date().toLocaleDateString(),
          num: numberValue,
          class: "receivedBy",
          classArrow: "fa fa-angle-double-up",
          classArrowColor: "up",
        },
      ]);
      setBalance(balance + Number(numberValue));
      setCountplus(countplus + Number(numberValue));
      setModalActive(false);
    } else {
      alert("Enter a description and amount");
    }
    setTextValue("");
    setNumberValue("");
  }

  function addTodoR() {
    if (textValue && numberValue !== "") {
      setTodo([
        ...todo,
        {
          id: uuid(),
          title: textValue,
          data: new Date().toLocaleDateString(),
          num: numberValue,
          class: "spentOn",
          classArrow: "fa fa-angle-double-down",
          classArrowColor: "down",
        },
      ]);
      setCountminus(countminus + Number(numberValue));
      setBalance(balance - Number(numberValue));
      setModalActive(false);
    } else {
      alert("Enter a description and amount");
    }
    setTextValue("");
    setNumberValue("");
  }
  function clearHistory() {
    if (window.confirm("You want to delete?")) {
      setTodo([]);
    }
  }
  function clearCalc() {
    if (window.confirm("You want to delete?")) {
      setBalance(0);
      setCountplus(0);
      setCountminus(0);
      setDate(new Date().toLocaleString());
    }
  }

  const [modalActive, setModalActive] = useState(false);

  return (
    <div className="wrapper">
      <Header clearCalc={clearCalc} date={date} />

      <Balance
        money={money}
        balance={balance}
        countplus={countplus}
        countminus={countminus}
      />

      <Story
        money={money}
        clearHistory={clearHistory}
        todo={todo}
        active={modalActive}
        setActive={setModalActive}
        addTodo={addTodo}
        addTodoR={addTodoR}
      />

      <Operation
        todo={todo}
        setTodo={setTodo}
        addTodo={addTodo}
        addTodoR={addTodoR}
        numberValue={numberValue}
        setNumberValue={setNumberValue}
        textValue={textValue}
        setTextValue={setTextValue}
        active={modalActive}
        setActive={setModalActive}
      />
      <ButtonOperation active={modalActive} setActive={setModalActive} />
    </div>
  );
}

export default App;
