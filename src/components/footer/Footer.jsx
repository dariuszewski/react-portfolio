import { Box, Divider, IconButton } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode"; // Assuming this for Stack Overflow

export default function Footer() {
  return (
    <div>
      <Divider sx={{ my: 4, bgcolor: "white" }} />
      <Box sx={{ textAlign: "center", pb: 4, color: "white" }}>
        <IconButton sx={{ fontSize: "2rem", mx: 2, color: "white" }}>
          <WhatsAppIcon fontSize="inherit" />
        </IconButton>
        <IconButton sx={{ fontSize: "2rem", mx: 2, color: "white" }}>
          <LinkedInIcon fontSize="inherit" />
        </IconButton>
        <IconButton sx={{ fontSize: "2rem", mx: 2, color: "white" }}>
          <DeveloperModeIcon fontSize="inherit" />{" "}
          {/* This icon is used as an example for Stack Overflow */}
        </IconButton>
      </Box>
    </div>
  );
}
