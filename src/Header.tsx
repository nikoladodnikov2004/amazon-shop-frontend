import {Heart, ShoppingBag, SearchIcon, User, MenuIcon} from 'lucide-react';

function Header() { 
    
    return (
        <header className="flex justify-between items-center p-6 bg-gray-800 text-white">
            
            <nav >
                <ul  className="flex items-center gap-4">
                    
                    
                    
                    <button className="relative text-gray-300 hover:text-[#00c288] transition-colors duration-300">
                                <MenuIcon className="h-6 w-6" />
                                
                            </button>

                        
                    
                </ul>
                
            </nav>
            <h1 className="text-xl font-bold">AmazonShop</h1>
            <div className="flex  items-center gap-7 ">
                                <button className="relative text-gray-300 hover:text-[#00c288] transition-colors duration-300">
                                <SearchIcon className="h-6 w-6" />
                                
                            </button>
                            <button className="relative text-gray-300 hover:text-[#00c288] transition-colors duration-300">
                                <Heart className="h-6 w-6" />
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-4 w-4 flex items-center justify-center text-xs">0</span>
                            </button>
                            
                            <button className="relative text-gray-300 hover:text-[#00c288] transition-colors duration-300">
                                <User className="h-6 w-6" />
                            </button>
                            <button className="relative text-gray-300 hover:text-[#00c288] transition-colors duration-300">
                                <ShoppingBag className="h-6 w-6" />
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-4 w-4 flex items-center justify-center text-xs">0</span>
                            </button>
                        </div>
            
        </header>
    );
}

export default Header;