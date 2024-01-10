/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/require-default-props */
import { useState, ChangeEvent } from 'react';

export type CustomInputProps = {
  label?: string
  onInputChange?: (value: string | number) => void
  handleAlertBtn?: () => void
}

export default function CustomInput({
  label,
  onInputChange,
  handleAlertBtn,
}: CustomInputProps) {
  const [inputValue, setInputValue] = useState<string | number>('');
  const handleInputValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    const isNumeric = Number.isNaN(+value);
    // isNaN = type boolean => true = value: string, false = value: number

    const result = isNumeric ? value : +value;

    setInputValue(result);
    if (onInputChange) {
      onInputChange(result);
    }
  };
  return (
    <div className="input">
      <div className="input__wrap">
        {label === undefined ? '' : <label>{label}</label>}
        <input onChange={handleInputValueChange} value={inputValue} />
      </div>
      {handleAlertBtn && <button type="button" onClick={handleAlertBtn}>button</button>}
    </div>
  );
}
