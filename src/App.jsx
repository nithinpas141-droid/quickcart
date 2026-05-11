import Header from './components/Header.jsx';
import ProductList from './components/ProductList.jsx';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <ProductList />
      </main>
    </div>
  );
}

export default App;
