import React, { useState } from 'react';
import Display from './Display';
import Button from './Button';
import './Calculator.css';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const inputDigit = (digit) => {
    if (waitingForOperand) {
      setDisplay(String(digit));
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? String(digit) : display + digit);
    }
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.');
    }
  };

  const clear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  const performOperation = (nextOperation) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = calculate(currentValue, inputValue, operation);

      setDisplay(String(newValue));
      setPreviousValue(newValue);
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  const calculate = (firstValue, secondValue, operation) => {
    switch (operation) {
      case '+':
        return firstValue + secondValue;
      case '-':
        return firstValue - secondValue;
      case '*':
        return firstValue * secondValue;
      case '/':
        return firstValue / secondValue;
      case '=':
        return secondValue;
      default:
        return secondValue;
    }
  };

  const handleButtonClick = (value) => {
    if (value >= '0' && value <= '9') {
      inputDigit(parseInt(value, 10));
    } else if (value === '.') {
      inputDecimal();
    } else if (value === 'C') {
      clear();
    } else if (value === '=') {
      performOperation('=');
    } else if (['+', '-', '*', '/'].includes(value)) {
      performOperation(value);
    }
  };

  const buttons = [
    'C', '/', '*', '-',
    '7', '8', '9', '+',
    '4', '5', '6', '',
    '1', '2', '3', '=',
    '0', '.', '', ''
  ];

  return (
    <div className="calculator">
      <div className="calculator-header">
        <h1>Calculator</h1>
      </div>
      <Display value={display} />
      <div className="calculator-keypad">
        {buttons.map((btn, index) => (
          btn !== '' && (
            <Button
              key={index}
              value={btn}
              onClick={() => handleButtonClick(btn)}
              className={
                btn === '=' ? 'equals' :
                ['+', '-', '*', '/'].includes(btn) ? 'operator' :
                btn === 'C' ? 'clear' : ''
              }
            />
          )
        ))}
      </div>
    </div>
  );
};

export default Calculator;
