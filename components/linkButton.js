import React from 'react'
import Link from 'next/link'

const LinkButtonComponent = ({ 
  color = 'gray',
  text = '',
  width = 'full',
  page = '',
  
}) => {
  return (
    <Link href={`/${page}`}>
      <a className={`w-${width} flex justify-center items-center bg-${color}-700 rounded-md p-2 text-white font-bold uppercase text-sm hover:shadow-md`}>
        {text}
      </a>
    </Link>
  )
}

export default LinkButtonComponent
