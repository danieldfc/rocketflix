import { createGlobalStyle } from 'styled-components';

import colors from './colors';

export default createGlobalStyle`
  :root {
    --primary-color: ${colors.primary};
    --primary-dark-color: ${colors.primaryDark};
    --primary-background-color: ${colors.primaryBackground};
    --segundary-color: ${colors.segundary};
    --green-color: ${colors.green};
    --green-light-color: ${colors.greenLight};
    --red-color: ${colors.red};
    --red-light-color: ${colors.redLight};
    --white-color: ${colors.white};
    --gray-color: ${colors.gray};
    --gray-light-color: ${colors.grayLight};
    --gray-dark-color: ${colors.grayDark};
    --rocketseat-color: ${colors.rocketseat};
    --purple-color: ${colors.purple};
    --error-color: ${colors.error};
    --error-background-color: ${colors.errorBackground};
    --info-color: ${colors.info};
    --info-background-color: ${colors.infoBackground};
    --success-color: ${colors.success};
    --success-background-color: ${colors.successBackground};
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  #root {
    min-height: 100%;
  }

  body {
    color: var(--white-color);
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: Roboto, serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`;
