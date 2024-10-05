import { Button, Form, Input, Typography } from "antd";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {useSignInMutation} from "../../redux/api/authApi"
import { useDispatch } from "react-redux";
import {login} from "../../redux/slices/AuthSlices"
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;
type Tuser = {
  email: string;
  password: string;
  token: string;

};

const Login = () => {
  const dipatch = useDispatch()
  const navigate = useNavigate()

  const [signIn, { data, isSuccess, }] = useSignInMutation()
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if(isSuccess && data?.access_token) {
      dipatch(login({token: data?.access_token}))
      navigate('/register')
    }
  }, [ isSuccess, data?.access_token]);

  useEffect(() => {
    setIsVisible(true); 
  }, []);

  const onFinish = (values: Tuser) => {
    signIn (values)
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div
        className={`bg-white shadow-lg rounded-lg p-6 w-full max-w-md transition-all duration-700 ease-in-out transform ${
          isVisible ? 'animate-slide-in' : 'translate-y-[-50%] opacity-0'
        }`}
      >
        <Form
          name="basic"
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Link to='/'>
            <Title level={2} className="text-center mb-6 text-gray-700">
              Login
            </Title>
          </Link>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input className="rounded-md py-2" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password className="rounded-md py-2" />
          </Form.Item>

          <Form.Item>
            <Button 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md"
              type="primary"
              htmlType="submit"
            >
              Login
            </Button>
          </Form.Item>

          <Text className="block text-center text-gray-600 mt-4">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </Text>
        </Form>
      </div>
    </div>
  );
};

export default Login;
