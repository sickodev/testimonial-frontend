import { cn } from '@/lib/utils'
import React from 'react'

const P = ({children,className}:{children:React.ReactNode, className?:string}) => {
  return (
    <p className={cn(className, "leading-7")}>
    {children}
  </p>
  )
}

export default P