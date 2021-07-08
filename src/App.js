import './App.css';
import NoticePage from './pages/NoticePage';
import MainPage from './pages/MainPage';
import HOFPage from './pages/HOFPage';
import RankingPage from './pages/RankingPage';
import {BrowserRouter,Switch,Route} from "react-router-dom";
import HeadContainer from './components/organisms/HeadContainer';

function App() {

  return (
    <div>
      <HeadContainer />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainPage}/>
          <Route exact path="/NoticePage" component={NoticePage}/>
          <Route exact path="/HOFPage" component={HOFPage}/>
          <Route exact path="/RankingPage" component={RankingPage}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;

