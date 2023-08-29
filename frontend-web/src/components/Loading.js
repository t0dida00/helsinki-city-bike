import React from 'react';

export const LoadingPage = ({message, style}) => {
  return (
    <div className="flex items-center justify-center h-screen flex-col ">
      <div className="loader"></div>
      <div>{message}</div>
    </div>
  );
};

