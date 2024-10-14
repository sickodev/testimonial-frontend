import { cn } from '@/lib/utils'
import React from 'react'

const H2 = ({children,className}:{children:React.ReactNode, className?:string}) => {
  return (
    <h2 className={cn(className,"scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0")}>
      {children}
    </h2>
  )
}

export default H2