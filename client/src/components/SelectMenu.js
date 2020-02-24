import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const SelectMenu = ({ title, selectValue, onChange, menuValues }) => {
  const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120
    }
  }));

  const classes = useStyles();

  return (
    <FormControl className={classes.formControl}>
      <InputLabel>{title}</InputLabel>
      <Select value={selectValue} onChange={onChange}>
        {menuValues.map(value => (
          <MenuItem key={value} value={value}>
            {value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectMenu;
