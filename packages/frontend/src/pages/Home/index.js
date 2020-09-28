import React from 'react';

import { VideoCarousel, Synopsis, Header } from '../../components';

import { RFHomeContainer } from './styles';

export default function Home() {
  return (
    <RFHomeContainer>
      <Header />
      <Synopsis />
      <VideoCarousel />
    </RFHomeContainer>
  );
}
