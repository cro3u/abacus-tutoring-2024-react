import { useState, ChangeEvent } from 'react'

export type CustomInputProps = {
  type?: string
  label?: string
  initialValue?: string | number
}

export default function CustomInput({
  type = 'text',
  label,
}: CustomInputProps) {
  const [inputValue, setInputValue] = useState<string | number>('')
  const handelInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInputValue(type === 'number' ? +value : value)
  }
  return (
    <div className="input">
      <div className="input__wrap">
        {label === undefined ? '' : <label>{label}</label>}
        <input type={type} value={inputValue} onChange={handelInputChange} />
      </div>
      {inputValue ? <p className="input__type">{typeof inputValue}</p> : null}
    </div>
  )
}
