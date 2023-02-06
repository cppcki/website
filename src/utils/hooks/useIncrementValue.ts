import { useEffect, useState, useRef } from "react";

function useIncrementValue(value: number, duration = 1500, speed = 1.5) {
  const [currentValue, setCurrentValue] = useState(value);
  const timestamp = useRef(Date.now());

  useEffect(() => {
    let render: any = null;
    clearInterval(render);

    render = setInterval(() => {
      const currentDuration = Date.now() - timestamp.current;
      if (currentDuration < duration) {
        const length = value.toString().length;
        let placeholder = "";
        for (let i = 0; i < length; i++) {
          placeholder += Math.floor(Math.random() * 9);
        }
        setCurrentValue(Number(placeholder));
      } else {
        clearInterval(render);
        setCurrentValue(value);
        return;
      }
    }, speed);

    return () => {
      clearInterval(render);
    }
  }, []);

  return currentValue;
}

export default useIncrementValue;