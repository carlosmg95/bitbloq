import React from "react";
import styled from "@emotion/styled";
import nunjucks from "nunjucks";
import { colors, Icon } from "@bitbloq/ui";
import EventShape from "./EventShape";
import { bloqColors, horizontalShapes } from "../config";

import { IBloqType, IBloq } from "../index";

interface IHorizontalBloqProps {
  type: IBloqType;
  className?: string;
  onClick?: React.MouseEventHandler;
  selected?: boolean;
  bloq?: IBloq;
}

const HorizontalBloq: React.FunctionComponent<IHorizontalBloqProps> = ({
  type,
  className,
  onClick,
  selected,
  bloq
}) => {
  const ShapeComponent = horizontalShapes[type.category];

  const parameters = (bloq && bloq.parameters) || {};
  let icon = type.icon;
  const { iconSwitch } = type;
  if (iconSwitch) {
    const iconKey = Object.keys(iconSwitch).find(
      key => nunjucks.renderString(`{{${key}}}`, parameters) === "true"
    );
    icon = iconSwitch[iconKey || Object.keys(iconSwitch)[0]];
  }

  return (
    <Container className={className} onClick={onClick}>
      <SVG>
        <g transform="translate(2,2)">
          <ShapeComponent
            fill={bloqColors[type.category]}
            stroke={colors.brandOrange}
            strokeWidth={selected ? 2 : 0}
          />
        </g>
      </SVG>
      {icon && <BloqIcon src={icon} alt={type.name} />}
    </Container>
  );
};

export default HorizontalBloq;

/* styled components */

const Container = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #bbb;
  width: 60px;
  height: 60px;
`;

const BloqIcon = styled.img`
  margin-left: 4px;
  width: 44px;
  height: 44px;
  z-index: 1;
`;

const SVG = styled.svg`
  position: absolute;
  top: -2px;
  left: -2px;
  width: 68px;
  height: 64px;
`;
