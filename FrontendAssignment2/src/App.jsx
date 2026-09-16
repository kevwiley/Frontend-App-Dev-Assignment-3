import './App.css'
import ProductCard from './components/ProductCard'; 
import Header from "./components/Header";
import Hero from './components/Hero';
import Footer from './components/Footer';

//each card will be listed out vertically, with image, name, price, and description.
function App() {
  return (
    <div className="app">
      <Header storeName="TechShop" />
      <Hero title="High Quality Tech Products" subtitle="Search for Tech Products Perfect for your Setup." calltoaction="Browse All" />

      <h1>Great Deals</h1> 
      <ProductCard 
        name="Gaming Keyboard" 
        price="79.99" 
        image="https://placehold.co/600x400" 
        description="Full Sized Keyboard with RGB Lighting."
      />
      <ProductCard 
        name="Gaming Mouse" 
        price="49.99" 
        image="https://placehold.co/600x400" 
        description="Lightwieght Mouse with High Precision Input Options."
      />
      <ProductCard 
        name="Gaming Headset" 
        price="89.99" 
        image="https://placehold.co/600x400" 
        description="Headset with Advanced Sound and Microphone."
      />

      <Footer shopName="TechShop" email="test@test.test" phone="123-456-7890" address="1234 Test Lane" />

    </div>
  );
}

export default App;