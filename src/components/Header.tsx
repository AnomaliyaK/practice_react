import React from 'react';

interface HeaderProps {
  name: string;
  userName: string;
  email: string;
}

export const Header = ({ name, userName, email }: HeaderProps) => {
  return (
    <header>
      <h2>Name: {name}</h2>
      <h2>User Name: {userName}</h2>
      <address>Email: {email}</address>
    </header>
  );
};
