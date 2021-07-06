import './App.css';
import MainPage from './pages/MainPage';
import HOFPage from './pages/HOFPage';
import RankingPage from './pages/RankingPage';
import {BrowserRouter,Switch,Route} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainPage}/>
        <Route exact path="/HOFPage" component={HOFPage}/>
        <Route exact path="/RankingPage" component={RankingPage}/>
      </Switch>
    </BrowserRouter>
  );
}
export default App;

