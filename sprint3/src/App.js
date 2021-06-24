import Header from './components/Header';
import Message from './components/Message';
import ProductsPage from './components/ProductsPage';
import { MessageContextProvider } from './contexts/MessageContext';
import { CategoriesContextProvider } from './contexts/CategoriesContext';
import { FilterContextProvider } from './contexts/FilterContext';
// import { CategoriesService } from './services/CategoriesService';
import './reset.css';
import './App.css';
import { ProductsContextProvider } from './contexts/ProductsContext';

function App() {
  // const teste = CategoriesService();
  // console.log(teste);
  return (
    <div className="page-container">
      <MessageContextProvider>
        <CategoriesContextProvider>
          <Message />
          <ProductsContextProvider>
            <FilterContextProvider>
              <Header />
            </FilterContextProvider>
            <ProductsPage />
          </ProductsContextProvider>
        </CategoriesContextProvider>
      </MessageContextProvider>
    </div>
  );
}


export default App;
