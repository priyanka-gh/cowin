import './App.css';
import { Link } from 'react-router-dom';

function App() {

  return (
    <div className="app">
      <img src="images/homeLogo.png" alt="homelogo"></img>
        <div className="btn">
            <button>
              <Link to="/selection">
                FIND YOUR SLOT
              </Link>
            </button>
        </div>
    </div>
  );
}

export default App;
