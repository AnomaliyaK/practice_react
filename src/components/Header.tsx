import React from 'react';
import { User } from '../types';

interface HeaderProps {
  userInfo: Pick<User, 'name' | 'username' | 'email'>;
}

export const Header = ({
  userInfo: { name, username, email },
}: HeaderProps) => {
  return (
    <header>
      <h2>Name: {name}</h2>
      <h2>User Name: {username}</h2>
      <address>Email: {email}</address>
    </header>
  );
};
