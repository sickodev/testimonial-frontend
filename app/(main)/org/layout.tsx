import React from 'react'

const OrgLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='w-full h-full'>
      {children}
    </div>
  )
}

export default OrgLayout