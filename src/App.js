import "./App.css";

import { Header, Media } from "./components";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="left">
          <Header />
          <Media />
        </div>
        <div className="right">pog</div>
      </div>
    </div>
  );
}

export default App;
