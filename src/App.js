import './App.css';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux';
import store from './redux/store'
import BlogContent from './components/BlogContent';
import Footer from './components/Footer';
import Search from './components/Search';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <Search/>
        <BlogContent/>
        <Footer/>
      </div>
    </Provider>
    
  );
}

export default App;
