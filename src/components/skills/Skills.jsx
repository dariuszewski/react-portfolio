import * as React from "react";
import AccordionGroup from "@mui/joy/AccordionGroup";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails, {
  accordionDetailsClasses,
} from "@mui/joy/AccordionDetails";
import AccordionSummary, {
  accordionSummaryClasses,
} from "@mui/joy/AccordionSummary";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import Avatar from "@mui/joy/Avatar";
import FormControl from "@mui/joy/FormControl";
import ListItemContent from "@mui/joy/ListItemContent";

import "./Skills.css";

// Language Section Icons
import { LuLanguages } from "react-icons/lu";
import { GiPoland } from "react-icons/gi";
import { RiEnglishInput } from "react-icons/ri";

// Programming Section Icons
import { FaRobot } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { IoServer } from "react-icons/io5";
import { FaDocker } from "react-icons/fa";

// Backend Section Icons
import { FaServer } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { SiFlask } from "react-icons/si";

// Data Section Icons
import { MdOutlineDataThresholding } from "react-icons/md";
import { SiMicrosoftexcel } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaMicrosoft } from "react-icons/fa";
import { SiGooglebigquery } from "react-icons/si";
import { SiPandas } from "react-icons/si";
import { SiApacheairflow } from "react-icons/si";
import { SiScikitlearn } from "react-icons/si";

// Frontend Section Icons
import { FaLaptopCode } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";

export default function Skills() {
  return (
    <div id="Skills">
      <h3>My Skills</h3>
      <AccordionGroup
        variant="plain"
        transition="0.2s"
        sx={{
          width: { xs: "100%", sm: "100%" }, // 100% width on xs devices, and 80% starting from sm devices
          margin: "auto", // Automatically adjust margin to center the accordion
          mx: { xs: "0%", sm: "0%" }, // 0% horizontal margin on xs, 10% starting from sm devices
          borderRadius: "md",
          [`& .${accordionDetailsClasses.content}.${accordionDetailsClasses.expanded}`]:
            {
              paddingBlock: "1rem",
            },
          [`& .${accordionSummaryClasses.button}`]: {
            paddingBlock: "1rem",
          },
        }}
      >
        <Accordion>
          <AccordionSummary>
            <Avatar color="primary">
              <LuLanguages />
            </Avatar>
            <ListItemContent>
              <Typography level="title-md" color="#ffffff">
                Languages
              </Typography>
              <Typography level="body-sm">Languages I speak</Typography>
            </ListItemContent>
          </AccordionSummary>
          <AccordionDetails>
            <Stack spacing={1.5}>
              <FormControl sx={{ gap: 1, color: "white" }}>
                <FormControl
                  orientation="horizontal"
                  sx={{ gap: 1, color: "white" }}
                >
                  <GiPoland fontSize="24" sx={{ mx: 1 }} />
                  <Typography level="title-md" color="#ffffff">
                    Polish
                  </Typography>
                </FormControl>
                <Typography level="body-sm">Native</Typography>
              </FormControl>

              <FormControl sx={{ gap: 1, color: "white" }}>
                <FormControl
                  orientation="horizontal"
                  sx={{ gap: 1, color: "white" }}
                >
                  <RiEnglishInput fontSize="24" sx={{ mx: 1 }} />
                  <Typography level="title-md" color="#ffffff">
                    English
                  </Typography>
                </FormControl>
                <Typography level="body-sm">IELTS Band 8</Typography>
              </FormControl>
            </Stack>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary>
            <Avatar color="success">
              <FaRobot />
            </Avatar>
            <ListItemContent>
              <Typography level="title-md" color="#ffffff">
                Programming
              </Typography>
              <Typography level="body-sm">
                Programming languages and markdowns formats I know
              </Typography>
            </ListItemContent>
          </AccordionSummary>
          <AccordionDetails>
            <Stack spacing={1.5}>
              <FormControl sx={{ gap: 1, color: "white" }}>
                <FormControl
                  orientation="horizontal"
                  sx={{ gap: 1, color: "white" }}
                >
                  <FaPython fontSize="24" sx={{ mx: 1 }} />
                  <Typography level="title-md" color="#ffffff">
                    Python
                  </Typography>
                </FormControl>
                <Typography level="body-sm">My bread and butter</Typography>
              </FormControl>

              <FormControl sx={{ gap: 1, color: "white" }}>
                <FormControl
                  orientation="horizontal"
                  sx={{ gap: 1, color: "white" }}
                >
                  <IoLogoJavascript fontSize="24" sx={{ mx: 1 }} />
                  <Typography level="title-md" color="#ffffff">
                    JavaScript
                  </Typography>
                </FormControl>
                <Typography level="body-sm">My secondary language</Typography>
              </FormControl>

              <FormControl sx={{ gap: 1, color: "white" }}>
                <FormControl
                  orientation="horizontal"
                  sx={{ gap: 1, color: "white" }}
                >
                  <IoServer fontSize="24" sx={{ mx: 1 }} />
                  <Typography level="title-md" color="#ffffff">
                    SQL
                  </Typography>
                </FormControl>
                <Typography level="body-sm">
                  The way I talk to databases
                </Typography>
              </FormControl>

              <FormControl sx={{ gap: 1, color: "white" }}>
                <FormControl
                  orientation="horizontal"
                  sx={{ gap: 1, color: "white" }}
                >
                  <FaDocker fontSize="24" sx={{ mx: 1 }} />
                  <Typography level="title-md" color="#ffffff">
                    Docker
                  </Typography>
                </FormControl>
                <Typography level="body-sm">
                  My preferred way of deployment
                </Typography>
              </FormControl>
            </Stack>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary>
            <Avatar color="primary">
              <FaServer />
            </Avatar>
            <ListItemContent>
              <Typography level="title-md" color="#ffffff">
                Backend
              </Typography>
              <Typography level="body-sm">
                Backend technologies I use
              </Typography>
            </ListItemContent>
          </AccordionSummary>
          <AccordionDetails>
            <Stack spacing={1.5}>
              <FormControl sx={{ gap: 1, color: "white" }}>
                <FormControl
                  orientation="horizontal"
                  sx={{ gap: 1, color: "white" }}
                >
                  <SiDjango fontSize="24" sx={{ mx: 1 }} />
                  <Typography level="title-md" color="#ffffff">
                    Django
                  </Typography>
                </FormControl>
                <Typography level="body-sm">
                  I'm having my first professional experience with Django Rest
                  Framework and I'm currently mastering it.
                </Typography>
              </FormControl>

              <FormControl sx={{ gap: 1, color: "white" }}>
                <FormControl
                  orientation="horizontal"
                  sx={{ gap: 1, color: "white" }}
                >
                  <SiFlask fontSize="24" sx={{ mx: 1 }} />
                  <Typography level="title-md" color="#ffffff">
                    Flask
                  </Typography>
                </FormControl>
                <Typography level="body-sm">
                  I have both, academic and professional experience with Flask.
                  For API, I use Flask-RESTx, but I'm happy to learn more.
                </Typography>
              </FormControl>
            </Stack>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary>
            <Avatar color="primary">
              <MdOutlineDataThresholding />
            </Avatar>
            <ListItemContent>
              <Typography level="title-md" color="#ffffff">
                Data
              </Typography>
              <Typography level="body-sm">
                Tools I used for data science, analysis and engineering
              </Typography>
            </ListItemContent>
          </AccordionSummary>
          <AccordionDetails>
            <Stack spacing={1.5}>
              <FormControl sx={{ gap: 1, color: "white" }}>
                <FormControl
                  orientation="horizontal"
                  sx={{ gap: 1, color: "white" }}
                >
                  <BiLogoPostgresql fontSize="24" sx={{ mx: 1 }} />
                  <Typography level="title-md" color="#ffffff">
                    Postgres
                  </Typography>
                </FormControl>
                <Typography level="body-sm">
                  My Database Managment System of choice.
                </Typography>
              </FormControl>
              <FormControl sx={{ gap: 1, color: "white" }}>
                <FormControl
                  orientation="horizontal"
                  sx={{ gap: 1, color: "white" }}
                >
                  <FaMicrosoft fontSize="24" sx={{ mx: 1 }} />
                  <Typography level="title-md" color="#ffffff">
                    Microsoft SQL Server
                  </Typography>
                </FormControl>
                <Typography level="body-sm">
                  I used this database multiple times in academics.
                </Typography>
              </FormControl>
              <FormControl sx={{ gap: 1, color: "white" }}>
                <FormControl
                  orientation="horizontal"
                  sx={{ gap: 1, color: "white" }}
                >
                  <SiGooglebigquery fontSize="24" sx={{ mx: 1 }} />
                  <Typography level="title-md" color="#ffffff">
                    Big Query
                  </Typography>
                </FormControl>
                <Typography level="body-sm">
                  I participated in expanding and maintaining a data warehouse
                  in Google Big Query.
                </Typography>
              </FormControl>
              <FormControl sx={{ gap: 1, color: "white" }}>
                <FormControl
                  orientation="horizontal"
                  sx={{ gap: 1, color: "white" }}
                >
                  <SiApacheairflow fontSize="24" sx={{ mx: 1 }} />
                  <Typography level="title-md" color="#ffffff">
                    Apache Airflow
                  </Typography>
                </FormControl>
                <Typography level="body-sm">
                  I've buils multiple custom DAGs for a data warehouse using
                  Composer.
                </Typography>
              </FormControl>
              <FormControl sx={{ gap: 1, color: "white" }}>
                <FormControl
                  orientation="horizontal"
                  sx={{ gap: 1, color: "white" }}
                >
                  <SiPandas fontSize="24" sx={{ mx: 1 }} />
                  <Typography level="title-md" color="#ffffff">
                    Pandas
                  </Typography>
                </FormControl>
                <Typography level="body-sm">
                  I've used Pandas on various occasions in academia and
                  professionally for many different purposes.
                </Typography>
              </FormControl>
              <FormControl sx={{ gap: 1, color: "white" }}>
                <FormControl
                  orientation="horizontal"
                  sx={{ gap: 1, color: "white" }}
                >
                  <SiScikitlearn fontSize="24" sx={{ mx: 1 }} />
                  <Typography level="title-md" color="#ffffff">
                    Sci-Kit Learn
                  </Typography>
                </FormControl>
                <Typography level="body-sm">
                  Got some academic experience with it when working on
                  real-estate analysis.
                </Typography>
              </FormControl>
              <FormControl sx={{ gap: 1, color: "white" }}>
                <FormControl
                  orientation="horizontal"
                  sx={{ gap: 1, color: "white" }}
                >
                  <SiMicrosoftexcel fontSize="24" sx={{ mx: 1 }} />
                  <Typography level="title-md" color="#ffffff">
                    Excel
                  </Typography>
                </FormControl>
                <Typography level="body-sm">
                  I've used excel many times in academics and professionally.
                </Typography>
              </FormControl>
            </Stack>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>
            <Avatar color="primary">
              <FaLaptopCode />
            </Avatar>
            <ListItemContent>
              <Typography level="title-md" color="#ffffff">
                Frontend
              </Typography>
              <Typography level="body-sm">My frontend experience</Typography>
            </ListItemContent>
          </AccordionSummary>
          <AccordionDetails>
            <Stack spacing={1.5}>
              <FormControl sx={{ gap: 1, color: "white" }}>
                <FormControl
                  orientation="horizontal"
                  sx={{ gap: 1, color: "white" }}
                >
                  <FaReact fontSize="24" sx={{ mx: 1 }} />
                  <Typography level="title-md" color="#ffffff">
                    React
                  </Typography>
                </FormControl>
                <Typography level="body-sm">
                  This page is my final project for Introduction To React Course
                  at the university.
                </Typography>
              </FormControl>
              <FormControl sx={{ gap: 1, color: "white" }}>
                <FormControl
                  orientation="horizontal"
                  sx={{ gap: 1, color: "white" }}
                >
                  <FaVuejs fontSize="24" sx={{ mx: 1 }} />
                  <Typography level="title-md" color="#ffffff">
                    Vue
                  </Typography>
                </FormControl>
                <Typography level="body-sm">
                  During university classes, I participated in 2 projects using
                  Vue3 and Vuetify. A Kanban Board and a Restaurant PWA.
                </Typography>
              </FormControl>
            </Stack>
          </AccordionDetails>
        </Accordion>
      </AccordionGroup>
    </div>
  );
}
