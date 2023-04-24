import { ModalProps } from '@/types/modal';
import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { v1 } from 'uuid';

export const SubjectRecoilKey = `/subjects/${v1()}`;
export const TestRecoilKey = `/test/extraction/${v1()}`;
export const ModalRecordkey = `createModal/${v1()}`;

export const { persistAtom } = recoilPersist();

export const modalState = atom<ModalProps>({
  key: ModalRecordkey,
  default: {} as ModalProps,
});
