import React from 'react';

import { CourseContext } from './CTX';

const Provider = props => {

  const access = "Hello Context";

  return (
    <CourseContext.Provider value={ access }>
      { props.children }
    </CourseContext.Provider>
  )
}
export default Provider;