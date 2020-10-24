import React from 'react';
import { FiArrowRight, FiEdit3, FiTrash } from 'react-icons/fi';

import { Map, Marker, TileLayer } from 'react-leaflet';

import mapIcon from '../../../utils/mapIcon';

import {
  Container,
  MapContainer,
  ActionsContainer,
  CardFooter,
} from './styles';

interface Props {
  isEditable?: boolean;
}

const OrphanageCard: React.FC<Props> = ({ isEditable }) => {
  return (
    <Container>
      <MapContainer>
        <Map
          center={[-15.8946081, -47.7736313]}
          zoom={16}
          style={{ width: '100%', height: '100%' }}
          dragging={false}
          touchZoom={false}
          zoomControl={false}
          scrollWheelZoom={false}
          doubleClickZoom={false}
        >
          <TileLayer
            url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
          />
          <Marker
            interactive={false}
            icon={mapIcon}
            position={[-15.8946081, -47.7736313]}
          />
        </Map>
      </MapContainer>

      <CardFooter>
        <h3>7 dias de Gloria</h3>

        {isEditable ? (
          <ActionsContainer>
            <button type="button">
              <FiEdit3 size={24} color="#15c3d6" />
            </button>
            <button type="button">
              <FiTrash size={24} color="#15c3d6" />
            </button>
          </ActionsContainer>
        ) : (
          <ActionsContainer>
            <button type="button">
              <FiArrowRight size={24} color="#15c3d6" />
            </button>
          </ActionsContainer>
        )}
      </CardFooter>
    </Container>
  );
};

export default OrphanageCard;
