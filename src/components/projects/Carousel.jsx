
import { useEffect, useState } from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import MediaCard from './Card';


export default function CarouselRatio() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      const [loading, setLoading] = useState(false);
      const [profile, setProfile] = useState({});
      const username = 'dariuszewski'

      useEffect(() => {
          async function fetchData() {
              const profile = await fetch(
                  `https://api.github.com/users/${username}`
              );
              const result = await profile.json();
  
              if (result) {
                  setProfile(result);
                  setLoading(false);
              }
              console.log(result)
          }
          fetchData();
      }, [username]);
      
    return (
        <div className="carousel">
        <Carousel responsive={responsive} className="project-carousel">
        {loading ? (
                <span>Loading...</span>
            ) : (
              <MediaCard />
            )}

        </Carousel>
        </div>
    )
}

