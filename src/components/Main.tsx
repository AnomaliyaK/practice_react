import React from 'react';
import { UserGeo } from '../types';
import { UserMap } from './UserMap';

interface MainProps {
  userGeoInfo: UserGeo;
}

export const Main = ({ userGeoInfo }: MainProps) => {
  return (
    <div>
      <UserMap userGeoInfo={userGeoInfo} />
    </div>
  );
};
