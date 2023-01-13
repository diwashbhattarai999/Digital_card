import React from 'react'
import Image from '../image/profile.jpg'


function profile() {
  return (
    <div className='profile'>
        <img src={Image} alt="profile" />
    </div>
  )
}

export default profile