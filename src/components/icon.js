import React from 'react';

export default function Icon({className, icon}) {
  return (
    <div className={`icon ${className ? className : ''}`}>
      <i className={icon}></i>
    </div>
  );
}