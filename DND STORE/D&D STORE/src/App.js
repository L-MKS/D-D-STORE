import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './components/store';
import Routes from './routes';
import Options from './components/Header';
import './App.css';

const App = () => {
  
  const localCart = JSON.parse(localStorage.getItem('dioshopping: cart'))
  
  if(localCart !== null) {
    store.dispatch({type: 'CHANGE_CART', localCart})
  }
  
  return(
    <div className='page'>
    <Provider store={store}>
        <Router>
          <Options/>
          <div className="BigBox">
            <Routes/>
          </div>
        </Router>
    </Provider>
    </div>
  )
}

export default App;
