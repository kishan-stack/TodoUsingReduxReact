import React from 'react'


function Button({
    children,
    className,
    type="button",
    textColor = "text-white",
    bgColor = "bg-blue-500",
    ...props
}) {
  return (
    <button className={ `${className} ${bgColor} ${textColor} px-4 py-2 rounded-lg`} {...props}>
        {children}
    </button>
  )
}

export default Button