import React from 'react'
import { useSelector } from 'react-redux'
import { localUserServ } from '../../service/localUserServ';
import { Input, Space } from 'antd';
import { NavLink } from 'react-router-dom';


export default function HomePage() {
  let userInfo = useSelector((state) => {
    return state.userReducer.userInfor;
  })
  console.log(userInfo)
  let handleLogout = () => {
    localUserServ.remove();
    window.location.reload();
    // window.location.href="/login";
  }
  const { Search } = Input;
  let renderContent = () => {
    if(userInfo){
      return(
        <div
          style={{
            background: 'linear-gradient(to bottom, #cdffd8, #94b9ff)',
            width: '100%',
            height: '100vh',
            display : 'flex',
            alignItems : 'center',
            padding : '20px'
          }}
        >
          {/* navbar menu */}
          <div
            style={{
              display : 'flex',
            }}
          >
            <div
              style={{
                height : '94vh',
                backgroundColor : 'white',
                borderRadius : '20px',
                display : 'flex',
                flexDirection : 'column',
                justifyContent :'space-between',
              }}
            >
              {/* icon trên */}
              <div
                style={{
                  display : 'flex',
                  flexDirection :'column',
                  justifyContent : 'center',
                  alignItems : 'center',
                  fontSize : '24px',
                  
                }}
              >
                <NavLink to={''}>
                  <i class="fa fa-home"></i>
                </NavLink>
                <NavLink to={''}>
                  <i class="fa fa-star"></i>
                </NavLink>
                <NavLink to={''}>
                  <i class="fa fa-users"></i> 
                </NavLink>
                <NavLink to={''}>
                  <i class="fa fa-book-open"></i>
                </NavLink>
                <NavLink to={''}>
                  <i class="fa fa-medal"></i>
                </NavLink>
                <NavLink to={''}>
                  <i class="fa fa-cog"></i>
                </NavLink>
              </div>
              {/* icon dưới */}
              <div
                style={{
                  display: 'flex',
                  justifyContent : 'center',
                  margin : '10px 0'
                }}
              >
                <img
                  style={{
                    width : '60%',
                    borderRadius : '50%',

                  }}
                src={userInfo[0].avtImg} alt={userInfo[0].avtImg} />
              </div>
            </div>
            <div>
              <h3
                style={{
                  margin : '10px'
                }}
              > 
                HELLO {userInfo[0].fullName}
                <Space.Compact>
                  <Search  placeholder="input search text" allowClear />
                </Space.Compact>
                {/* icon */}
                <div>
                  <i class="fa fa-shopping-cart"></i>
                  <i class="fa fa-bell"></i>
                </div>
              </h3>
            </div>
          </div>
        </div>
      )
    }
  }
  return (
    <>
      {renderContent()}
    </>
  )
}
