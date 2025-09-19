import React, { useState, useRef } from 'react'

const Slider = React.forwardRef(({ 
  className = '', 
  min = 0, 
  max = 100, 
  step = 1, 
  value = [50], 
  onValueChange, 
  ...props 
}, ref) => {
  const [sliderValue, setSliderValue] = useState(value)
  const sliderRef = useRef(null)
  
  const handleChange = (event) => {
    const newValue = [Number(event.target.value)]
    setSliderValue(newValue)
    if (onValueChange) onValueChange(newValue)
  }
  
  return (
    <div className={`relative flex w-full touch-none select-none items-center ${className}`} {...props}>
      <input
        ref={ref}
        type="range"
        min={min}
        max={max}
        step={step}
        value={sliderValue[0]}
        onChange={handleChange}
        className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer slider"
      />
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: hsl(var(--primary));
          cursor: pointer;
        }
        
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: hsl(var(--primary));
          cursor: pointer;
          border: none;
        }
      `}</style>
    </div>
  )
})
Slider.displayName = 'Slider'

export { Slider }