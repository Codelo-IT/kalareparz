import { MapContainer, Marker, TileLayer } from "react-leaflet";
import kalareparzLocation from "assets/kalareparz-location.svg";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

export const Map = () => {
    const position = { lat: 49.97348888372594, lng: 19.828377211649432 };

    return (
        <MapContainer
            center={position}
            zoom={13}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
                position={position}
                icon={new Icon({ iconUrl: kalareparzLocation, iconSize: [150, 150] })}
            />
        </MapContainer>
    );
};
