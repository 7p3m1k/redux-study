import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Display from './components/Display';
import Subscribers from './components/Subscribers';
import Views from './components/Views';
import Comments from './components/Comments';
//npm install redux react-redux

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Comments />
        <Subscribers />
        <Views />
        <Display />
      </div>
    </Provider>
  );
}

export default App;
