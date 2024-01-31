import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MediaCard from "./Card";

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

  const repoNamesToFilter = [
    "flaskr_blog",
    "kanban-managment",
    "real-estate-scraper",
    "vehicle_routing_problem",
  ];

  const demos = {
    flaskr_blog: "https://flaskr-5gv9.onrender.com",
    "kanban-managment": "https://github.com/dariuszewski/kanban-managment",
    "real-estate-scraper":
      "https://github.com/dariuszewski/real-estate-scraper",
    vehicle_routing_problem:
      "https://github.com/dariuszewski/vehicle_routing_problem/blob/master/notebook.ipynb",
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
            repoNamesToFilter.includes(repo.name)
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
              demo={demos[repo.name]}
            />
          ))
        )}
      </Carousel>
      <div></div>
    </div>
  );
}
