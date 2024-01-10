import { useState, useEffect } from 'react';

function MoveMouse() {
  const [xy, setXY] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: { clientX: number; clientY: number }) => {
    setXY({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    // return () => {
    //   window.removeEventListener('mousemove', handleMouseMove)
    // }
  }, [xy]);

  return { xy, setXY, handleMouseMove };
}

export default MoveMouse;
