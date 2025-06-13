import {fs} from '../config';

export type FONT_FAMILY_TYPES = 'IBMPlexMono' | 'SFProText';

export type FONT_WEIGHT =
  | 'Bold'
  | 'BoldItalic'
  | 'ExtraLight'
  | 'ExtraLightItalic'
  | 'Italic'
  | 'Light'
  | 'LightItalic'
  | 'Medium'
  | 'MediumItalic'
  | 'Regular'
  | 'SemiBold'
  | 'SemiBoldItalic'
  | 'Thin'
  | 'ThinItalic';

export const generateFontFamily = (
  fontFamily: FONT_FAMILY_TYPES,
  weight: FONT_WEIGHT,
) => `${fontFamily}-${weight}`;

type Enumerate<
  N extends number,
  Acc extends number[] = [],
> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>;

type IntRange<F extends number, T extends number> = Exclude<
  Enumerate<T>,
  Enumerate<F>
>;

export type TypographyProps = {
  size?: number;
  family?: FONT_FAMILY_TYPES;
  weight?: FONT_WEIGHT;
  lineHeight?: number;
  letterSpacePercent?: IntRange<0, 101>; // min 0 & max 100
};

export const generateTypography = ({
  size = 0,
  family = 'IBMPlexMono',
  weight,
  lineHeight,
  letterSpacePercent = 0,
}: TypographyProps) => {
  return {
    ...(family && weight && {fontFamily: generateFontFamily(family, weight)}),
    ...(size && {fontSize: fs(size)}),
    ...(lineHeight && {lineHeight: fs(lineHeight)}),
    ...(letterSpacePercent && {
      letterSpacing: fs(size) * (letterSpacePercent / 100),
    }),
  };
};
