import "./Home.css";
import logo from '../../logo.svg';
import { Link } from "react-router-dom";
const Home: React.FC = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <Link to={'/rockets'}>Rockets</Link>
    </header>
  );
};

export default Home;