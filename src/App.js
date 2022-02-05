import './App.css';

import { Header } from './components';
import { Body } from './components/body';

import background from './assets/images/background.jpg';
function App(){
  const rightStyles = {
    backgroundImage: `url(${background})` 
  }
  return (
    <div className="App">
      <div className="container">
        <div className="left">
          <div className="header">
          <Header />
          </div>
          <div className="body">
            <Body />
          </div>
        </div>
        <div style={rightStyles} className="right">
        </div>
      </div>
    </div>
  );
}

export default App;
