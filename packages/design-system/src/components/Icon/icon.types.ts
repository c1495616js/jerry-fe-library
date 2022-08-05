import { SVGAttributes } from 'react';
import { IconSize, IconVariant } from './icon.styles';

export interface IconProps extends SVGAttributes<SVGElement> {
  size?: IconSize;
  variant?: IconVariant;
}
