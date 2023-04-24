import { ModalProps } from '@/types/modal';
import { EntireUserTest } from '@/types/test';
import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { v1 } from 'uuid';

export const SubjectRecoilKey = `/subjects/${v1()}`;
export const TestRecoilKey = `/test/extraction/${v1()}`;
export const ModalRecordkey = `createModal/${v1()}`;

export const { persistAtom } = recoilPersist();

export const subjectState = atom<Subject | null>({
  key: SubjectRecoilKey,
  default: null,
  // effects_UNSTABLE: [persistAtom],
});

export const testState = atom<EntireUserTest>({
  key: TestRecoilKey,
  default: {} as EntireUserTest,
});

export const modalState = atom<ModalProps>({
  key: ModalRecordkey,
  default: {} as ModalProps,
});
