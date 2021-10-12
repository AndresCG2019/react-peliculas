import CrearActores from "./Actores/CrearActores";
import EditarActores from "./Actores/EditarActores";
import IndiceActores from "./Actores/IndiceActores";
import CrearCines from "./cines/CrearCines";
import EditarCines from "./cines/EditarCines";
import IndiceCines from "./cines/IndiceCines";
import CrearGenero from "./generos/CrearGenero";
import EditarGenero from "./generos/EditarGenero";
import IndiceGeneros from "./generos/indiceGeneros";
import LandingPage from "./LandingPage";
import CrearPeliculas from "./Peliculas/CrearPeliculas";
import EditarPeliculas from "./Peliculas/EditarPeliculas";
import FiltrosPeliculas from "./Peliculas/FiltroPeliculas";
import RedireccionarALanding from "./utils/RedireccionarALanding";

const rutas = [
    {path: '/generos/crear', componente: CrearGenero},
    {path: '/generos/editar/:id(\\d+)', componente: EditarGenero},
    {path: '/generos', componente: IndiceGeneros, exact: true},

    {path: '/actores/crear', componente: CrearActores},
    {path: '/actores/editar/:id(\\d+)', componente: EditarActores},
    {path: '/actores', componente: IndiceActores, exact: true},

    {path: '/cines/crear', componente: CrearCines},
    {path: '/cines/editar/:id(\\d+)', componente: EditarCines},
    {path: '/cines', componente: IndiceCines, exact: true},

    {path: '/peliculas/crear', componente: CrearPeliculas},
    {path: '/peliculas/editar/:id(\\d+)', componente: EditarPeliculas},
    {path: '/peliculas/filtrar', componente: FiltrosPeliculas},

    {path: '/', componente: LandingPage, exact: true},
    {path: '*', componente: RedireccionarALanding},

]

export default rutas;