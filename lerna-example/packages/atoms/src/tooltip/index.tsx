import React, { FC } from 'react';
import { Tooltip, TooltipProps } from 'antd';

const VVTooltip: FC<TooltipProps> = props => {
  return (
    <Tooltip mouseEnterDelay={0} mouseLeaveDelay={0.02} {...props}>
      {props.children}
    </Tooltip>
  );
};

VVTooltip.displayName = 'VVTooltip';

export default VVTooltip;
