import { useState, useEffect } from 'react'

export function MoveMouse() {
  const [xy, setXY] = useState({ x: 0, y: 0 })

  // 변화된 값을 사용하려면 setXY값 필요
  const handleMouseMove = (e: { clientX: number; clientY: number }) => {
    setXY({ x: e.clientX, y: e.clientY })
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [xy])

  return { xy, setXY, handleMouseMove }
}
