import React, { FC } from 'react';
import { Image, ImageProps } from 'antd';
import ERROR_DEFAULT_IMG from './error.png';

const VVImage: FC<ImageProps> = props => {
  return <Image fallback={ERROR_DEFAULT_IMG} {...props} />;
};

VVImage.displayName = 'VVImage';

export default VVImage;
