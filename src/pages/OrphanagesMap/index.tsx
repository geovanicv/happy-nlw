import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';
import { LogoMarker } from '../../images';

import { Container, SideBar, ButtonAdd } from './styles';

import 'leaflet/dist/leaflet.css';

const OrphanagesMap: React.FC = () => {
  return (
    <Container>
      <SideBar>
        <header>
          <LogoMarker />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Brasília DF</strong>
          <span>São Sebastião</span>
        </footer>
      </SideBar>

      <Map
        center={[-27.2092052, -49.6401092]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
      </Map>

      <ButtonAdd>
        <Link to="create-orphanage">
          <FiPlus size={32} color="#FFF" />
        </Link>
      </ButtonAdd>
    </Container>
  );
};

export default OrphanagesMap;
