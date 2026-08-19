

function Header() { 
    
    return (
        <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
            <h1 className="text-xl font-bold">Amazon Shop</h1>
            <nav >
                <ul  className="flex items-center gap-4">
                    <li><a href="#" className="hover:underline font-sans text-xl">Home</a></li>
                    <li><a href="#" className="hover:underline font-sans text-xl">Products</a></li>
                    <li><a href="#" className="hover:underline font-sans text-xl">About</a></li>

                        
                    
                </ul>
                
            </nav>
            <div className="flex  items-center gap-4 ">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Register</button>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Cart</button>
                        </div>
            
        </header>
    );
}

export default Header;