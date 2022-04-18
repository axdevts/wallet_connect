export interface LayoutProps {
  margin?: string;
  marginTop?: string;
  marginRight?: string;
  marginBottom?: string;
  marginLeft?: string;
  padding?: string;
  paddingTop?: string;
  paddingRight?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  fontWeight?: string;
  textAlign?: string;
  fontSize?: string;
  lineHeight?: string;
  letterSpacing?: string;
  color?: string;
  display?: string;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  maxWidth?: string;
  maxHeight?: string;
  minWidth?: string;
  minHeight?: string;
  width?: string;
  height?: string;
  bgColor?: string;
  borderRadius?: string;
  border?: string;
  borderTopLeft?: string;
  borderTopRight?: string;
  borderBottomRight?: string;
  borderBottomLeft?: string;
  bg?: string;
  textFillColor?: string;
  opacity?: string;
}

export interface ItemsProps {
  items: ItemProps[];
}

export interface ImgCardProps {
  item: ItemProps;
}

export interface ItemProps {
  img?: any;
  title?: string;
  subTitle?: string;
  description?: string;
}

export interface SuccessModalProps {
  show?: any;
  closeModal?: any;
}
