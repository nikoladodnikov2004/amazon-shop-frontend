import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/niesalogin.svg';

export default function RegisterPage() {
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  // Handle registration logic here
  console.log('Registration attempted:', { FirstName, LastName, email, password });
};

return (
  <div className="min-h-screen bg-[#051F20] text-[#DAF1DE] pt-32 pb-16 px-6 flex justify-center items-center relative overflow-hidden font-sans">
    <div className='absolute w-[450px] h-[450px] bg-[#235347]/25 rounded-full blur-[130px] pointer-events-none'/>
    <div className="w-full max-w-md bg-[#0B2B26]/80 backdrop-blur-xl border border-[#163B32] p-8 sm:p-10 rounded-2xl shadow-[0_20px_50px_rgba(5,31,32,0.9)] relative z-10">
    
    
    <div className='text-center mb-8'>
        
        <img 
          src={logo} 
          alt="Niesa LogIn" 
          className="w-52 h-auto mb-4 mx-auto block"
        />
        <h2 className='text-3xl font-extrabold tracking-tight'>Добре дошли</h2>
        <p className='text-[#8EB69B] text-sm mt-3'>Регистрирайте се и влезте в своя профил за да продължите</p>
    </div>
    

    <form onSubmit={handleSubmit} className='space-y-5'>
      <div>
        <label className='block text-xs font-mono uppercase mb-2'>Име</label>
        <input
          type="firstName"
          value={FirstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder='First Name'
          required
          className='w-full bg-[#051F20] border border-[#163B32] rounded-xl px-4 py-3.5 text-[#DAF1DE] placeholder-[#8EB69B]/40 focus:outline-none focus:border-[#8EB69B] focus:ring-1 focus:ring-[#8EB69B] transition-all'
        />
      </div>
      <div>
        <label className='block text-xs font-mono uppercase mb-2'>Фамилия</label>
        <input
          type="lastName"
          value={LastName}
          onChange={(e) => setLastName(e.target.value)}
          required
          placeholder='Last Name'
           className='w-full bg-[#051F20] border border-[#163B32] rounded-xl px-4 py-3.5 text-[#DAF1DE] placeholder-[#8EB69B]/40 focus:outline-none focus:border-[#8EB69B] focus:ring-1 focus:ring-[#8EB69B] transition-all'
        />
      </div>
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
        <label className='block text-xs font-mono uppercase mb-2'>Парола</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder='Password'
           className='w-full bg-[#051F20] border border-[#163B32] rounded-xl px-4 py-3.5 text-[#DAF1DE] placeholder-[#8EB69B]/40 focus:outline-none focus:border-[#8EB69B] focus:ring-1 focus:ring-[#8EB69B] transition-all'
        />
      </div>
      <button type="submit" className='w-full py-4 mt-2 rounded-xl bg-[#235347] text-[#DAF1DE] font-semibold hover:bg-[#163B32] transition-all shadow-[0_4px_25px_rgba(35,83,71,0.5)] border border-[#8EB69B]/20 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer '>Регистрирай се</button>
    </form>
    <p className='text-center text-xs text-[#8EB69B] mt-8'>
      Вече имате профил? <Link to="/login" className='text-[#DAF1DE] font-semibold underline hover:text-[#8EB69B] transition-colors'>Влезте от тук</Link>
    </p>
  </div>
  </div>
);

}
