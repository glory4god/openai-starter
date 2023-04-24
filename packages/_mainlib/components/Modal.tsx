import React, { PropsWithChildren } from 'react';
import clsx from 'clsx';
import Text from './Text';
import Button from './Button';

interface ModalProps {
  closeModal: () => void;
  top?: React.ReactNode | string;
  content?: React.ReactNode | string;
  button?: { content: string; onClick: () => void };
  leftButton?: { content: string; onClick: () => void };
}

const Modal = ({
  closeModal,
  children,
  top,
  content,
  button,
  leftButton,
}: PropsWithChildren<ModalProps>) => {
  return (
    <>
      <div
        className={clsx(
          'fixed w-full h-full top-0 overflow-hidden bg-black opacity-25 z-[90px]',
        )}
        onClick={closeModal}
      />
      <div
        className={clsx(
          'fixed top-1/2 left-1/2 bg-white w-[80%] max-w-[360px] h-auto p-6 z-[95px] rounded-[16px]',
        )}
        style={{
          transform: 'translate(-50%, -50%)',
        }}>
        <div className="flex flex-col items-center justify-center">
          <Text typography="ST10" className="mb-2">
            {top}
          </Text>
          <Text typography="ST11">{content}</Text>
          {children}
          <div className="space-x-2 mt-4">
            {leftButton && (
              <Button size="normal" onClick={leftButton?.onClick}>
                {leftButton?.content}
              </Button>
            )}
            <Button
              size="normal"
              onClick={button?.onClick ? button.onClick : closeModal}>
              {button?.content ? button?.content : '닫기'}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
