import React from 'react';
import { UserGeo } from '../types';

interface UserMapProps {
  userGeoInfo: UserGeo;
}

export const UserMap = ({ userGeoInfo: { lat, lng } }: UserMapProps) => {
  return (
    <div>
      <h3>LAT: {lat}</h3>
      <h3>LNG: {lng}</h3>
    </div>
  );
};
