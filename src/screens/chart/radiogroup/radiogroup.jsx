import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
// import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(0.1),
  },
  group: {
    margin: theme.spacing(0.5),
  },
}));

export default function RadioButtonsGroup(props) {
  const classes = useStyles();
//   const [value, setValue] = React.useState('in');

//   function handleChange(event) {
//     setValue(event.target.value);
//   }

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        {/* <FormLabel component="legend">Gender</FormLabel> */}
        <RadioGroup
          row
          aria-label="Gender"
          name="gender1"
        //   className={classes.group}
          value={props.value}
          onChange={(e)=>props.handleChange(e)}
        >
          <FormControlLabel value="in" control={<Radio />} label="in" />
          {/* <FormControlLabel value="cm" control={<Radio />} label="cm" /> */}
        </RadioGroup>
      </FormControl>
    </div>
  );
}
