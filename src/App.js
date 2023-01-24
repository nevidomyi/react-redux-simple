import './App.css';
import Login from "./components/Login";
import Profile from "./components/Profile";
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const AppWrapper = styled.div`
  display: flex;
  justify-content:center;
  align-items: center;
`;

function App() {
  const { logged } = useSelector((state) => state.user.value);

  return (
    <AppWrapper>
      {logged ? <Profile/>: <Login/>}
    </AppWrapper>
  );
}

export default App;
