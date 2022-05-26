import { FormControl, InputLabel, Input } from "@mui/material";

export const ColorPicker = ({ name }) => {
  return (
    <FormControl fullWidth>
      <InputLabel id="color">{name}</InputLabel>
      <Input type="color" id="color" value="#000000" label={name} />
    </FormControl>
  );
};
