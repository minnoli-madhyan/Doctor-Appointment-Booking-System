import React, { useContext, useEffect, useState } from 'react'; 
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import Home from './Home';

function Login() {
  const [state, setState] = useState('Sign Up');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtpBox, setShowOtpBox] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();
  const { backendUrl, token, setToken } = useContext(AppContext);
  const onSubmitHandler = (event) => {
    event.preventDefault();

  }
  useEffect(() => {
    if (token) navigate('/');
  }, [token, navigate]);
  
  const verifyOtp = async () => {
    try {
      // Verify OTP entered by the user
      const response = await axios.post(`${backendUrl}/api/user/verify-otp`, { email, otp });
      if (response.data.success) {
        // OTP verified, redirect or login
        alert('Login successful');
      } else {
        setErrorMessage('Invalid or expired OTP');
      }
    } catch (error) {
      setErrorMessage('Error verifying OTP');
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg'>
        <p className='text-2xl font-semibold'>{state === 'Sign Up' ? 'Create Account' : 'Login'}</p>
        <p>Please {state === 'Sign Up' ? 'sign up' : 'log in'} to book an appointment</p>

        {state === 'Sign Up' && (
          <>
            <div className='w-full'>
              <p>Full Name</p>
              <input onChange={(e) => setName(e.target.value)} value={name} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="text" required />
            </div>
            <div className='w-full'>
              <p>Phone No</p>
              <input onChange={(e) => setPhone(e.target.value)} value={phone} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="tel" required />
            </div>
          </>
        )}

        <div className='w-full'>
          <p>Email</p>
          <input onChange={(e) => setEmail(e.target.value)} value={email} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="email" required />
        </div>
        <div className='w-full'>
          <p>Password</p>
          <input onChange={(e) => setPassword(e.target.value)} value={password} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="password" required />
        </div>
        <button
  type="button"
  className='bg-primary text-white w-full py-2 my-2 rounded-md text-base'
  onClick={async () => {
    try {
      if (state === "Sign Up") {
        // Sign Up API Call
        const { data } = await axios.post(`${backendUrl}/api/user/register`, { 
          name, 
          email, 
          password, 
          phone 
        });

        if (data.success) {
          toast.success("Account created successfully! Please log in.");
          setState("Login"); // Switch to login mode after successful signup
        } else {
          toast.error(data.message);
        }
      } else {
        // Login API Call
        const { data } = await axios.post(`${backendUrl}/api/user/login`, { 
          email, 
          password 
        });

        // if (data.success) {
        //   localStorage.setItem("token", data.token);
        //   setToken(data.token);
        //   navigate('/'); // Redirect to home page after login
        // } 
        if (data.success) {
          setShowOtpBox(true);  // Show OTP input box
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  }}
> 
  {state === "Sign Up" ? "Create Account" : "Login"}
</button>
     

        {state === 'Sign Up'
          ? <p>Already have an account? <span onClick={() => setState('Login')} className='text-primary underline cursor-pointer'>Login here</span></p>
          : <p>Create a new account? <span onClick={() => setState('Sign Up')} className='text-primary underline cursor-pointer'>Click here</span></p>
        }
        {showOtpBox && (
        <div>
          <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="Enter OTP" />
          <button onClick={verifyOtp}>Verify OTP</button>
        </div>
       )}
       {errorMessage && <p>{errorMessage}</p>}
      </div>
    </form>
  );
  
}

export default Login;