import React from 'react'

function layout({children}) {
  return (
    <div className='flex items-center justify-center h-screen max-w-full'>{children}</div>
  )
}

export default layout