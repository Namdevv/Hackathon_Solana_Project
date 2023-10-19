import React, { useState } from 'react'
import img from '../../img/Japan_gate_water.jpg'
import img2 from '../../img/Japan_gate_water.jpg'
import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios'; // Thêm import axios


export default function FormLogin() {
    const onFinish = (values) => {
        var fullName = values.fullName 
        var MatKhau = values.password
        var TenUser = values.username
        var remk = values.rePassword
        
        if(MatKhau !=  remk){
            console.log('Failed:',values);
        }else{
            console.log('Success:', values);
            var taikhoan = {
                fullName : fullName,
                MatKhau : MatKhau,
                TenUser : TenUser,
            }
            axios({
                url: `${apiUrl}/food`,
                method: "POST",
                data: taikhoan,
              })
                .then(function (res) {
                    console.log('thành công')
                })
                .catch(function (err) {
                  console.log(`  🚀: themMonAn -> err`, err);
                });
        }
      };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    
    const onFinish2 = (values) => {
        var MatKhau = values.password
        var TenUser = values.username
        console.log('Success:', MatKhau);
        axios({
            url: `${apiUrl}/food`,
            method: "GET",
          })
            .then(function (res) {
                const userlist = res.data
                const user = userlist.find((user) => user.TenUser === TenUser && user.MatKhau === MatKhau);
                if (user) {
                    console.log('Đăng nhập thành công');
                    // Đăng nhập thành công, thực hiện các hành động sau khi đăng nhập thành công
                    
                } else {
                    console.log('Đăng nhập thất bại');
                    // Xử lý khi đăng nhập thất bại
                }
            })
            .catch(function (err) {
              console.log(`  🚀: err`, err);
            });

      };
    const onFinishFailed2 = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };    
    const handleChangeLogin = () =>{
        const bannerLogin = document.getElementById('banner-login');
        bannerLogin.style.transform = 'translateX(0px)'
    }
    const handleChangeLoginout = () =>{
        const bannerLogin = document.getElementById('banner-login');
        bannerLogin.style.transform = 'translateX(100%)'
    }

    const apiUrl = 'https://63b2c9aa5901da0ab36dbd06.mockapi.io'; 

    function fetchData(){
        axios({
            url: `${apiUrl}/food`,
            method: "GET",
          })
            .then(function (res) {
              console.log('thành công')
            })
            .catch(function (err) {
              console.log(`  🚀: err`, err);
            });
    }


    
    

        
  return (
    <div
        style={{
            backgroundImage : `url(${img})`,
            height : '100vh',
            backgroundRepeat : 'no-repeat',
            backgroundSize : '100% 100%',
            position :'relative',
            display : 'flex',
            justifyContent : 'center',
            alignItems : 'center'
        }}
    >
      <div
        style={{
            position:'relative',
            backgroundColor : 'rgba(255, 255, 255, 0.2)',
            width : '60%',
            height : '70%',
            display : 'flex',
            borderRadius : '5%',
            overflow : 'hidden',
            boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.5)',
        }}
      >
        {/* from login */}
        <div 
            style={{
                width : '50%',
                marginTop :'100px',
                display : 'flex',
                flexDirection :'column',
                alignItems :'center',
            }}
        >
            <div
                style={{
                    display : 'flex',
                    alignItems :'center',
                }}
            >
                <h1>Login</h1>
                <span
                    onClick={handleChangeLogin}
                    style={{
                        cursor : 'pointer',
                    }}
                >Đăng ký</span>
            </div>
            <Form
            name="basic"
            labelCol={{
            span: 8,
            }}
            wrapperCol={{
            span: 16,
            }}
            style={{
            maxWidth: 600,
            }}
            initialValues={{
            remember: true,
            }}
            onFinish={onFinish2}
            onFinishFailed={onFinishFailed2}
            autoComplete="off"
        >
            <Form.Item
            label="Username"
            name="username"
            rules={[
                {
                required: true,
                message: 'Please input your username!',
                },
            ]}
            >
            <Input />
            </Form.Item>

            <Form.Item
            label="Password"
            name="password"
            rules={[
                {
                required: true,
                message: 'Please input your password!',
                },
            ]}
            >
            <Input.Password />
            </Form.Item>

            <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
                offset: 8,
                span: 16,
            }}
            >
            <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
            wrapperCol={{
                offset: 8,
                span: 16,
            }}
            >
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
            </Form.Item>
            </Form>
        </div>
        <div 
            style={{
                width : '50%',
                marginTop :'100px',
                display : 'flex',
                flexDirection :'column',
                alignItems :'center',
            }}
        >
            <div
                style={{
                    display : 'flex',
                    alignItems :'center',
                }}
            >
                <h1>Đăng Ký</h1>
                <span
                    onClick={handleChangeLoginout}
                    style={{
                        cursor : 'pointer',
                    }}
                >Login</span>
            </div>
            <Form
            name="basic"
            labelCol={{
            span: 8,
            }}
            wrapperCol={{
            span: 16,
            }}
            style={{
            maxWidth: 600,
            }}
            initialValues={{
            remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >

            <Form.Item
            label="fullName"
            name="fullName"
            rules={[
                {
                required: true,
                message: 'Please input your name!',
                },
            ]}
            >
            <Input />
            </Form.Item>

            <Form.Item
            label="Username"
            name="username"
            rules={[
                {
                required: true,
                message: 'Please input your username!',
                },
            ]}
            >
            <Input />
            </Form.Item>

            <Form.Item
            label="Password"
            name="password"
            rules={[
                {
                required: true,
                message: 'Please input your password!',
                },
            ]}
            >
            <Input.Password />
            </Form.Item>

            <Form.Item
            label="RePassword"
            name="rePassword"
            rules={[
                {
                required: true,
                message: 'Please input your password!',
                },
            ]}
            >
            <Input.Password />
            </Form.Item>

            

            <Form.Item
            wrapperCol={{
                offset: 8,
                span: 16,
            }}
            >
            <Button
                type="primary" htmlType="submit">
                Submit
            </Button>
            </Form.Item>
            </Form>
        </div>
        <div
            id='banner-login'
            style={{
                position:'absolute',
                backgroundImage : `url(${img2})`,
                width : '50%',
                height : '100%',
                backgroundRepeat : 'no-repeat',
                backgroundSize : '100% 100%',
                transition :'all 1s',
                transform : 'translateX(100%)'
                
            }}
        >
            
        </div>
      </div>
    </div>
  )
}
