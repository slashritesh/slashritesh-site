import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

const MaxWidthContainer = ({children,className}:{children:ReactNode,className?:string}) => {
  return (
    <div className={cn("mx-5 sm:mx-20",className)}>
        {children}
    </div>
  )
}

export default MaxWidthContainer