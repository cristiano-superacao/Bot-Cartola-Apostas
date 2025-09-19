import React from 'react'

const Sheet = React.forwardRef(({ children, ...props }, ref) => (
  <div ref={ref} {...props}>
    {children}
  </div>
))
Sheet.displayName = 'Sheet'

const SheetTrigger = React.forwardRef(({ className = '', children, ...props }, ref) => (
  <button
    ref={ref}
    className={className}
    {...props}
  >
    {children}
  </button>
))
SheetTrigger.displayName = 'SheetTrigger'

const SheetContent = React.forwardRef(({ className = '', children, ...props }, ref) => (
  <div
    ref={ref}
    className={`fixed inset-y-0 right-0 z-50 h-full w-3/4 border-l bg-background p-6 shadow-lg transition ease-in-out sm:max-w-sm ${className}`}
    {...props}
  >
    {children}
  </div>
))
SheetContent.displayName = 'SheetContent'

export { Sheet, SheetContent, SheetTrigger }