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
import  CategoryDrawer  from './CategoryDrawer.tsx';
import  AdminPanel  from './AdminPanel.tsx';
import { CartProvider } from './context/CartContext.tsx';
import { WishListProvider } from './context/WishListContexttemp.tsx';
import { useCart } from './context/CartContext.tsx';
import { useWishList } from './context/WishListContexttemp.tsx';
import { useCategory } from './context/CategoryContext.tsx';

function App() {
  // 1. Декларираме състоянието за количката
  const {isOpen: isCartOpen, openCart, closeCart} = useCart();

  const {isOpen: isWishListOpen, openWishList, closeWishList} = useWishList();

  const {isOpen: isCategoryOpen, openCategory, closeCategory} = useCategory();

  return (
    <>
    
      {/* 2. Подаваме функцията за отваряне към Header */}
      
      
      
      <Header onOpenCart={openCart}
        onOpenWishList={openWishList}
        onOpenCategory={openCategory}
        />

        
        

      {/* 3. Извикваме самия CartDrawer */}
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={closeCart}
      />

    

      {/* 3. Извикваме самия CartDrawer */}
      <WishListDrawer 
        isOpen={isWishListOpen} 
        onClose={closeWishList} 
        
      />

      <CategoryDrawer 
        isOpen={isCategoryOpen} 
        onClose={closeCategory} 
        
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