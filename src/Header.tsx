import { Heart, ShoppingBag, SearchIcon, User, MenuIcon } from 'lucide-react';
import logo from './assets/niesalogin.svg';
import {Link} from 'react-router-dom';

function Header() { 
  return (
    
    <header className="fixed top-4 left-0 w-full z-50 flex justify-center px-4">
      
      
      <nav className="flex items-center justify-between px-8  w-full max-w-6xl rounded-2xl bg-[#235347]/25  backdrop-blur-md border border-[#163B32] shadow-[0_20px_50px_rgba(5,31,32,0.9)] transition-all duration-300">
        
        
        <div className="w-1/3 flex items-center justify-start">
          <ul className="flex items-center gap-6 uppercase text-[#DAF1DE] text-sm font-extrabold tracking-tight">
            <li>Категории</li>
            <li>За нас</li>
            <li>Контакти</li>
          </ul>
        </div>

        
        <div className="w-1/3 flex items-center justify-center">
          <a href="/" className="flex items-center">
            <img 
              src={logo} 
              alt="NIESA Logo" 
              className="h-28 w-auto object-contain" 
            />
          </a>
        </div>

        
        <div className="w-1/3 flex items-center justify-end gap-6">
          
          
          <button className="relative text-[#DAF1DE] hover:text-[#11676a] transition-colors duration-300">
            
            
            <SearchIcon className="h-7 w-7" />
          </button>

          <button className="relative text-[#DAF1DE] hover:text-[#11676a] transition-colors duration-300">
            <Heart className="h-7 w-7" />
            <span className="absolute -top-2 -right-2 bg-[#11676a] text-white rounded-full h-4 w-4 flex items-center justify-center text-xs">0</span>
          </button>
          
          <Link to="/login" className="relative text-[#DAF1DE] hover:text-[#11676a] transition-colors duration-300">
            <User className="h-7 w-7" />
          </Link>
          

          <button className="relative text-[#DAF1DE] hover:text-[#11676a] transition-colors duration-300">
            <ShoppingBag className="h-7 w-7" />
            <span className="absolute -top-2 -right-2 bg-[#11676a] text-white rounded-full h-4 w-4 flex items-center justify-center text-xs">0</span>
          </button>
        </div>

      </nav>
    </header>
  );
}

export default Header;