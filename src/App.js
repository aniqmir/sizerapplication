import React from 'react';
import Chart from './screens/chart/chart.jsx';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';
function App() {

  const [group,setGroup] = React.useState(3);

  let tempArray = []
  let i = 1;


  function setGroupNumber(val) {
    if(val<0){
      alert('Enter a number greater than 0')
    }
    else if(val>9){
      setGroup(9)
    }
    else{
      setGroup(val)
    }
  }
  function display(){
    if(group===''){
      return(
        <Grid item xs={12} style={{transform:'translate(40%,100%)'}}>
          <Typography variant='h4'>Enter a Number</Typography>
        </Grid>
      )
    }
    else if(group===1){
      return(
        <Grid item xs={12}>
          <Chart/>
        </Grid>
      )
    }
    else{
      for(i;i<=group;i++){
        tempArray.push(<Chart key={i}/>)
      }
      return tempArray
    }
  }

  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <Container>
        <TextField
            id="outlined-number-native"
            fullWidth
            label="Group Number."
            value={group}
            onChange={(e)=>setGroupNumber(e.target.value)}
            helperText="Please select a number greater than 0"
            margin="normal"
            variant="outlined"
        />
        </Container>
      </Grid>
      {display()}
    </Grid>
  );
}

export default App;
