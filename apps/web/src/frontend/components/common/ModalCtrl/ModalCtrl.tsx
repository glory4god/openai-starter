import { useCallback } from 'react';
import { useRecoilState } from 'recoil';

import { modalState } from '@/frontend/lib/recoil/atoms';
import { Modal } from 'mainlib/components';

const ModalCtrl = () => {
  const [modal, setModal] = useRecoilState(modalState);
  const closeModal = useCallback(() => {
    setModal({
      isShow: false,
      top: undefined,
      content: undefined,
      children: undefined,
    });
  }, []);

  return (
    <>
      {modal.isShow && (
        <Modal closeModal={closeModal} {...modal}>
          {modal.children}
        </Modal>
      )}
    </>
  );
};

export default ModalCtrl;
