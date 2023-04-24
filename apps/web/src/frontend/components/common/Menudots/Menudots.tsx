import clsx from 'clsx';
import { Icon } from 'mainlib/components';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { menudots } from 'public/svg';

const Menudots = () => {
  const { push } = useRouter();
  const { data: session } = useSession();

  return (
    <button className={clsx()}>
      <Icon name={menudots} size={30} />
    </button>
  );
};

export default Menudots;
