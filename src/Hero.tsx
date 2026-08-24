function Hero() {
  return (
    <div className="hero text-center bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to AmazonShop</h1>
        <p className="text-lg mb-8">Your one-stop shop for all your needs!</p>
        <button className="bg-[#00c288] text-white px-6 py-3 rounded hover:bg-[#00a36c] transition-colors duration-300">
          Shop Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
