import { useState } from 'react'
import './App.css'

function App() {
  const [display, setDisplay] = useState('0')
  const [previousValue, setPreviousValue] = useState(null)
  const [operation, setOperation] = useState(null)
  const [waitingForOperand, setWaitingForOperand] = useState(false)

  const handleNumber = (num) => {
    if (waitingForOperand) {
      setDisplay(String(num))
      setWaitingForOperand(false)
    } else {
      setDisplay(display === '0' ? String(num) : display + num)
    }
  }

  const handleDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.')
      setWaitingForOperand(false)
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.')
    }
  }

  const handleOperation = (nextOperation) => {
    const inputValue = parseFloat(display)

    if (previousValue === null) {
      setPreviousValue(inputValue)
    } else if (operation) {
      const currentValue = previousValue || 0
      const newValue = performOperation(currentValue, inputValue, operation)

      setDisplay(String(newValue))
      setPreviousValue(newValue)
    }

    setWaitingForOperand(true)
    setOperation(nextOperation)
  }

  const performOperation = (firstValue, secondValue, operation) => {
    switch (operation) {
      case '+':
        return firstValue + secondValue
      case '-':
        return firstValue - secondValue
      case '*':
        return firstValue * secondValue
      case '/':
        return firstValue / secondValue
      case '=':
        return secondValue
      default:
        return secondValue
    }
  }

  const handleEquals = () => {
    const inputValue = parseFloat(display)

    if (previousValue !== null && operation) {
      const newValue = performOperation(previousValue, inputValue, operation)
      setDisplay(String(newValue))
      setPreviousValue(null)
      setOperation(null)
      setWaitingForOperand(true)
    }
  }

  const handleClear = () => {
    setDisplay('0')
    setPreviousValue(null)
    setOperation(null)
    setWaitingForOperand(false)
  }

  const handlePercentage = () => {
    const value = parseFloat(display)
    setDisplay(String(value / 100))
  }

  const handleToggleSign = () => {
    const value = parseFloat(display)
    setDisplay(String(value * -1))
  }

  return (
    <div className="calculator">
      <div className="calculator-display">{display}</div>
      <div className="calculator-buttons">
        <button className="button function" onClick={handleClear}>
          AC
        </button>
        <button className="button function" onClick={handleToggleSign}>
          +/-
        </button>
        <button className="button function" onClick={handlePercentage}>
          %
        </button>
        <button className="button operator" onClick={() => handleOperation('/')}>
          ÷
        </button>

        <button className="button" onClick={() => handleNumber(7)}>
          7
        </button>
        <button className="button" onClick={() => handleNumber(8)}>
          8
        </button>
        <button className="button" onClick={() => handleNumber(9)}>
          9
        </button>
        <button className="button operator" onClick={() => handleOperation('*')}>
          ×
        </button>

        <button className="button" onClick={() => handleNumber(4)}>
          4
        </button>
        <button className="button" onClick={() => handleNumber(5)}>
          5
        </button>
        <button className="button" onClick={() => handleNumber(6)}>
          6
        </button>
        <button className="button operator" onClick={() => handleOperation('-')}>
          −
        </button>

        <button className="button" onClick={() => handleNumber(1)}>
          1
        </button>
        <button className="button" onClick={() => handleNumber(2)}>
          2
        </button>
        <button className="button" onClick={() => handleNumber(3)}>
          3
        </button>
        <button className="button operator" onClick={() => handleOperation('+')}>
          +
        </button>

        <button className="button zero" onClick={() => handleNumber(0)}>
          0
        </button>
        <button className="button" onClick={handleDecimal}>
          .
        </button>
        <button className="button operator" onClick={handleEquals}>
          =
        </button>
      </div>
    </div>
  )
}

export default App
