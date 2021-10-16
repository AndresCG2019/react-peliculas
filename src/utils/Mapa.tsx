import { MapContainer, Marker, TileLayer, useMapEvent } from "react-leaflet";
import L from 'leaflet'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import 'leaflet/dist/leaflet.css'
import { coordenadasDTO } from "./coordenadas.model";
import { useState } from "react";

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconAnchor: [16,37]
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function Mapa (props: mapaProps) {

    // coordenadas del marcador
    const [coordenadas, setCoordenadas] = useState<coordenadasDTO[]>(props.coordenadas);

    return (
        <MapContainer
            center={[24.01453853370447, -104.64432421117424]}
            zoom={14}
            style={{height: props.height}}>
            <TileLayer attribution="react peliculas"
                        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'/>
            <ClickMapa setPunto={coordenadas => {
                setCoordenadas([coordenadas]);
                props.manejarClickMapa(coordenadas);
            }}></ClickMapa>
            {coordenadas.map(coordenada => <Marcador key={coordenada.lat + coordenada.lng}
            {...coordenada}
            />)}
        </MapContainer>
    );
}

function ClickMapa (props: clickMapaProps) {
    useMapEvent('click', e =>{
        props.setPunto({lat: e.latlng.lat, lng: e.latlng.lng});
    })
    
    return null;
}


interface clickMapaProps {
    setPunto(coordenadas: coordenadasDTO): void // recipiente para funcion
}

function Marcador (props: coordenadasDTO) {
    return (
        <Marker position={[props.lat, props.lng]}/>
    );
}

interface mapaProps {
    height: string;
    coordenadas: coordenadasDTO[];
    manejarClickMapa(coordenadas: coordenadasDTO): void;
}

Mapa.defaultProps = {
    height: "500px"
}