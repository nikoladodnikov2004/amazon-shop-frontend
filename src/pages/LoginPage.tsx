import { Form } from 'lucide-react';
import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/niesalogin.svg';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Icon } from 'lucide-react';
import { EyeOff } from 'lucide-react';
import { Eye } from 'lucide-react';
import { useGoogleLogin } from '@react-oauth/google';
import { FaFacebook, FaApple, FaGoogle } from 'react-icons/fa';

export default function LoginPage() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword]= useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading]= useState(false);

  const {login}=useAuth();
  const navigate = useNavigate();

  const googleLogin=useGoogleLogin({
    onSuccess:(tokenResponse) =>{
      console.log('Google Token:', tokenResponse.access_token);
    },
    onError:() =>console.error('Google Login Failed'),
  });


const handleSubmit = async(e: React.FormEvent) => {
  e.preventDefault();
  setError(null);
  setLoading(true);

  try{
    await login(email, password);
    navigate('/');
  }catch(err:any){
    setError(err.response?.data?.message ||'Грешен имейл или парола!')
  }finally{
    setLoading(false)
  }
  
};

return (
    
  <div className="min-h-screen bg-[#051F20] text-[#DAF1DE] pt-32 pb-16 px-6 flex justify-center items-center relative overflow-hidden font-sans">
    <div className='absolute w-[450px] h-[450px] bg-[#235347]/25 rounded-full blur-[130px] pointer-events-none'/>
    <div className="w-full max-w-md bg-[#0B2B26]/80 backdrop-blur-xl border border-[#163B32] p-8 sm:p-10 rounded-2xl shadow-[0_20px_50px_rgba(5,31,32,0.9)] relative z-10">
    
    
    <div className='text-center mb-8'>
        
        <img 
          src={logo} 
          alt="Niesa LogIn" 
          className="w-52 h-auto mb-4 mx-auto block shadow-[0_4px_25px_rgba(35,83,71,0.5)] rounded-2xl"
        />
        <h2 className='text-3xl font-extrabold tracking-tight'>Добре дошли</h2>
        <p className='text-[#8EB69B] text-sm mt-3'>Влезте в своя профил, за да продължите</p>
    </div>

    <form onSubmit={handleSubmit} className='space-y-5'>
      <div>
        <label className='block text-xs font-mono uppercase mb-2'>Имейл Адрес</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='name@example.com'
          required
          className='w-full bg-[#051F20] border border-[#163B32] rounded-xl px-4 py-3.5 text-[#DAF1DE] placeholder-[#8EB69B]/40 focus:outline-none focus:border-[#8EB69B] focus:ring-1 focus:ring-[#8EB69B] transition-all'
        />
      </div>
      <div>
        <div className='flex items-center justify-between'>
        <label className='text-xs font-mono uppercase mb-2'>Парола</label>
        
        <p className='text-xs font-mono  mb-2 '>
          <Link to="/" className='text-[#DAF1DE] font-semibold underline hover:text-[#8EB69B] transition-colors'>Забравена парола?</Link>
        </p>
        </div>
        <input
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder='Password'
           className='w-full pr-12 bg-[#051F20] border border-[#163B32] rounded-xl px-4 py-3.5 text-[#DAF1DE] placeholder-[#8EB69B]/40 focus:outline-none focus:border-[#8EB69B] focus:ring-1 focus:ring-[#8EB69B] transition-all'
        />
        <button
          type="button"
          onClick={()=>setShowPassword(!showPassword)}
          className='absolute right-14 mt-4 text-[#8EB69B] hover:text-[#DAF1DE] transition-colors cursor-pointer'
        >
          {showPassword ? <EyeOff size={20}/> : <Eye size={20} />}
        </button>
          </div>
          
      <button type="submit" className='w-full py-4 mt-2 rounded-xl bg-[#235347] text-[#DAF1DE] font-semibold hover:bg-[#163B32] transition-all shadow-[0_4px_25px_rgba(35,83,71,0.5)] border border-[#8EB69B]/20 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer '>Влез в профила</button>
    </form>
    
    <div className='flex items-center justify-center gap-6 my-5'>
      <button
      type='button'
      onClick={() => googleLogin} 
      className='w-12 h-12 rounded-full bg-[#235347] border border-[#8EB69B]/20 hover:bg-[#0B3B2F] transition-all shadow-[0_4px_25px_rgba(35,83,71,0.5)] flex items-center justify-center'>
        <FaGoogle size={25}></FaGoogle>
      </button>
      

      <button
      type='button'
      onClick={() => googleLogin} 
      className='w-12 h-12 rounded-full bg-[#235347] border border-[#8EB69B]/20 hover:bg-[#0B3B2F] transition-all shadow-[0_4px_25px_rgba(35,83,71,0.5)] flex items-center justify-center'>
        <FaApple size={25}></FaApple>
      </button>

      <button
      type='button'
      onClick={() => googleLogin} 
      className='w-12 h-12 rounded-full bg-[#235347] border border-[#8EB69B]/20 hover:bg-[#0B3B2F] transition-all shadow-[0_4px_25px_rgba(35,83,71,0.5)] flex items-center justify-center'>
        <FaFacebook size={25}></FaFacebook>
      </button>
    </div>

    <p className='text-center text-xs text-[#8EB69B] mt-8'>
      Нямате профил? <Link to="/register" className='text-[#DAF1DE] font-semibold underline hover:text-[#8EB69B] transition-colors'>Регистрирайте се</Link>
    </p>
  </div>
  </div>
);

}