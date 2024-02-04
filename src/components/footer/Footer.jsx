import { Box, Divider, IconButton } from "@mui/material";
import {
  FaWhatsapp,
  FaLinkedin,
  FaStackOverflow,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  // li
  const linkedInUrl = "https://www.linkedin.com/in/yourusername";
  // sa
  const stackOverflowUrl =
    "https://stackoverflow.com/users/youruserid/yourusername";
  // gh
  const githubUrl = "https://github.com/dariuszewski";

  return (
    <div>
      <Divider sx={{ my: 4, bgcolor: "white" }} />
      <Box sx={{ textAlign: "center", pb: 4, color: "white" }}>
        <IconButton
          sx={{ fontSize: "2rem", mx: 2, color: "white" }}
          component="a"
          href={linkedInUrl}
          target="_blank"
        >
          <FaLinkedin fontSize="inherit" />
        </IconButton>
        <IconButton
          sx={{ fontSize: "2rem", mx: 2, color: "white" }}
          component="a"
          href={stackOverflowUrl}
          target="_blank"
        >
          <FaStackOverflow fontSize="inherit" />
        </IconButton>
        <IconButton
          sx={{ fontSize: "2rem", mx: 2, color: "white" }}
          component="a"
          href={githubUrl}
          target="_blank"
        >
          <FaGithub fontSize="inherit" />
        </IconButton>
      </Box>
    </div>
  );
}
