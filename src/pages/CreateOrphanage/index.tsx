import React from 'react';
import { Map, Marker, TileLayer } from 'react-leaflet';

import { FiPlus } from 'react-icons/fi';

import {
  Container,
  MainContent,
  CreateOrphanageForm,
  NewImageButton,
  ButtonSelect,
} from './styles';

import Input from '../../components/Input';
import HeaderSideBar from '../../components/HeaderSideBar';
import mapIcon from '../../utils/mapIcon';

const CreateOrphanage: React.FC = () => {
  return (
    <Container>
      <HeaderSideBar />

      <MainContent>
        <CreateOrphanageForm>
          <fieldset>
            <legend>Dados</legend>

            <Map
              center={[-27.2092052, -49.6401092]}
              style={{ width: '100%', height: 280 }}
              zoom={15}
            >
              <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />

              <Marker
                interactive={false}
                icon={mapIcon}
                position={[-27.2092052, -49.6401092]}
              />
            </Map>

            <Input name="name" label="Nome" />

            <Input
              name="about"
              label="Sobre (Máximo de 300 caracteres)"
              textarea
            />

            <Input haveInput={false} name="images" label="Fotos">
              <div className="uploaded-image" />

              <NewImageButton>
                <FiPlus size={24} color="#15b6d6" />
              </NewImageButton>
            </Input>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <Input name="instructions" label="Instruções" textarea />

            <Input name="opening_hours" label="Horário de visita" />

            <Input
              name="open_on_weekends"
              label="Atende fim de semana"
              haveInput={false}
            >
              <ButtonSelect>
                <button type="button" className="active">
                  Sim
                </button>
                <button type="button">Não</button>
              </ButtonSelect>
            </Input>
          </fieldset>

          <button className="confirm-button" type="submit">
            Confirmar
          </button>
        </CreateOrphanageForm>
      </MainContent>
    </Container>
  );
};

export default CreateOrphanage;
