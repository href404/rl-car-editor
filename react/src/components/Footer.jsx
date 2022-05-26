import { Typography } from "@mui/material";

export const Footer = ({ title }) => {
  return (
    <footer
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "1rem",
      }}
    >
      <Typography variant="caption">{title}</Typography>
    </footer>
  );
};
