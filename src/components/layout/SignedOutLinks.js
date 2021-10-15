import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/signup'>สมัครเป็นอาสาสมัคร</NavLink></li>
        <li><NavLink to='/signin'>เข้าสู่ระบบสำหรับอาสาสมัคร</NavLink></li>
        <li><NavLink to='/loginp'>เข้าสู่ระบบสำหรับคนที่ต้องการความช่วยเหลือ</NavLink></li>
      </ul>
    </div>
  )
}

export default SignedOutLinks