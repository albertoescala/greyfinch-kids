import React, { Suspense } from 'react'

const WaitingComponent = (Component) => {
  return props => (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );
}

export default WaitingComponent
