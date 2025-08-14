import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export const withAuth = (Component) => {
  return (props) => {
    const { user, loading } = useAuth();
    const navigate = useNavigate();

    if (loading) {
      return <div>Loading...</div>;
    }

    if (!user) {
      navigate('/auth');
      return null;
    }

    return <Component {...props} />;
  };
};
