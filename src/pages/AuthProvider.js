import React, { useState } from 'react';
import { AuthContext, initialState } from './AuthContext';

function AuthProvider(props) {
  const [state, setState] = useState(initialState);

  const login = () => {
    setState({ ...state, isAuthenticated: true });
  };

  const logout = () => {
    setState({ ...state, isAuthenticated: false });
  };

  return (
    <AuthContext.Provider value={{ state, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
