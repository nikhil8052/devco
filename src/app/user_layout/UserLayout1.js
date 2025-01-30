import React from "react";
import PHeader from '../components/layout/PHeader';
import PFooter from '../components/layout/PFooter';

const UserLayout = ({ children }) => {
  return (
    <>
      <PHeader /> 
      {children}
      <PFooter /> 
    </>
  );
};

export default UserLayout;
