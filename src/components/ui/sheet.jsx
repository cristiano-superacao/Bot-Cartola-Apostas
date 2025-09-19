import React, { createContext, useContext, useState } from 'react'

const SheetContext = createContext()

const Sheet = ({ children, open, onOpenChange, ...props }) => {
  const [isOpen, setIsOpen] = useState(open || false)
  
  const handleOpenChange = (newOpen) => {
    setIsOpen(newOpen)
    if (onOpenChange) onOpenChange(newOpen)
  }
  
  return (
    <SheetContext.Provider value={{ isOpen, onOpenChange: handleOpenChange }}>
      <div {...props}>
        {children}
      </div>
    </SheetContext.Provider>
  )
}

const SheetTrigger = React.forwardRef(({ className = '', asChild = false, ...props }, ref) => {
  const { onOpenChange } = useContext(SheetContext)
  
  const handleClick = () => {
    onOpenChange(true)
  }
  
  const Comp = asChild ? 'span' : 'button'
  
  return (
    <Comp
      ref={ref}
      className={className}
      onClick={handleClick}
      {...props}
    />
  )
})
SheetTrigger.displayName = 'SheetTrigger'

const SheetContent = React.forwardRef(({ className = '', side = 'right', children, ...props }, ref) => {
  const { isOpen, onOpenChange } = useContext(SheetContext)
  
  if (!isOpen) return null
  
  const sideClasses = {
    right: 'right-0 top-0 h-full border-l',
    left: 'left-0 top-0 h-full border-r',
    top: 'top-0 left-0 w-full border-b',
    bottom: 'bottom-0 left-0 w-full border-t'
  }
  
  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
        onClick={() => onOpenChange(false)}
      />
      {/* Sheet Content */}
      <div
        ref={ref}
        className={`fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out ${sideClasses[side]} ${className}`}
        {...props}
      >
        {children}
      </div>
    </>
  )
})
SheetContent.displayName = 'SheetContent'

export { Sheet, SheetTrigger, SheetContent }