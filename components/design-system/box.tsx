import { FC, HTMLAttributes } from "react";
import styled from "styled-components";
import { isString } from "lodash";

type BoxBaseType = {
  m?: number | string;
  mt?: number;
  mr?: number;
  mb?: number;
  ml?: number;
  mx?: number;
  my?: number;
  p?: number | string;
  pt?: number;
  pr?: number;
  pb?: number;
  pl?: number;
  px?: number;
  py?: number;
  radius?: number;
};

const BoxBase = styled.div<BoxBaseType>`
  width: 100%;
  ${({ ml }) => ml && `margin-left: ${ml}rem`};
  ${({ mr }) => mr && `margin-right: ${mr}rem`};
  ${({ mb }) => mb && `margin-bottom: ${mb}rem`};
  ${({ mt }) => mt && `margin-top: ${mt}rem`};
  ${({ mx }) => mx && `margin-left: ${mx}rem; margin-right: ${mx}rem;`}
  ${({ my }) => my && `margin-top: ${my}rem; margin-bottom: ${my}rem;`}
  ${({ m }) => m && `margin: ${isString(m) ? m : `${m}rem`}`};
  ${({ pl }) => pl && `padding-left: ${pl}rem`};
  ${({ pr }) => pr && `padding-right: ${pr}rem`};
  ${({ pb }) => pb && `padding-bottom: ${pb}rem`};
  ${({ pt }) => pt && `padding-top: ${pt}rem`};
  ${({ px }) => px && `padding-left: ${px}rem; padding-right: ${px}rem;`}
  ${({ py }) => py && `padding-top: ${py}rem; padding-bottom: ${py}rem;`}
  ${({ p }) => p && `padding: ${isString(p) ? p : `${p}rem`}`};
  ${({ radius }) => (radius ? `border-radius: ${radius}rem` : "1rem")};
`;

type BoxType = BoxBaseType & HTMLAttributes<HTMLDivElement>;

export const Box: FC<BoxType> = (props) => {
  const { children, ...rest } = props;

  return <BoxBase {...rest}>{children}</BoxBase>;
};
