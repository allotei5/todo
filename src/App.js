import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { CategoryPage } from './Pages/CategoryPage';
import { HomePage } from './Pages/HomePage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/categories' element={<CategoryPage />} />
      </Routes>
    </>
  );
}

export default App;
