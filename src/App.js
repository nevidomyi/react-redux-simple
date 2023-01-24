import { Provider } from 'react-redux';
import './App.css';
import Login from "./components/Login";
import Profile from "./components/Profile";
import { useSelector } from 'react-redux';

function App() {
  const { logged } = useSelector((state) => state.user.value);

  return (
    <div className="App">
      {logged ? <Profile/>: <Login/>}
    </div>
  );
}

export default App;
