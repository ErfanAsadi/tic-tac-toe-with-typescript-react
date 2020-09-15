import React from 'react';
import Style from './Layout.module.css'

interface Props{
    children : React.ReactNode,
}
  
export default function layout({children} : Props){ 
    return (
        <div className= {Style.body}>
            {children}
        </div>
    )
 }

