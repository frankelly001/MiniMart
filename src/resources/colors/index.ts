export const colors = {
  transparent: 'transparent',
  primary_1: '#FAF4FF',
  primary_2: '#F3E6FF',
  primary_3: '#C27BFF',
  primary_4: '#9825F8',
  primary_5: '#6F17B2',
  primary_6: '#4B0082',

  neutral_light_1: '#FAFAFA',
  neutral_light_2: '#EFEFEF',
  neutral_light_3: '#DCDCDC',
  neutral_light_4: '#BDBDBD',
  neutral_light_5: '#989898',
  neutral_light_6: '#7C7C7C',

  neutral_dark_1: '#E7E7E7',
  neutral_dark_2: '#B0B0B0',
  neutral_dark_3: '#888888',
  neutral_dark_4: '#5D5D5D',
  neutral_dark_5: '#333333',
  neutral_dark_6: '#121212',

  dark_tranparent_1: '#949191a2',
  dark_tranparent_2: '#9491912d',
  dark_tranparent_3: '#1b1b1b7e',

  support_success_1: '#E7F4E8',
  support_success_2: '#3AC0A0',
  support_success_3: '#14BE2F',

  support_warning_1: '#FFF4E4',
  support_warning_2: '#FFB37C',
  support_warning_3: '#E86339',

  support_error_1: '#FFE2E5',
  support_error_2: '#FF616D',
  support_error_3: '#D20909',

  support_yellow: '#FFD700',
};

export type ColorKeys = keyof typeof colors;
export type ColorDefinitions = {[key in ColorKeys]: string};
