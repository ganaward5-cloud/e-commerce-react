
import ProductCard from "../components/ProductCard";
import '../styles/HomePage.css';
import UseProduct from "../hooks/useProduct";
export default function HomePage() {

  const products=UseProduct()
  return (
    
    <div className="home-page">
    
      <main className="home-content">

        {/* Flash Sale */}
        <section className="flash-sale-section">

          <div className="section-header">
            <div className="section-title-wrapper">
              <span className="section-label">Today's Deals</span>

              <h1 className="section-title">
                Flash Sales
              </h1>
            </div>

            <div className="flash-sale-timer">
              <div className="timer-item">
                <span className="timer-number">03</span>
                <span className="timer-label">Days</span>
              </div>

              <span className="timer-separator">:</span>

              <div className="timer-item">
                <span className="timer-number">23</span>
                <span className="timer-label">Hours</span>
              </div>

              <span className="timer-separator">:</span>

              <div className="timer-item">
                <span className="timer-number">19</span>
                <span className="timer-label">Minutes</span>
              </div>

              <span className="timer-separator">:</span>

              <div className="timer-item">
                <span className="timer-number">56</span>
                <span className="timer-label">Seconds</span>
              </div>
            </div>

            <div className="section-navigation">
              <button className="navigation-btn">←</button>
              <button className="navigation-btn">→</button>
            </div>
          </div>

          <div className="products-grid flash-sale-products">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>

          <button className="view-products-btn">
            View All Products
          </button>

        </section>


        {/* Categories */}
        <section className="categories-section">

          <div className="section-heading">
            <span className="section-label">Categories</span>

            <h2 className="section-title">
              Browse By Category
            </h2>
          </div>

          <div className="categories-grid">

            <div className="category-card">
              <span className="category-icon">📱</span>
              <span className="category-name">Phones</span>
            </div>

            <div className="category-card">
              <span className="category-icon">💻</span>
              <span className="category-name">Computers</span>
            </div>

            <div className="category-card">
              <span className="category-icon">⌚</span>
              <span className="category-name">SmartWatch</span>
            </div>

            <div className="category-card">
              <span className="category-icon">📷</span>
              <span className="category-name">Camera</span>
            </div>

            <div className="category-card">
              <span className="category-icon">🎧</span>
              <span className="category-name">HeadPhones</span>
            </div>

            <div className="category-card">
              <span className="category-icon">🎮</span>
              <span className="category-name">Gaming</span>
            </div>

          </div>

        </section>


        {/* Best Selling */}
        <section className="best-selling-section">

          <div className="section-header">

            <div className="section-heading">
              <span className="section-label">This Month</span>

              <h2 className="section-title">
                Best Selling Products
              </h2>
            </div>

            <button className="view-all-btn">
              View All
            </button>

          </div>

          <div className="products-grid best-selling-products">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>

        </section>

      </main>
    </div>
  );
}