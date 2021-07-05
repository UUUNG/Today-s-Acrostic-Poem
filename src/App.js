import './App.css';
import MainPage from './pages/MainPage';
import User from './components/User'
//import User from './components/User'

import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';


const users = [
  {
    'id': 1,
    'name': '피구피규',
    'password': 'qwer',
    'word': '바나나',
    'poem': '바 바나나나 나 나나나나 나 나나나나',
    'like': '좋아요', 
    'reply': '댓글'
  },
  {
    'id': 2,
    'name': '밤부',
    'password': 'asdf',
    'word': '바나나',
    'poem': '바 바나나 나 나나나 나 나나나',
    'like': '좋아요', 
    'reply': '댓글'
  },
  {
    'id': 3,
    'name': '숨겨진트롤',
    'password': 'zxcv',
    'word': '바나나',
    'poem': '바 바나 나 나나 나 나나',
    'like': '좋아요', 
    'reply': '댓글'
  }
]
function App() {

  return (
    <div>
      <MainPage/>
      <h1>오늘은 바나나</h1>
      <h1>실시간 Best</h1>
      <Modal/>
      
    </div>
  );
}

function Modal() {
  const renderUsers = users.map(user => {
    return ( 
      <User user={user}/>
    );
  } );
  return (
    <Table>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>닉네임</TableCell>
            <TableCell>단어</TableCell>
            <TableCell>삼행시</TableCell>
            <TableCell>좋아요</TableCell>
            <TableCell>댓글</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {renderUsers}
        </TableBody>
      </Table>      
  )
}
export default App;

