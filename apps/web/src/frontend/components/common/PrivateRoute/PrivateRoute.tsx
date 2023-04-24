import { useEffect } from 'react';

import { useRouter } from 'next/router';

const PrivateRoute = () => {
  const { push } = useRouter();

  useEffect(() => {}, []);

  return <></>;
};

export default PrivateRoute;
