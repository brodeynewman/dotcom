import React, { lazy, Suspense } from 'react';

import Loading from '../Loading';

const withLazyLoad = dynamicImport => (props) => {
  const Component = lazy(dynamicImport);

  return (
    <Suspense fallback={<Loading />}>
      <Component {...props} />
    </Suspense>
  );
};

export default withLazyLoad;
