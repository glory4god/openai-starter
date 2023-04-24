export interface ModalProps {
  isShow: boolean;
  top?: React.ReactNode | string;
  content?: React.ReactNode | string;
  children?: React.ReactNode;
  button?: {
    content: string;
    onClick: () => void;
  };
  leftButton?: {
    content: string;
    onClick: () => void;
  };
}
