import React from 'react';
import { UserAddress } from '../types';

interface AsideProps {
  userAddressInfo: Omit<UserAddress, 'geo'>;
}

export const Aside = ({
  userAddressInfo: { street, suite, city, zipcode },
}: AsideProps) => {
  return (
    <div>
      <address>Street: {street}</address>
      <address>Suite: {suite}</address>
      <address>City: {city}</address>
      <address>Zipcode: {zipcode}</address>
    </div>
  );
};
