import logo from './logo.svg';
import './App.css';
import { ColourChange } from './Components/ColourChange.js';
import { CatButton } from "./Components/CatButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <ColourChange/>
          <CatButton />
        </p>
        <a
          className="App-link"
          href="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F01%2F04%2Ffrisco-plaid-dog-knitted-hat.jpg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click to see a dog
        </a>

      </header>
    </div>
  );
}

export default App;
