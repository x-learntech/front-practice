import React, { memo, CSSProperties, FC, ReactNode } from 'react';

import { PropsIncludeChildren, highlightChildComponent } from './utils';
import { isEqual } from 'lodash-es';

export interface HighlightTextProp {
  keywords: [] | string | null;
  highlightStyle?: CSSProperties;
  ignoreCase?: boolean;
  children?: ReactNode;
}

const HighlightText: FC<HighlightTextProp> = ({
  keywords,
  highlightStyle = { color: '#5590F6', backgroundColor: 'transparent', padding: 0 },
  ignoreCase = true,
  children
}) => (
  <>
    {children
      ? React.Children.map(children, item =>
          highlightChildComponent(item as PropsIncludeChildren, keywords || '', highlightStyle, ignoreCase)
        )
      : ''}
  </>
);

HighlightText.displayName = 'HighlightText';

export default memo(HighlightText, (prevProps, nextProps) => {
  return isEqual(prevProps, nextProps);
});
