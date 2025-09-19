import React from 'react'

const Slider = React.forwardRef(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`relative flex w-full touch-none select-none items-center ${className}`}
    {...props}
  >
    <input
      type="range"
      className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700"
      {...props}
    />
  </div>
))
Slider.displayName = "Slider"

export { Slider }