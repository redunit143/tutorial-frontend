import logo from './logo.svg';
import './App.css';

import StateView from './components/StateView';
import { useDispatch } from 'react-redux';
import * as actions from './actions';

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <StateView />
        <button
          onClick={() => {
            dispatch(actions.ACTION_ADD_ITEM);
          }}
        >Add Item</button>

        <button
          onClick={() => {
            dispatch(actions.ACTION_LOAD_ITEMS());
          }}
        >Load Items</button>

      </header>
    </div>
  );
}


export default App;
