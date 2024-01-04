import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.scss'
import CustomInput from './components/CustomInput'

function App() {
  const [num, setNum] = useState(0)

  const handleClick = () => {
    setNum(num + 1)
  }
  return (
    <>
      <CustomInput label="inputType: Text" />
      <CustomInput type="number" label="inputType: Number" />
      <div className="flex items-center gap-10 mt-10">
        <button onClick={handleClick}>
          Click Me !
          <span className="inline-block w-10 ml-2 border-2 border-slate-700">
            {num}
          </span>
        </button>
      </div>
    </>
  )
}

export default App
