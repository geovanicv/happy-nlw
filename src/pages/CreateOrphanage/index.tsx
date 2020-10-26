/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable camelcase */

import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Map, Marker, TileLayer } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';

import { FiPlus } from 'react-icons/fi';

import { useHistory } from 'react-router-dom';
import {
  Container,
  MainContent,
  CreateOrphanageForm,
  ImagesContainer,
  ButtonsContent,
  ButtonSelect,
} from './styles';

import Input from '../../components/Input';
import HeaderSideBar from '../../components/HeaderSideBar';
import mapIcon from '../../utils/mapIcon';
import Textarea from '../../components/Textarea';
import api from '../../services/api';

const CreateOrphanage: React.FC = () => {
  const history = useHistory();

  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });

  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [instructions, setInstructions] = useState('');
  const [opening_hours, setOpeningHours] = useState('');
  const [open_on_weekends, setOpenOnWeekends] = useState(true);

  const [images, setImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  function handleSelectImage(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) {
      return;
    }

    const selectedImages = Array.from(event.target.files);

    setImages(selectedImages);

    const selectedImagesPreview = selectedImages.map(image => {
      return URL.createObjectURL(image);
    });

    setPreviewImages(selectedImagesPreview);
  }

  function handleMapClick(event: LeafletMouseEvent) {
    const { lat, lng } = event.latlng;

    setPosition({
      latitude: lat,
      longitude: lng,
    });
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const { latitude, longitude } = position;

    const data = new FormData();

    data.append('name', name);
    data.append('about', about);
    data.append('latitude', String(latitude));
    data.append('longitude', String(longitude));
    data.append('instructions', instructions);
    data.append('opening_hours', opening_hours);
    data.append('open_on_weekends', String(open_on_weekends));

    images.forEach(image => {
      data.append('images', image);
    });

    await api.post('orphanages', data);

    alert('Cadastro realizado com sucesso');

    history.push('/app');
  }

  return (
    <Container>
      <HeaderSideBar />

      <MainContent>
        <CreateOrphanageForm onSubmit={handleSubmit}>
          <fieldset>
            <legend>Dados</legend>

            <Map
              center={[-15.8946081, -47.7736313]}
              style={{ width: '100%', height: 280 }}
              zoom={15}
              onclick={handleMapClick}
            >
              <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />

              {position.latitude !== 0 && (
                <Marker
                  interactive={false}
                  icon={mapIcon}
                  position={[position.latitude, position.longitude]}
                />
              )}
            </Map>

            <Input
              name="name"
              label="Nome"
              value={name}
              onChange={event => setName(event.target.value)}
            />

            <Textarea
              name="about"
              label="Sobre (Máximo de 300 caracteres)"
              value={about}
              onChange={event => setAbout(event.target.value)}
            />

            <ImagesContainer>
              {previewImages.map(image => (
                <img key={image} src={image} alt={name} />
              ))}

              <label htmlFor="image[]">
                <FiPlus size={24} color="#15b6d6" />
              </label>
              <input
                multiple
                onChange={handleSelectImage}
                type="file"
                id="image[]"
              />
            </ImagesContainer>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <Textarea
              name="instructions"
              label="Instruções"
              value={instructions}
              onChange={event => setInstructions(event.target.value)}
            />

            <Input
              name="opening_hours"
              label="Horário de visita"
              value={opening_hours}
              onChange={event => setOpeningHours(event.target.value)}
            />

            <ButtonsContent>
              <span>Atende fim de semana?</span>
              <ButtonSelect>
                <button
                  type="button"
                  className={open_on_weekends ? 'active' : ''}
                  onClick={() => setOpenOnWeekends(true)}
                >
                  Sim
                </button>
                <button
                  type="button"
                  className={!open_on_weekends ? 'active' : ''}
                  onClick={() => setOpenOnWeekends(false)}
                >
                  Não
                </button>
              </ButtonSelect>
            </ButtonsContent>
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
