import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import { CakeContainer } from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';

// React Redux - https://www.youtube.com/playlist?list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK
// React Redux - React Redux Setup - https://www.youtube.com/watch?v=0bVP5cYhMuU
// React Redux - Store - https://www.youtube.com/watch?v=271tQskDiCg
// To study definition about Redux please check ReduxDefinition.js file under src folder

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer/>
        <IceCreamContainer />
        <NewCakeContainer/>
        <ItemContainer cake />
        <ItemContainer/>
        {/*<CakeContainer/>
          <UserContainer/>
         */}
      </div>
    </Provider>
  );
}

export default App;
