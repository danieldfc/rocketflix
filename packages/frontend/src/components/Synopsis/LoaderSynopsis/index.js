import React from 'react';
import ContentLoader from 'react-content-loader';

const LoaderSynopsis = props => (
  <ContentLoader
    speed={2}
    width={1280}
    height={400}
    viewBox="0 0 1280 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="6" y="0" rx="0" ry="0" width="549" height="366" />
    <rect x="621" y="0" rx="0" ry="0" width="700" height="70" />
    <rect x="621" y="106" rx="0" ry="0" width="700" height="70" />
    <rect x="621" y="190" rx="3" ry="3" width="700" height="25" />
    <rect x="621" y="220" rx="0" ry="0" width="700" height="25" />
    <rect x="621" y="250" rx="0" ry="0" width="700" height="25" />
    <rect x="621" y="280" rx="0" ry="0" width="300" height="25" />
    <rect x="621" y="310" rx="0" ry="0" width="200" height="66" />
  </ContentLoader>
);

export default LoaderSynopsis;
