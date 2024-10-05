import { Button, Form, Input, Typography } from "antd";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useRegisterMutation } from "../../redux/api/authApi";
import { useDispatch } from "react-redux";
import { register } from "../../redux/slices/AuthSlices";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

type Tuser = {
  name: string;
  email: string;
  password: string;
  avatar: string;
  token: string;
};

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [registerUser, { data, isSuccess }] = useRegisterMutation(); 
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const onFinish = async (values: Tuser) => {
    try {
      const response = await registerUser(values).unwrap();
      console.log("Registration Success:", response);
    } catch (err) {
      console.error("Registration Failed:", err);
    }
  };
  useEffect(() => {
    if (isSuccess) {
      dispatch(register({token: data?.access_token}));
      navigate('/');
    }
  }, [isSuccess, data, dispatch, navigate]);

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };



  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div
        className={`bg-white shadow-lg rounded-lg p-6 w-full max-w-md transition-all duration-700 ease-in-out transform ${
          isVisible ? "animate-slide-in" : "translate-y-[-50%] opacity-0"
        }`}
      >
        <Form
          className="p-4 w-full"
          name="basic"
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Title level={2} className="text-center">
            Sign Up
          </Title>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="Photo URL"
            name="avatar"
            rules={[{ required: true, message: "Please input your avatar!" }]}
          >
            <Input type="url" />
          </Form.Item>
          <Form.Item>
            <Button className="w-full" type="primary" htmlType="submit">
              Sign Up
            </Button>
          </Form.Item>
          <Text>
            Already have an account? <Link to="/login">Log in</Link>
          </Text>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
