import React from 'react';
import styled from '@emotion/styled';
import { Box } from '@rebass/emotion';
import media from '../utils/media';

const WideBox = styled(Box)`
  position: relative;
  padding-left: 16px;
  padding-right: 16px;
  background-color: #00ffff;
  ${media.mdDown} {
    /* max-width: 100%; */
  }
`;

export default props => (
  <WideBox
    width={['100%', '150%', '200%']}
    ml={[0, '-25%', '-50%']}
    {...props}
  />
);
