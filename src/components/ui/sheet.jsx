import React, { useState } from 'react'

const Sheet = ({ children, ...props }) => {
  const [open, setOpen] = useState(false)
  
  return (
    <div {...props}>
      {React.Children.map(children, child =>
        React.cloneElement(child, { open, setOpen })
      )}
    </div>
  )
}

const SheetTrigger = React.forwardRef(({ className = "", children, setOpen, ...props }, ref) => (
  <button
    ref={ref}
    className={`${className}`}
    onClick={() => setOpen && setOpen(true)}
    {...props}
  >
    {children}
  </button>
))
SheetTrigger.displayName = "SheetTrigger"

const SheetContent = React.forwardRef(({ className = "", children, open, setOpen, ...props }, ref) => (
  open ? (
    <>
      <div 
        className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
        onClick={() => setOpen && setOpen(false)}
      />
      <div
        ref={ref}
        className={`fixed right-0 top-0 z-50 h-full w-3/4 border-l bg-background p-6 shadow-lg transition ease-in-out sm:max-w-sm ${className}`}
        {...props}
      >
        <button
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100"
          onClick={() => setOpen && setOpen(false)}
        >
          ×
        </button>
        {children}
      </div>
    </>
  ) : null
))
SheetContent.displayName = "SheetContent"

export { Sheet, SheetTrigger, SheetContent }