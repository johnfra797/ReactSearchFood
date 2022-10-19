import './App.css';
import { Provider } from 'react-redux';
import { NavBar } from './components';
import store from './redux/store';
import { Home } from './pages/Home';
function App() {
  return (
    <Provider store={store}>
      <NavBar/>
      <br/>
      <br/>
      <br/>
      <Home></Home>
    </Provider>
  )
}

export default App
