export enum tooltipPostitionEnum {
  Up,
  Down,
  Left,
  Right,
}

export interface ITooltip {
  content: string;
  position: tooltipPostitionEnum;
  children?: JSX.Element;
  disabled: boolean;
  tooltipRef?: React.RefObject<HTMLDivElement>;
}
