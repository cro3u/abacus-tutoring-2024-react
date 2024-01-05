import { useState, ChangeEvent } from 'react'

export type CustomInputProps = {
  label?: string
  onInputChange: (value: string | number) => void
}

export default function CustomInput({
  label,
  onInputChange,
}: CustomInputProps) {
  const [inputValue, setInputValue] = useState<string | number>('')
  const handleInputValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    // let result
    // if (isNaN(+value)) {
    //   result = value
    // } else {
    //   result = +value
    // }

    const isNumeric = isNaN(+value) //true
    const result = isNumeric ? value : +value

    setInputValue(result)
    onInputChange(result)
  }
  return (
    <div className="input">
      <div className="input__wrap">
        {label === undefined ? '' : <label>{label}</label>}
        <input onChange={handleInputValueChange} value={inputValue} />
      </div>
    </div>
  )
}
