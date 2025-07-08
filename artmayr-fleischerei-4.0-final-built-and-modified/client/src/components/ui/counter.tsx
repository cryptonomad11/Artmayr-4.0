import { useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface CounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

export default function Counter({ end, duration = 2000, prefix = "", suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const startValue = 0;
    
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const currentCount = Math.floor(progress * (end - startValue) + startValue);
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, duration, isInView]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}
