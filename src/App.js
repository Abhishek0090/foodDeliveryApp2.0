import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import publicRoutesList from './publicRoutesList';

function App() {
  return (
    <div className="App">
    <Routes>

      {publicRoutesList.map((element)=>{
        return <Route exact={element.exact} path={element.path} element={element.element}/>
      })}
    </Routes>
    </div>
  );
}

export default App;
