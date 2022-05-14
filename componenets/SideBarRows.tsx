import React, { SVGProps } from 'react'
interface IconeNameType{
    Icon:(props: SVGProps<SVGSVGElement>) => JSX.Element,
    name:string
}

function SideRows({Icon,name}:IconeNameType) {
  return (
      <div className='flex'>
          <Icon className='h-10 w-10' />
          {name}
      </div>
       
    )
}

export default SideRows