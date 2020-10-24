import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  min-height: 250px;
  min-width: 380px;
  border-radius: 20px;
  border: 1px solid #dde3f0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 5px;
`;

export const MapContainer = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 20px;
  border: 1px solid #dde3f0;

  .leaflet-container {
    border-radius: 20px;
  }
`;

export const CardFooter = styled.footer`
  padding: 15px 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  color: #4d6f80;
`;

export const ActionsContainer = styled.div`
  display: flex;

  button {
    display: flex;
    background: #ebf2f5;
    border: 0;
    padding: 6px;
    border-radius: 12px;
    cursor: pointer;
    transition: background 0.4s;

    &:hover {
      background: #d1edf2;
    }
  }

  button + button {
    margin-left: 8px;
  }
`;
