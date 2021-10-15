import { useEffect, useState } from "react";
import ListadoPeliculas from "./Peliculas/ListadoPeliculas";
import { landingPageDTO } from "./Peliculas/peliculas.model";

export default function LandingPage() {
    const [peliculas, setPeliculas] = useState<landingPageDTO>({});
  
    useEffect(() => {
      const timerId = setTimeout(() => {
        setPeliculas({enCartelera: [
          {
            id: 1, titulo: "Spider-man: Far From Home",
            poster: "https://images-na.ssl-images-amazon.com/images/I/91A+eXyGmvL._RI_.jpg"
          },
          {
            id: 2, titulo : "Moana",
            poster: "https://pbs.twimg.com/profile_images/819955513718779905/DY4UfMVj_400x400.jpg"
          }
        ],
        proximosEstrenos: [
          {
            id: 1, titulo: "Soul",
            poster: "https://i.blogs.es/69cf8f/cartel-soul/1366_2000.jpeg"
          },
        ]
      });
      }, 1000);
      return () => clearTimeout(timerId) })

      return (
        <>
            <h3>En Cartelera</h3>
            <ListadoPeliculas peliculas={peliculas.enCartelera}></ListadoPeliculas>

            <h3>Proximos Estrenos</h3>
            <ListadoPeliculas peliculas={peliculas.proximosEstrenos}></ListadoPeliculas>
        </>
      );
}