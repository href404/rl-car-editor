import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import React from "react";

export const CarSelector = () => {
  const cars = ["Octane", "Fennec", "Dominus", "Other"];
  const [car, setCar] = React.useState("");

  const handleCarSelection = (event) => {
    setCar(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="car">Car 🚘</InputLabel>
      <Select
        labelId="car"
        id="car"
        value={car}
        label="Car 🚘"
        onChange={handleCarSelection}
      >
        {cars.map((car, index) => (
          <MenuItem key={index} value={car}>
            {car}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
