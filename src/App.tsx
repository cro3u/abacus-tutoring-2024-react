import { useState } from 'react'
import './App.scss'
import CustomInput from './components/CustomInput'

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
    </>
  )
}

export default App
