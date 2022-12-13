import logo from './logo.svg';
import { Route, BrowserRouter as Router, Link , Routes} from "react-router-dom";
import Login1 from './components/Login1'
import Login2 from './components/Login2'
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login1/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
