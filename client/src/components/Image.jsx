import React from 'react';

// let img=require('./ima/h.jpg');

const Image = ({ src, ...rest }) => {
  return <img src={src} {...rest} alt={''} />;
};

export default Image;
