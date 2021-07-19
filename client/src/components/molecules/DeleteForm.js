import React ,{useEffect}from 'react';
import TextField from '@material-ui/core/TextField'
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';


const useRowStyles = makeStyles({
    root: {
      '& > *': {
        borderBottom: 'unset',
      },
    },
  });

function DeleteForm({ row, isReply }) {

    const classes = useRowStyles();
    const [poemDelete, setPoemDelete] = React.useState({
        poemId: row.poemId, 
        replyId: row.poemId, 
        name: "", 
        password: ""
    })

    const callDeleteApi = async()=>{
        if(isReply) {
            console.log("댓글 삭제");
            const response = await fetch('/deleteReply');
            const body = await response.json();
            return body;
        } else {
            const response = await fetch('/deletePoem');
            const body = await response.json();
            return body;
        }
    }

    useEffect(()=>{  
        callDeleteApi()
        .then(res=>{

        })
        .catch(err=>console.log(err));
    }, []);

    const  handleDeleteChange = (e) => {
        let nextState = {
            poemId: row.poemId,
            replyId: row.poemId,
            name: poemDelete.name,
            password: poemDelete.password,
        };
        if(isReply) {
            nextState["replyId"] = row.replyId;
        }
        nextState[e.target.name] = e.target.value;
        setPoemDelete(nextState);
    } 

    const handleSubmit = (e) => {
        e.preventDefault();
        if(poemDelete.name==""||poemDelete.password==""){
            alert("삭제 정보를 입력해주세요.");
        }else if(poemDelete.name!=row.name || poemDelete.password != row.password) {
            alert("삭제 정보가 틀렸습니다.");
        }else{
            if(isReply) {
                alert('댓글이 삭제되었습니다!');
                axios.post('/deleteReply',{id:poemDelete.poemId, rpyId: poemDelete.replyId, name:poemDelete.name, pwd:poemDelete.password}) 
                .then(function (response) { console.log(response); }) 
                .catch(error => { console.log('error : ',error.response) });
            } else {
                alert('3행시가 삭제되었습니다!');
                axios.post('/deletePoem',{id:poemDelete.poemId, name:poemDelete.name, pwd:poemDelete.password}) 
                .then(function (response) { console.log(response); }) 
                .catch(error => { console.log('error : ',error.response) });
            }
        }
        window.location.reload();
    }

    return (
        <form onSubmit ={handleSubmit} className={classes.root}  noValidate autoComplete="off">
            <TextField id="outlined-basic" label="닉네임" name="name" variant="outlined" size="small" value={poemDelete.name} onChange={handleDeleteChange}/>
            <TextField id="outlined-basic" label="비밀번호" name="password" variant="outlined" size="small"value={poemDelete.password} onChange={handleDeleteChange}/>
            <div style={{display:'flex',justifyContent:'flex-end'}}>
                <button type="submit" >
                    삭제
                </button>
            </div>
        </form>
    )
}

export default DeleteForm;