import { useState } from 'react';
import Header from './Header.tsx';
import Hero from './Hero.tsx';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage.tsx';
import CategorySection from './CategorySection.tsx';
import ProductSection from './ProductSection.tsx';
import ProductDetailsPage from './pages/ProductDetailsPage.tsx';
import  CartDrawer  from './CartDrawer.tsx'; // Импортираме Drawer-а
import  WishListDrawer  from './WishListDrawer.tsx';
import  AdminPanel  from './AdminPanel.tsx';
import { CartProvider } from './context/CartContext.tsx';
import { useCart } from './context/CartContext.tsx';

function App() {
  // 1. Декларираме състоянието за количката
  const {isOpen: isCartOpen, openCart, closeCart} = useCart();

  const [isWishListOpen, setIsWishListOpen] = useState(false);
  const [wishListItems, setWishListItems] = useState([]); // Тук ще държим продуктите

  return (
    <>
    
      {/* 2. Подаваме функцията за отваряне към Header */}
      
      
      
      <Header onOpenCart={openCart}
        onOpenWishList={() => setIsWishListOpen(true)}
        />
        

      {/* 3. Извикваме самия CartDrawer */}
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={closeCart}
      />

    

      {/* 3. Извикваме самия CartDrawer */}
      <WishListDrawer 
        isOpen={isWishListOpen} 
        onClose={() => setIsWishListOpen(false)} 
        wishListItems={wishListItems}
      />

      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Hero />
              <CategorySection />
              <ProductSection />
            </>
          } 
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
      </Routes>
      
    </>
    
  );
}

export default App;