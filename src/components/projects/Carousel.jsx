import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MediaCard from "./Card";

import flaskrBlogImage from "../../assets/projects/flaskr_blog.png";
import kanbanManagmentImage from "../../assets/projects/kanban-managment.png";
import realEstateScraperImage from "../../assets/projects/real-estate-scraper.png";
import vrpImage from "../../assets/projects/vehicle_routing_problem.png";
import portfolioImage from "../../assets/projects/react-portfolio.png";

export default function CarouselRatio() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const username = "dariuszewski";

  const repoData = {
    flaskr_blog: {
      demo: "https://flaskr-5gv9.onrender.com",
      image: flaskrBlogImage,
    },
    "kanban-managment": {
      demo: "https://github.com/dariuszewski/kanban-managment",
      image: kanbanManagmentImage,
    },
    "real-estate-scraper": {
      demo: "https://github.com/dariuszewski/real-estate-scraper",
      image: realEstateScraperImage,
    },
    vehicle_routing_problem: {
      demo: "https://github.com/dariuszewski/vehicle_routing_problem/blob/master/notebook.ipynb",
      image: vrpImage,
    },
    "react-portfolio": {
      demo: "https://dariuszewski.github.io/react-portfolio/",
      image: portfolioImage,
    },
  };

  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/repos`
        );

        if (response.ok) {
          const data = await response.json();
          const filteredProfile = data.filter((repo) =>
            Object.keys(repoData).includes(repo.name)
          );
          setProfile(filteredProfile);
          console.log(profile);
          setLoading(false);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [username]);

  return (
    <div className="carousel">
      <Carousel responsive={responsive} className="project-carousel">
        {loading ? (
          <span>Loading...</span>
        ) : (
          profile.map((repo, index) => (
            <MediaCard
              key={index}
              repoName={repo.name}
              description={repo.description}
              language={repo.language}
              html_url={repo.html_url}
              demo={repoData[repo.name]["demo"]}
              image={repoData[repo.name]["image"]}
            />
          ))
        )}
      </Carousel>
      <div></div>
    </div>
  );
}
