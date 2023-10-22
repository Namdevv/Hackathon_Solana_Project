import React, { useState } from 'react'
import img from '../../img/img_login.png'
import img2 from '../../img/img_fromlogin.png'
import { Button, Checkbox, Form, Input, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { userServ } from '../../service/userServ';
import { localUserServ } from '../../service/localUserServ';
import { useDispatch } from 'react-redux';
import {setLoginAction, setSignUpAction } from '../../redux/action/userAction'



export default function FormLogin() {
    let navigate = useNavigate();
    let dispatch = useDispatch();
    const onFinish = (values) => {
        var MatKhau = values.password
        var remk = document.getElementById('repassword').value
        console.log(remk);
        
        if(MatKhau !=  remk){
            console.log('Failed:',values);
        }else{
            userServ.postSignUp(values)
                    .then((res) => {
                        message.success("SignUp thành công");
                        // lưu thông tin user vào localStorage
                        localUserServ.set(res.data);
                        dispatch(setSignUpAction(
                            res.data.content
                        ));
                        navigate("/");
                        console.log(res)
                    })
                    .catch((err) => {
                        message.error("đăng kí thất bại");
                        console.log(err);
                    })
        }
      };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    
    const onFinish2 = (values) => {
        userServ.postLogin(values)
                .then((res) =>{
                    message.success("Login succes");
                    // lưu vào localstorage
                    console.log('User data:', res.data.content);
                    localUserServ.set(res.data);
                    dispatch(setLoginAction(
                        res.data.content
                    ));
                    navigate("/home")
                    console.log(res);
                })
                .catch((err) =>{
                    message.error("login failed")
                    console.log(err)
                })
        
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
            backgroundColor : 'white',
            width : '60%',
            height : '70%',
            display : 'flex',
            borderRadius : '5%',
            overflow : 'hidden',
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
            
            rules={[
                {
                required: true,
                message: 'Please input your password!',
                },
            ]}
            >
            <Input.Password id='repassword' />
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
