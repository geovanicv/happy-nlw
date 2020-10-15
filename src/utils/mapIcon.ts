import L from 'leaflet';

import logoMarkerImg from '../images/logo-marker.svg';

const mapIcon = L.icon({
  iconUrl: logoMarkerImg,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [0, -60],
});

export default mapIcon;
