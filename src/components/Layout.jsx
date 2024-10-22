import React from 'react'

const Layout = ({ children, className}) => {
  return (
    <div className={`w-full h-full inline-block z-0 bg-dark px-6 md:px-12 lg:px-28 py-32 ${className}`}>
      {children}
    </div>
  )
}

export default Layout