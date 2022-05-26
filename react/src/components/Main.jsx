import { Button, TextField, Tooltip } from "@mui/material";
import { CarSelector } from "./CarSelector";
import { ColorPicker } from "./ColorPicker";

export const Main = () => {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        width: "60%",
        padding: "4rem",
        margin: "auto",
        gap: "1rem",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <CarSelector />

        <div style={{ display: "flex", gap: "2rem" }}>
          <ColorPicker name="Primary Color" />
          <ColorPicker name="Secondary Color" />
        </div>

        <TextField label="Decal 🎨" variant="outlined" />
        <TextField label="Boost 🔥" variant="outlined" />
        <TextField label="Goal Explosion 💥" variant="outlined" />
      </div>

      <div style={{ display: "flex", justifyContent: "right", gap: "0.5rem" }}>
        <Tooltip title="In progress...">
          <span>
            <Button variant="outlined" disabled>
              Preview Car
            </Button>
          </span>
        </Tooltip>
        <Button variant="contained">Export BakkesMod Data</Button>
      </div>
    </main>
  );
};
