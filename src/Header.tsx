import { Heart, ShoppingBag, SearchIcon, User, MenuIcon } from 'lucide-react';
import logo from './assets/niesa2.svg';

function Header() { 
  return (
    
    <header className="fixed top-4 left-0 w-full z-50 flex justify-center px-4">
      
      
      <nav className="flex items-center justify-between px-8 py-3 w-full max-w-6xl rounded-full bg-white border border-slate-100 shadow-[0_10px_25px_-5px_rgba(16,185,129,0.35)] transition-all duration-300">
        
        
        <div className="w-1/3 flex items-center justify-start">
          <button className="relative text-slate-700 hover:text-[#11676a] transition-colors duration-300">
            <MenuIcon className="h-7 w-7" />
          </button>
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
          <button className="relative text-slate-700 hover:text-[#11676a] transition-colors duration-300">
            <SearchIcon className="h-7 w-7" />
          </button>

          <button className="relative text-slate-700 hover:text-[#11676a] transition-colors duration-300">
            <Heart className="h-7 w-7" />
            <span className="absolute -top-2 -right-2 bg-[#11676a] text-white rounded-full h-4 w-4 flex items-center justify-center text-xs">0</span>
          </button>
          
          <button className="relative text-slate-700 hover:text-[#11676a] transition-colors duration-300">
            <User className="h-7 w-7" />
          </button>

          <button className="relative text-slate-700 hover:text-[#11676a] transition-colors duration-300">
            <ShoppingBag className="h-7 w-7" />
            <span className="absolute -top-2 -right-2 bg-[#11676a] text-white rounded-full h-4 w-4 flex items-center justify-center text-xs">0</span>
          </button>
        </div>

      </nav>
    </header>
  );
}

export default Header;