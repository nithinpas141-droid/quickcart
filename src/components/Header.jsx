import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="header-title">QuickCart</h1>
    </header>
  );
}

export default Header; 
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="search-input"
          />
          {searchTerm && (
            <button 
              className="clear-search"
              onClick={() => onSearchChange('')}
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>
        
        {/* Navigation Menu */}
        <nav className="header-nav">
          <Link to="/" className="nav-link">All Products</Link>
          {categories.map(cat => (
            <Link 
              key={cat} 
              to={`/category/${cat}`} 
              className="nav-link"
            >
              {cat}
            </Link>
          ))}
          <Link to="/cart" className="nav-link">Cart</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
