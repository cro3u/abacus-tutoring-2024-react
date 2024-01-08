//  input의 type이 number가 아니라 text인 것에 주의합니다. (콤마가 문자열이기 때문)
// - input의 value를 지정할 때 addComma() 함수와 함께 입력합니다.
// - input의 value에 빈값("")도 함께 넣어줘야 에러가 나지 않습니다.
// - Typescript의 경우, event type인 React.ChangeEvent < HTMLInputElement > 를 꼭 넣어줍니다.
// 출처: https://anerim.tistory.com/243

import { useState, ChangeEvent } from 'react'

// dot 정규식
const num = 123123134
const commaNum = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
console.log(commaNum)
//

export function useAddComma() {
  const [enteredNum, setEnterdNum] = useState<string>('')

  const handleAddComma = (e: ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value
    const removedCommaValue: number = Number(value.replaceAll(',', ''))

    setEnterdNum(removedCommaValue.toLocaleString())
  }

  return { enteredNum, setEnterdNum, handleAddComma }
}
