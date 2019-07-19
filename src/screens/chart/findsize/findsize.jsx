import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles(theme => ({
    button:{
        textTransform:'none',
        marginBottom:theme.spacing(1)
    }
  }));


  const femaleSizes = [
    {
      chest:29,
      waist:21,
      hip:30.5,
      name:'2XS',
      brandname:'Style Plus'
    },
    {
      chest:31,
      waist:23,
      hip:32.5,
      name:'XS',
      brandname:'Style Plus'
    },
    {
      chest:33,
      waist:25,
      hip:34.5,
      name:'SM',
      brandname:'Style Plus'
    },
    {
      chest:36,
      waist:28,
      hip:37.5,
      name:'MD',
      brandname:'Style Plus'
    },
    {
      chest:39,
      waist:31,
      hip:40.5,
      name:'LG',
      brandname:'Style Plus'
    },
    {
      chest:42,
      waist:34,
      hip:43.5,
      name:'XL',
      brandname:'Style Plus'
    },
    {
      chest:46,
      waist:38,
      hip:47.5,
      name:'2XL',
      brandname:'Style Plus'
    },
    {
      chest:50,
      waist:42,
      hip:51.5,
      name:'3XL',
      brandname:'Style Plus'
    },
    {
      chest:54,
      waist:46,
      hip:55.5,
      name:'4XL',
      brandname:'Style Plus'
    },
    {
      chest:58,
      waist:50,
      hip:59.5,
      name:'5XL',
      brandname:'Style Plus'
    },
     
    {
      girth:54,
      bust:31,
      waistb:25,
      hip:33,
      inseam:30,
      overseam:20,
      name:'xsmall',
      brandname:'Marching Show Concepts'
    },
    {
      girth:58,
      bust:34,
      waistb:25,
      hip:36,
      inseam:32,
      overseam:21,
      name:'small',
      brandname:'Marching Show Concepts'
    },
    {
      girth:62,
      bust:37,
      waistb:28,
      hip:39,
      inseam:33,
      overseam:22,
      name:'medium',
      brandname:'Marching Show Concepts'
    },
    {
      girth:66,
      bust:40,
      waistb:31,
      hip:42,
      inseam:34,
      overseam:23,
      name:'large',
      brandname:'Marching Show Concepts'
    },
    {
      girth:70,
      bust:43,
      waistb:34,
      hip:45,
      inseam:34,
      overseam:23,
      name:'xlarge',
      brandname:'Marching Show Concepts'
    },
    {
      girth:74,
      bust:46,
      waistb:38,
      hip:49,
      inseam:34,
      overseam:23,
      name:'2X',
      brandname:'Marching Show Concepts'
    },
    {
      girth:78,
      bust:49,
      waistb:42,
      hip:53,
      inseam:34,
      overseam:23,
      name:'3x',
      brandname:'Marching Show Concepts'
    },
    {
      girth:82,
      bust:52,
      waistb:46,
      hip:57,
      inseam:34,
      overseam:23,
      name:'4x',
      brandname:'Marching Show Concepts'
    },
        
      ]

const maleSizes = [
{
  chest:33.5,
  waist:26,
  hip:33,
  name:'2XS',
  brandname:'Style Plus'
},
{
  chest:35.5,
  waist:28,
  hip:35,
  name:'XS',
  brandname:'Style Plus'
},
{
  chest:37.5,
  waist:30,
  hip:37,
  name:'SM',
  brandname:'Style Plus'
},
{
  chest:40.5,
  waist:33,
  hip:40,
  name:'MD',
  brandname:'Style Plus'
},
{
  chest:43.5,
  waist:36,
  hip:43,
  name:'LG',
  brandname:'Style Plus'
},
{
  chest:46.5,
  waist:39,
  hip:46,
  name:'XL',
  brandname:'Style Plus'
},
{
  chest:50.5,
  waist:43,
  hip:50,
  name:'2XL',
  brandname:'Style Plus'
},
{
  chest:54.5,
  waist:47,
  hip:54,
  name:'3XL',
  brandname:'Style Plus'
},
{
  chest:58.5,
  waist:51,
  hip:58,
  name:'4XL',
  brandname:'Style Plus'
},
{
  chest:62.5,
  waist:55,
  hip:62.5,
  name:'5XL',
  brandname:'Style Plus'
},
 
{
  girth:58,
  bust:33,
  waistb:27,
  hip:33,
  inseam:30,
  overseam:20,
  name:'xsmall',
  brandname:'Marching Show Concepts'
},
{
  girth:62,
  bust:37,
  waistb:30,
  hip:36,
  inseam:32,
  overseam:21,
  name:'small',
  brandname:'Marching Show Concepts'
},
{
  girth:66,
  bust:40,
  waistb:32,
  hip:39,
  inseam:33,
  overseam:22,
  name:'medium',
  brandname:'Marching Show Concepts'
},
{
  girth:70,
  bust:43,
  waistb:34,
  hip:42,
  inseam:34,
  overseam:23,
  name:'large',
  brandname:'Marching Show Concepts'
},
{
  girth:74,
  bust:46,
  waistb:38,
  hip:45,
  inseam:34,
  overseam:23,
  name:'xl',
  brandname:'Marching Show Concepts'
},
{
  girth:78,
  bust:49,
  waistb:42,
  hip:49,
  inseam:34,
  overseam:23,
  name:'2X',
  brandname:'Marching Show Concepts'
},
{
  girth:82,
  bust:52,
  waistb:46,
  hip:53,
  inseam:34,
  overseam:23,
  name:'3x',
  brandname:'Marching Show Concepts'
},
{
  girth:85,
  bust:55,
  waistb:49,
  hip:57,
  inseam:34,
  overseam:23,
  name:'4x',
  brandname:'Marching Show Concepts'
},
  ]

// const femaleSizes = {

// }

var closestValuechest = Infinity;
var closestIndexchest = -1;

var closestValuebust = Infinity;
var closestIndexbust = -1;

var closestValueb1Bottom = Infinity;
var closestIndexb1Bottom = -1;

var closestValueb2Bottom = Infinity;
var closestIndexb2Bottom = -1;


var closestfValuechest = Infinity;
var closestfIndexchest = -1;

var closestfValuebust = Infinity;
var closestfIndexbust = -1;

var closestfValueb1Bottom = Infinity;
var closestfIndexb1Bottom = -1;

var closestfValueb2Bottom = Infinity;
var closestfIndexb2Bottom = -1;



export default function ResponsiveDialog(props) {
  // const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const classes = useStyles();
  
  function handleClickOpen() {
    props.handleOpen();
  }

  function handleClose() {
    props.setClose(false)
    props.clear();

 closestValuechest = Infinity;
 closestIndexchest = -1;

 closestValuebust = Infinity;
 closestIndexbust = -1;

 closestValueb1Bottom = Infinity;
 closestIndexb1Bottom = -1;

 closestValueb2Bottom = Infinity;
 closestIndexb2Bottom = -1;


 closestfValuechest = Infinity;
 closestfIndexchest = -1;

 closestfValuebust = Infinity;
 closestfIndexbust = -1;

 closestfValueb1Bottom = Infinity;
 closestfIndexb1Bottom = -1;

 closestfValueb2Bottom = Infinity;
 closestfIndexb2Bottom = -1;

  }
  
  // console.log(props.values)


  if(props.values.gender==='female'){
    return(
      <div>
      <Button variant='contained' className={classes.button} fullWidth={true} onClick={handleClickOpen}>
        Find My Size
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={props.open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        scroll={'paper'}
      >
        <DialogTitle id="responsive-dialog-title">{"Female Brands"}</DialogTitle>
        <DialogContent>
        {
            (femaleSizes).map((type,key)=>{
                // console.log(type)
                  if(type.chest){
                    // console.log(type.chest)
                   for (var icf = 0; icf < femaleSizes.length; ++icf) {
                    //  console.log(maleSizes[i].chest) 
                     var diffcf = Math.abs(femaleSizes[icf].chest - props.values.bust);
                     if (diffcf < closestfValuechest) {
                       closestfValuechest = diffcf;
                       closestfIndexchest = icf;
                     }
                     
                   }

                   for (var icbf = 0; icbf < femaleSizes.length; ++icbf) {
                    //  console.log(maleSizes[i].chest) 
                     var diffcbf = Math.abs(femaleSizes[icbf].waist - props.values.waist);
                     if (diffcbf < closestfValueb1Bottom) {
                       closestfValueb1Bottom = diffcbf;
                       closestfIndexb1Bottom = icbf;
                     }
                     
                   }
                  }
                  else if(type.bust){
                    for (var ibf = 0; ibf < femaleSizes.length; ++ibf) {
                      var diffbf = Math.abs(femaleSizes[ibf].bust - props.values.bust);
                      if (diffbf < closestfValuebust) {
                        closestfValuebust = diffbf;
                        closestfIndexbust = ibf;
                      }
                      
                    }
                    for (var ibbf = 0; ibbf < femaleSizes.length; ++ibbf) { 
                       var diffbbf = Math.abs(femaleSizes[ibbf].waistb - props.values.waist);
                       if (diffbbf < closestfValueb2Bottom) {
                        //  console.log(ibbf)
                         closestfValueb2Bottom = diffbbf;
                         closestfIndexb2Bottom = ibbf;
                       }
                     } 
                  }
            return null
          })
          }
              <Grid container spacing={0}>
              <Grid item xs={6} container>
              <Grid item xs={12}>
                <h1>Tops</h1>
              </Grid>
              <Grid item xs={8}>
                {femaleSizes[closestfIndexchest].brandname}
              </Grid>
              <Grid item xs={4}>
                <b>{femaleSizes[closestfIndexchest].name}</b>
              </Grid>

              <Grid item xs={8}>
                {femaleSizes[closestfIndexbust].brandname}
              </Grid>
              <Grid item xs={4}>
                <b>{femaleSizes[closestfIndexbust].name}</b>
              </Grid>


              </Grid>
              <Grid item xs={6} container>
              <Grid item xs={12}>
                <h1>Bottoms</h1>
              </Grid>
              <Grid item xs={8}>
                {femaleSizes[closestfIndexb1Bottom].brandname}
              </Grid>
              <Grid item xs={4}>
                <b>{femaleSizes[closestfIndexb1Bottom].name}</b>
              </Grid>

              <Grid item xs={8}>
                {femaleSizes[closestfIndexb2Bottom].brandname}
              </Grid>
              <Grid item xs={4}>
                <b>{femaleSizes[closestfIndexb2Bottom].name}</b>
              </Grid>


              </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          {/* <Button onClick={handleClose} color="primary" autoFocus>
            Agree
          </Button> */}
        </DialogActions>
      </Dialog>
    </div>
    )
  }
  else{
    return (
      <div>
        <Button variant='contained' className={classes.button} fullWidth={true} onClick={handleClickOpen}>
          Find My Size
        </Button>
        <Dialog
          fullScreen={fullScreen}
          open={props.open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
          scroll={'paper'}
        >
          <DialogTitle id="responsive-dialog-title">{"Male Brands"}</DialogTitle>
          <DialogContent>
          {
            (maleSizes).map((type,key)=>{
                  if(type.chest){
                    // console.log(type.chest)
                   for (var ic = 0; ic < maleSizes.length; ++ic) {
                    //  console.log(maleSizes[i].chest) 
                     var diffc = Math.abs(maleSizes[ic].chest - props.values.bust);
                     if (diffc < closestValuechest) {
                       closestValuechest = diffc;
                       closestIndexchest = ic;
                     }
                     
                   }

                   for (var icb = 0; icb < maleSizes.length; ++icb) {
                    //  console.log(maleSizes[i].chest) 
                     var diffcb = Math.abs(maleSizes[icb].waist - props.values.waist);
                     if (diffcb < closestValueb1Bottom) {
                       closestValueb1Bottom = diffcb;
                       closestIndexb1Bottom = icb;
                     }
                     
                   }
                  }
                  else if(type.bust){
                    for (var ib = 0; ib < maleSizes.length; ++ib) {
                      var diffb = Math.abs(maleSizes[ib].bust - props.values.bust);
                      if (diffb < closestValuebust) {
                        closestValuebust = diffb;
                        closestIndexbust = ib;
                      }
                      
                    }
                    for (var ibb = 0; ibb < maleSizes.length; ++ibb) { 
                       var diffbb = Math.abs(maleSizes[ibb].waistb - props.values.waist);
                       if (diffbb < closestValueb2Bottom) {
                        //  console.log(ibb)
                         closestValueb2Bottom = diffbb;
                         closestIndexb2Bottom = ibb;
                       }
                     }  
                  }
                  return null
            })
          }
          <Grid container spacing={0}>
              <Grid item xs={6} container>
              <Grid item xs={12}>
                <h1>Tops</h1>
              </Grid>
              <Grid item xs={8}>
                {maleSizes[closestIndexchest].brandname}
              </Grid>
              <Grid item xs={4}>
                <b>{maleSizes[closestIndexchest].name}</b>
              </Grid>

              <Grid item xs={8}>
                {maleSizes[closestIndexbust].brandname}
              </Grid>
              <Grid item xs={4}>
                <b>{maleSizes[closestIndexbust].name}</b>
              </Grid>


              </Grid>
              <Grid item xs={6} container>
              <Grid item xs={12}>
                <h1>Bottoms</h1>
              </Grid>
              <Grid item xs={8}>
                {maleSizes[closestIndexb1Bottom].brandname}
              </Grid>
              <Grid item xs={4}>
                <b>{maleSizes[closestIndexb1Bottom].name}</b>
              </Grid>

              <Grid item xs={8}>
                {maleSizes[closestIndexb2Bottom].brandname}
              </Grid>
              <Grid item xs={4}>
                <b>{maleSizes[closestIndexb2Bottom].name}</b>
              </Grid>


              </Grid>
          </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            {/* <Button onClick={handleClose} color="primary" autoFocus>
              Agree
            </Button> */}
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
