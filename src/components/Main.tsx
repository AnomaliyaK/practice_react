import React from 'react';
import { UserAddress } from '../types';
import { UserMap } from './UserMap';

type Geo = Pick<UserAddress, 'geo'>;
interface MainProps {
  userAddressInfo: Geo;
}

export const Main = ({ userAddressInfo: { geo } }: MainProps) => {
  return (
    <div>
      <UserMap userGeoInfo={geo} />
    </div>
  );
};
