import { useState, useEffect } from 'react'
import './App.scss'
import CustomInput from './components/CustomInput'
import { MoveMouse } from './composables/MoveMouse'

function XYLocation() {
  const { xy, handleMouseMove } = MoveMouse()

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
  }, [handleMouseMove])

  return (
    <div>
      <p>X: {xy.x}</p>
      <p>Y: {xy.y}</p>
    </div>
  )
}

function App() {
  const [inputValue, setInputValue] = useState<string | number>('')

  const handleInputValueChange = (value: string | number) => {
    setInputValue(value)
  }

  return (
    <>
      <div className="flex flex-col items-start">
        <CustomInput
          label="input에 입력된 type 알아보기"
          onInputChange={handleInputValueChange}
        />
        <p className="flex">
          type: {inputValue ? <p>{typeof inputValue}</p> : ''}
        </p>
      </div>

      <div className="mt-10">
        <XYLocation />
      </div>
    </>
  )
}

export default App
