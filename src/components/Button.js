import React from 'react'

function Button() {
  return (
    <div className='btn'>
        <a className='btn1' href='/'>
            <box-icon type='solid' name='envelope'></box-icon>
            <p>Email</p> 
        </a>
        <a className='btn2' href='/'>
            <box-icon type='solid' name='envelope' color='white'></box-icon>
            <p>Linkedin</p> 
        </a>
    </div>
  )
}

export default Button