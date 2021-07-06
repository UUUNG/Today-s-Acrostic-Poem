import './App.css';
import MainPage from './pages/MainPage';
import HOFPage from './pages/HOFPage';

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainPage}/>
        <Route exact path="/HOFPage" component={HOFPage}/>
      </Switch>
    </BrowserRouter>
  );
}
export default App;

