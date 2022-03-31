import React from 'react'
import { ViewTaskMessage } from '../ViewTaskMessage/ViewTaskMessage'


export const ViewTaskMessages = ({messages}) => {   
    
  return (
        <div>
            {
                messages.map((value, index) => {
                    <p>hi</p>
                    console.log('hi')
                })
            }
        </div>  
    
  )
}
