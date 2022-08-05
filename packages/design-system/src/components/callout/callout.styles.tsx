import { styled } from '@/lib/stitches.config';

export const StyledCalloutIconWrapper = styled('div', {
  position: 'absolute',
  display: 'flex',
  top: '-24px',
  right: '-16px',
  borderRadius: 'var(--border-rounded)',
  padding: '8px',
  color: 'var(--colors-body)',
  background: 'var(--icon-background, var(--c1495616js-colors-body))',

  variants: {
    variant: {
      info: {
        '--icon-background': 'var(--c1495616js-colors-brand)',
      },
      danger: {
        '--icon-background': 'var(--c1495616js-colors-danger)',
      },
    },
  },
});

export const StyledCalloutLabelWrapper = styled('div', {
  position: 'absolute',
  display: 'flex',
  top: '-24px',
  right: '-8px',
  borderRadius: 'var(--border-radius-1)',
  padding: '8px',
  color: 'var(--c1495616js-colors-body)',
  fontSize: 'var(--font-size-1)',
  fontWeight: 'var(--font-weight-3)',
  userSelect: 'none',
  background: 'var(--icon-background, var(--c1495616js-colors-body))',

  variants: {
    variant: {
      info: {
        '--icon-background': 'var(--c1495616js-colors-brand)',
      },
      danger: {
        '--icon-background': 'var(--c1495616js-colors-danger)',
      },
    },
  },
});

export const StyledCallout = styled('aside', {
  '*:last-child': {
    marginBottom: '0px',
  },

  position: 'relative',
  padding: '30px 30px',
  marginBottom: '2.25rem',
  borderRadius: 'var(--border-radius-1)',
  color: 'var(--c1495616js-colors-typeface-primary)',
  border: '1px solid var(--c1495616js-colors-emphasis)',
  background: 'var(--callout-background, var(--c1495616js-colors-emphasis))',

  variants: {
    variant: {
      info: {
        '--callout-background': 'var(--c1495616js-colors-emphasis)',
      },
      danger: {
        '--callout-background': 'var(--c1495616js-colors-danger-emphasis)',
      },
    },
  },
});
