import { Typography } from "@mui/material";

export const Header = ({ title }) => {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "1rem",
      }}
    >
      <Typography variant="h2">{title}</Typography>
    </header>
  );
};
