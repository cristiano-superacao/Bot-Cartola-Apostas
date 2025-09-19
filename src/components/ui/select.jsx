import React, { createContext, useContext, useState } from 'react'

const SelectContext = createContext()

const Select = ({ children, value, onValueChange, defaultValue, ...props }) => {
  const [selectedValue, setSelectedValue] = useState(value || defaultValue || '')
  const [isOpen, setIsOpen] = useState(false)
  
  const handleValueChange = (newValue) => {
    setSelectedValue(newValue)
    setIsOpen(false)
    if (onValueChange) onValueChange(newValue)
  }
  
  return (
    <SelectContext.Provider value={{ 
      selectedValue, 
      onValueChange: handleValueChange, 
      isOpen, 
      setIsOpen 
    }}>
      <div className="relative" {...props}>
        {children}
      </div>
    </SelectContext.Provider>
  )
}

const SelectTrigger = React.forwardRef(({ className = '', children, ...props }, ref) => {
  const { isOpen, setIsOpen } = useContext(SelectContext)
  
  return (
    <button
      ref={ref}
      className={`flex h-10 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      onClick={() => setIsOpen(!isOpen)}
      {...props}
    >
      {children}
    </button>
  )
})
SelectTrigger.displayName = 'SelectTrigger'

const SelectValue = React.forwardRef(({ className = '', placeholder = '', ...props }, ref) => {
  const { selectedValue } = useContext(SelectContext)
  
  return (
    <span ref={ref} className={className} {...props}>
      {selectedValue || placeholder}
    </span>
  )
})
SelectValue.displayName = 'SelectValue'

const SelectContent = React.forwardRef(({ className = '', children, ...props }, ref) => {
  const { isOpen } = useContext(SelectContext)
  
  if (!isOpen) return null
  
  return (
    <div
      ref={ref}
      className={`absolute top-full z-50 w-full rounded-md border bg-popover text-popover-foreground shadow-md animate-in fade-in-80 ${className}`}
      {...props}
    >
      <div className="p-1">
        {children}
      </div>
    </div>
  )
})
SelectContent.displayName = 'SelectContent'

const SelectItem = React.forwardRef(({ className = '', children, value, ...props }, ref) => {
  const { onValueChange, selectedValue } = useContext(SelectContext)
  const isSelected = selectedValue === value
  
  return (
    <div
      ref={ref}
      className={`relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${
        isSelected ? 'bg-accent text-accent-foreground' : ''
      } ${className}`}
      onClick={() => onValueChange(value)}
      {...props}
    >
      {children}
    </div>
  )
})
SelectItem.displayName = 'SelectItem'

export { Select, SelectContent, SelectItem, SelectTrigger, SelectValue }