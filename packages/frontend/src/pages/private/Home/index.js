import React from 'react';

import { VideoCarousel, Synopsis } from '../../../components';

import { RFHomeContainer } from './styles';

export default () => {
  return (
    <RFHomeContainer>
      <Synopsis />
      <VideoCarousel />
    </RFHomeContainer>
  );
};
