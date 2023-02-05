import React from 'react';
import { UserCompany } from '../types';

interface FooterProps {
  userCompanyInfo: UserCompany;
}

export const Footer = ({
  userCompanyInfo: { name, catchPhrase, bs },
}: FooterProps) => {
  return (
    <footer>
      <h4>Name: {name}</h4>
      <h3>Catch Phrase: {catchPhrase}</h3>
      <h4>bs: {bs}</h4>
    </footer>
  );
};
