export type toastTypeProps = 'SUCCESS' | 'ERROR' | 'WARNING' | 'INFO';

export type appToastViewProps = {
  message: string | undefined;

  type: toastTypeProps;
  onHide: () => void;
};

export interface ToastProps {
  toastType: toastTypeProps;
  actionText?: string;
}
