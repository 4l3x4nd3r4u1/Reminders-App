import { useEffect, useRef } from 'react'
import { animate } from 'framer-motion'

function Counter({ from, to }) {
  const ref = useRef();

  useEffect(() => {
    const controls = animate(from, to, {
      duration: 1.2,
      onUpdate(value) {
        ref.current.textContent = `${value.toFixed(0)}% complete`;
      }
    });
    return () => controls.stop();
  }, [from, to]);

  return <span ref={ref} className="text-sm px-1 block mb-1" />
}

export default Counter;
