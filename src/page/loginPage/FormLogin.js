import React from 'react'
import img from '../../img/img_login.png'
import img2 from '../../img/img_fromlogin.png'
import { Button, Checkbox, Form, Input } from 'antd';

export default function FormLogin() {
    const onFinish = (values) => {
        console.log('Success:', values);
      };
    const onFinishFailed = (errorInfo) => {
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
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
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
