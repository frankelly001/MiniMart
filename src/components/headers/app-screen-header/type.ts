export type AppHeaderProps = {
  title?: string;
  onPressBack?: () => void;
  search?: {value: string; setValue: (text: string) => void};
};
