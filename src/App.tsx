import React, { useState } from "react";
import { ACTIONS, NUMBERS } from "./actions";

interface NumberProps {
  number: number;
  handleOnClick: any;
}

interface ActionProps {
  action: string;
  signo: string;
}

const Number: React.FC<NumberProps> = ({ number, handleOnClick }) => {
  const [] = useState({});

  return (
    <button onClick={handleOnClick} value={number} className="number">
      {number}
    </button>
  );
};

const Actions: React.FC<ActionProps> = ({ action, signo }) => {
  return <button className={`${action} action`}>{signo}</button>;
};

const App = () => {
  const [number, setNumber] = useState([0]);
  const [isActionClicked, setIsAtionClicked] = useState(false);

  const handleOnClick = (event: any) => {
    setNumber((prev) => [...prev, event.target.value]);
  };

  return (
    <main className="container">
      <div className="grid-container">
        <div className="result">
          <span>{number}</span>
        </div>
        <div className="calculator-container">
          <div className="calculator">
            {NUMBERS.map((n) => (
              <Number
                number={n.number}
                key={n.number}
                handleOnClick={handleOnClick}
              />
            ))}
          </div>
          <div className="actions">
            {ACTIONS.map((a) => (
              <Actions action={a.action} signo={a.signo} key={a.action} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
