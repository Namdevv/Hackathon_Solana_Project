import React from 'react'
import img from '../../img/img_login.png'
import { NavLink } from 'react-router-dom'

export default function LoginPage() {
  return (
    <div
        style={{
            backgroundImage : `url(${img})`,
            height : '100vh',
            backgroundRepeat : 'no-repeat',
            backgroundSize : '100% 100%'
        }}
    >
        <NavLink to={'/login'} // navlink : NavLink to = {'/tên path bên app.js'}
          style={{
            position: 'absolute',
            bottom : '18%',
            left : '50%'
          }}
        >
          <i
            style={{
              color : 'black',
              fontSize : '40px',
              backgroundColor : 'white',
              padding : '30px 35px',
              borderRadius : '50%',
              border : ' 4px solid #D9D9D8',
              transition : 'all 0.5s',
            }}
            class="fa fa-angle-right"
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "red";
              e.target.style.transform = 'scale(1.1)'; // Thay đổi kích thước hoặc các thuộc tính khác khi hover
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'white'; // Trả lại màu sắc ban đầu
              e.target.style.transform = 'scale(1)'; // Trả lại kích thước ban đầu
            }}
            >
            
          </i>
        </NavLink>
    </div>
  )
}
