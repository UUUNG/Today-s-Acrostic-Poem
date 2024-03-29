import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button'


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
})); 


function PoemPostContainer({keyword}) {
  const classes = useStyles();
  const [values, setValues] = React.useState({ id: "", password: "", word:keyword,poem_1:"",poem_2:"",poem_3:"" });

  const  handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  } 

  const handleSubmit= (e) => {
    if(values.id===""||values.password===""||values.word===""||(values.poem_1==""&&values.poem_2==""&&values.poem_3=="")){
      if(values.poem_1==""&&values.poem_2==""&&values.poem_3==""){
        alert("3행시를 입력해주세요!");
      }
      else{
        alert('모두 입력해주세요!');
      }
      console.log(values);
      e.preventDefault();

    }else{
      alert('3행시가 등록되었습니다!');
      axios.post('/postAcrostic',{id:values.id, pwd:values.password, word:values.word, poem_1:values.poem_1, poem_2:values.poem_2, poem_3:values.poem_3}) 
      .then(function (response) { console.log(response); }) 
      .catch(error => { console.log('error : ',error.response) });

    }
  } 

  return (
    <div style={{ backgroundColor: '#cfe8fc'}}>
      <form onSubmit ={handleSubmit} className={classes.root}  noValidate autoComplete="off">
        <TextField id="outlined-basic" label="닉네임" name="id" variant="outlined" size="small" value={values.id} onChange={handleChange}/>
        <TextField id="outlined-basic" label="비밀번호" name="password" variant="outlined" size="small"value={values.password} onChange={handleChange}/>
        <div style={{ margin:10,display:'flex', flexDirection:'column'}}>
          <TextField  InputProps={{
            startAdornment: <InputAdornment position="start">{keyword.split('')[0]}</InputAdornment>,
            }} required id="standard-required" name="poem_1" value={values.poem_1} onChange={handleChange}/>
          <TextField  InputProps={{
            startAdornment: <InputAdornment position="start">{keyword.split('')[1]}</InputAdornment>,
            }} required id="standard-required" name="poem_2" value={values.poem_2} onChange={handleChange}/>
          <TextField  InputProps={{
            startAdornment: <InputAdornment position="start">{keyword.split('')[2]}</InputAdornment>,
            }} required id="standard-required" name="poem_3" value={values.poem_3} onChange={handleChange}/>
        </div>
        <div style={{display:'flex',justifyContent:'flex-end'}}>
          <Button 
            color="primary"
            size="small"
            type="submit"
            >
            등록
          </Button>
        </div>
      </form>

    </div>
  )
}
export default PoemPostContainer;