import React from 'react';
import { useState, useContext} from 'react';


export const AuthContext = React.createContext();

export const initialState = {
  isAuthenticated: false,
};
