import {
  StyledCallout,
  StyledCalloutIconWrapper,
  StyledCalloutLabelWrapper,
} from './callout.styles';
import { CalloutProps } from './callout.types';
import { getVariantIcon } from './utils';

const Callout = (props: CalloutProps) => {
  const { children, label, variant, ...rest } = props;

  const icon = label ? null : getVariantIcon(variant);

  return (
    <StyledCallout variant={variant} {...rest}>
      {icon ? (
        <StyledCalloutIconWrapper variant={variant}>
          {icon}
        </StyledCalloutIconWrapper>
      ) : null}
      {label ? (
        <StyledCalloutLabelWrapper variant={variant}>
          {label}
        </StyledCalloutLabelWrapper>
      ) : null}
      {children}
    </StyledCallout>
  );
};

export default Callout;
