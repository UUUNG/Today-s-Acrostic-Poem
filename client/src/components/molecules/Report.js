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

function Report({ row }) {
    const classes = useRowStyles();
    const [report, setReport] = React.useState({ replyId: row.replyId, poemId: row.poemId, reason: ""});
    const handleReport = (e) => {
        const {name, value } = e.target;
        setReport( {...report, [name]: value});
    } 

    const handleSubmit = (e) => {
        if(report.reason===""){
            alert("신고 사유를 입력해주세요");
        }else if(report.reason.length < 10){
            alert("10글자 이상 입력해주세요");
        }else{
            alert("신고가 완료 되었습니다.");
            axios.post('/Report',{replyId : report.replyId, poemId : report.poemId, reason : report.reason}) 
            .then(function (response) { console.log(response); }) 
            .catch(error => { console.log('error : ',error.response) });
            window.location.reload();
        }
    }

    return (
        <form onSubmit ={handleSubmit} className={classes.root}  noValidate autoComplete="off">
            <TextField id="outlined-basic" label="신고사유" name="reason" variant="outlined" size="small" value={report.reason} onChange={handleReport}/>
            <div style={{ margin:5,display:'flex-end'}}>
                <button type="submit" >
                    신고
                </button>
            </div>
        </form>
        
    )
}

export default Report;