import { useState, useEffect } from 'react';
import './App.scss';
import CustomInput from './components/CustomInput';
import MoveMouse from './composables/MoveMouse';
import AddDot from './plugin/addDot';

function XYLocation() {
  const { xy, handleMouseMove } = MoveMouse();

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return (
    <div>
      <p>X: {xy.x}</p>
      <p>Y: {xy.y}</p>
    </div>
  );
}

const handleAlertBtn = () => {
  // eslint-disable-next-line no-alert
  alert('안녕하세용');
};

function App() {
  const [inputValue, setInputValue] = useState<string | number>('');

  const handleInputValueChange = (value: string | number) => {
    setInputValue(value);
  };
  //
  const { enteredNum, handleAddDot } = AddDot();
  //

  return (
    <div className="flex flex-col gap-5">
      <div>
        <input value={enteredNum} onChange={handleAddDot} />
      </div>
      <div>
        <CustomInput
          label="상위페이지에서 하위페이지로 함수 전달"
          handleAlertBtn={handleAlertBtn}
        />
        <CustomInput
          label="input에 입력된 type 알아보기"
          onInputChange={handleInputValueChange}
        />
        <p className="flex">
          type: {inputValue ? <span>{typeof inputValue}</span> : ''}
        </p>
      </div>

      <div>
        <XYLocation />
      </div>
    </div>
  );
}

export default App;
