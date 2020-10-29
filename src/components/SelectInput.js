import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { InputLabel, NativeSelect, FormControl } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 100
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    select: {
        paddingLeft: '1rem'
    }
  }));

const SelectInput = ({ handleChange, val, name, ibu }) => {
    const classes = useStyles();

    const abvOptions = [3, 4, 5, 9, 11];
    const ibuOptions = [20, 40, 50, 60, 80];

    const displayOptions = () => {
        if (ibu) {
            return ibuOptions.map(item => <option value={item}>{item}</option>)
        } else {
            return abvOptions.map(item => <option value={item}>{item}</option>)
        }
    }

    return (
        <FormControl className={classes.formControl}>
            <InputLabel shrink htmlFor="menu-number" color="secondary">{name}</InputLabel>
            <NativeSelect
                className={classes.select}
                color="secondary"
                defaultValue={val}
                onChange={handleChange}
            >
            {displayOptions()}
            </NativeSelect>   
      </FormControl>
    )
}

export default SelectInput; 