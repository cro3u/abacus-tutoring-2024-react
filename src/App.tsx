import { useState, useEffect } from 'react'
import './App.scss'
import CustomInput from './components/CustomInput'
import { MoveMouse } from './composables/MoveMouse'
import { useAddComma } from './plugin/addDot'

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

const handleAlertBtn = () => {
  alert('안녕하세용')
}

function App() {
  const [inputValue, setInputValue] = useState<string | number>('')

  const handleInputValueChange = (value: string | number) => {
    setInputValue(value)
  }
  //
  const { enteredNum, handleAddComma } = useAddComma()
  //

  return (
    <>
      <input value={enteredNum} onChange={handleAddComma} />
      {/* ==================== */}
      <div className="flex flex-col items-start">
        <CustomInput
          label="input에 입력된 type 알아보기"
          onInputChange={handleInputValueChange}
          handleAlertBtn={handleAlertBtn}
        />
        <p className="flex">
          type: {inputValue ? <span>{typeof inputValue}</span> : ''}
        </p>
      </div>

      <div className="mt-10">
        <XYLocation />
      </div>
    </>
  )
}

export default App
