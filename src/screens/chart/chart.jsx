import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';         
import { Typography,Button } from '@material-ui/core';
import RadioGroup from './radiogroup/radiogroup.jsx';
import FindSize from './findsize/findsize.jsx';

const genders = [
    {
        value:'',
        label:''
    },
    {
      value: 'female',
      label: 'Female',
    },
    {
        value: 'male',
        label: 'Male',
      },
  ];

  const brands = [
    {
        value:'',
        label:''
    },
    {
      value: 'Marching Show Concepts',
      label: 'Marching Show Concepts',
    },
    {
        value: 'Style Plus',
        label: 'Style Plus',
      },
  ];
  
  const sizeStyle = [
    {
        value:'',
        label:''
    },
      {
          value:'2XS',
          label:'2XS'
      },
      {
        value:'XS',
        label:'XS'
    },
    {
        value:'SM',
        label:'SM'
    },
    {
        value:'MD',
        label:'MD'
    },
    {
        value:'LG',
        label:'LG'
    },
    {
        value:'XL',
        label:'XL'
    },
    {
        value:'2XL',
        label:'2XL'
    },
    {
        value:'3XL',
        label:'3XL'
    },
    {
        value:'4XL',
        label:'4XL'
    },
    {
        value:'5XL',
        label:'5XL'
    },
  ]
 
  const sizeMarch = [
      {
          value:'',
          label:''
      },
      {
          value:'XSMALL',
          label:'Xsmall'
      },
      {
        value:'SMALL',
        label:'Small'
    },
    {
        value:'MEDIUM',
        label:'Medium'
    },
    {
        value:'LARGE',
        label:'LARGE'
    },
    {
        value:'XLARGE',
        label:'XLARGE'
    },
    {
        value:'2X',
        label:'2X'
    },
    {
        value:'3X',
        label:'3X'
    },
    {
        value:'4X',
        label:'4X'
    },
  ]

  const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
    //   flexWrap: 'wrap',
    },
    gridContainer:{
        transform:'translate(0%,20%)'
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    dense: {
      marginTop: theme.spacing(2),
    },
    menu: {
      width: 200,
    },
    button:{
        textTransform:'none',
        marginBottom:theme.spacing(1)
    }
  }));


function Chart(){

    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const [values, setValues] = useState({
        gender:'female',
        girth: '',
        bust: '',
        waist: '',
        hip: '',
        inseam:'',
        overarm:'',
        bestfit:'',
        size:''
      });


      const [radioValue, setradioValue] = React.useState('in');

    
      const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
      };

      
      function handleRadioChange(event) {
        setradioValue(event.target.value);
      }

      function handleOpen(){
          console.log(values.bestfit.length)
          if(values.bust.length>0 && values.waist.length>=0 ){
                   setOpen(true)
          }
          else if(values.bust.length===0 && values.waist.length===0 && values.bestfit.length>0 && values.size.length>0){
              setOpen(true)
          }
         else{
             alert('Complete the Fields')
         }
      }

      function clear(){
          setValues({
            gender:'female',
            girth: '',
            bust: '',
            waist: '',
            hip: '',
            inseam:'',
            overarm:'',
            bestfit:'',
            size:''
          })
          setradioValue('in')
      }
    return(
        <Container>
            <Grid container spacing={3}   className={classes.gridContainer}>
                        <Grid item xs={12} align='center'>
                                <Typography variant='h5'>Enter your sizes to find your sizes in the brands we deal in</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <form  className={classes.container} noValidate autoComplete="off" style={{border:'1px solid grey',borderRadius:'10px',backgroundColor:'#E9E4F0'}}>
                                {/* <Container> */}
                                    <Grid item xs={12} container spacing={1}>
                                    <Grid item xs={10} sm={12} md={4}>
                                <TextField
                                id="outlined-select-gender-native"
                                select
                                fullWidth
                                label="Gender/Dept."
                                value={values.gender}
                                className={classes.textField}
                                onChange={handleChange('gender')}
                                SelectProps={{
                                native: true,
                                }}
                                helperText="Please select your preference"
                                margin="normal"
                                variant="outlined"
                            >
                                {genders.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                                ))}
                            </TextField>
                            </Grid>

                            <Grid item xs={6} sm={4} md={1}>
                            <TextField
                                id="girth"
                                label="Girth"
                                className={classes.textField}
                                value={values.girth}
                                onChange={handleChange('girth')}
                                margin="normal"
                                variant="outlined"
                            />
                            </Grid>

                            <Grid item xs={6} sm={4} md={1}>
                            <TextField
                                id="bust"
                                label="Bust"
                                className={classes.textField}
                                value={values.bust}
                                onChange={handleChange('bust')}
                                margin="normal"
                                variant="outlined"
                            />
                            </Grid>
                            
                            <Grid item xs={6} sm={4} md={1}>
                            <TextField
                                id="waist"
                                label="Waist"
                                className={classes.textField}
                                value={values.waist}
                                onChange={handleChange('waist')}
                                margin="normal"
                                variant="outlined"
                            />
                            </Grid>

                            <Grid item xs={6} sm={4} md={1}>
                            <TextField
                                id="hip"
                                label="Hip"
                                className={classes.textField}
                                value={values.hip}
                                onChange={handleChange('hip')}
                                margin="normal"
                                variant="outlined"
                            />
                            </Grid>

                            <Grid item xs={6} sm={4} md={1}>
                            <TextField
                                id="inseam"
                                label="Inseam"
                                className={classes.textField}
                                value={values.inseam}
                                onChange={handleChange('inseam')}
                                margin="normal"
                                variant="outlined"
                            />
                            </Grid>

                            <Grid item xs={6} sm={4} md={1}>
                            <TextField
                                id="overarm"
                                label="Overarm"
                                className={classes.textField}
                                value={values.overarm}
                                onChange={handleChange('overarm')}
                                margin="normal"
                                variant="outlined"
                            />
                            </Grid>
                            <Grid item xs={1} sm={6} md={6}>

                            </Grid>
                            <Grid item xs={11} sm={6} md={6}>
                                <RadioGroup value={radioValue} handleChange={(e)=>handleRadioChange(e)}/>
                            </Grid>

                            <Grid item xs={1} sm={6} md={6}>

                            </Grid>

                            <Grid item xs={11} sm={6} md={6} container>
                                <Grid item xs={4} >
                                    
                                </Grid>
                                <Grid item xs={1}>
                                    <Typography variant='h4'>OR</Typography>
                                </Grid>
                                <Grid item xs={4} >
                                
                                </Grid>
                            </Grid>

                            {/* <Grid item xs={11} sm={6} md={6} container>
                                <Grid item xs={4} >
                                    <Divider/>
                                </Grid>
                                <Grid item xs={1}>
                                    <Typography variant='h6'>OR</Typography>
                                </Grid>
                                <Grid item xs={4} >
                                    <Divider/>
                                </Grid>
                            </Grid> */}
                              <Grid item xs={1} sm={6} md={6}>

                              </Grid>

                            <Grid item xs={11} sm={6} md={4} container spacing={0}>
                                <Grid item xs={12} sm={6} md={8}  >
                                <TextField
                                id="outlined-select-brand-native"
                                select
                                fullWidth
                                label="Brands."
                                value={values.bestfit}
                                className={classes.textField}
                                onChange={handleChange('bestfit')}
                                SelectProps={{
                                native: true,
                                }}
                                helperText="Please select your preference"
                                margin="normal"
                                variant="outlined"
                            >
                                {brands.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                                ))}
                            </TextField>
                                </Grid>
                                <Grid item  xs={12} sm={6} md={4} >
                                {
                                    (values.bestfit.toUpperCase()==='MARCHING SHOW CONCEPTS') ? (
                                        <TextField
                                        id="outlined-select-size-native"
                                        select
                                        fullWidth
                                        label="Size."
                                        value={values.size}
                                        className={classes.textField}
                                        onChange={handleChange('size')}
                                        SelectProps={{
                                        native: true,
                                        }}
                                        helperText="Please select your preference"
                                        margin="normal"
                                        variant="outlined"
                                    >
                                        {sizeMarch.map(option => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                        ))}
                                    </TextField>
                                    ) : (
                                        <TextField
                                        id="outlined-select-size-native"
                                        select
                                        fullWidth
                                        label="Size"
                                        value={values.size}
                                        className={classes.textField}
                                        onChange={handleChange('size')}
                                        SelectProps={{
                                        native: true,
                                        }}
                                        helperText="Please select your preference"
                                        margin="normal"
                                        variant="outlined"
                                    >
                                        {sizeStyle.map(option => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                        ))}
                                    </TextField>
                                    )
                                }
                                {/* <TextField
                                id="size"
                                label="Size"
                                className={classes.textField}
                                value={values.size}
                                onChange={handleChange('size')}
                                margin="normal"
                                variant="outlined"
                                /> */}
                                </Grid>
                            </Grid>
                            
                            <Grid item xs={1} sm={6} md={6}>

                            </Grid>

                            <Grid item xs={9} sm={6} md={4} container>
                                <Grid item xs={1} sm={3} md={3}></Grid>
                                <Grid item xs={4} sm={3} md={3}>
                                <Button className={classes.button} onClick={()=>clear()}>> clear</Button>
                                </Grid>
                                <Grid item xs={7} sm={6} md={6}>
                                    <FindSize values={values} clear={()=>clear()} open={open} handleOpen={(e)=>handleOpen(e)} setClose={setOpen}/>
                                    {/* <Button variant='contained' className={classes.button} fullWidth={true}>Find my size</Button> */}
                                </Grid>
                            </Grid>
                            </Grid>
                                {/* </Container> */}
                            </form>
                    </Grid>
            </Grid>
        </Container>
    )
}

export default Chart;