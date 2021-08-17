import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from "redux";

const counterReducer = (count = 0, action) => {
  switch(action.type) {
    case('INCREMENT'):
      return count + 1
    case('DECREMENT'):
      return count - 1
    default:
      return count
  }
}

const store = createStore(counterReducer)

const appRender = () => ReactDOM.render(
    <App store={store}/>,
    document.getElementById('root')
);

appRender()
store.subscribe(appRender)
