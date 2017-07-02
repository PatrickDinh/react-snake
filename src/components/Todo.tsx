import * as React from 'react';

export interface Props {
  name: string;
  completed: boolean;
}

function Todo({ name } : Props) {
  return (
    <div>
      Todo: {name}
    </div>
  );
}

export default Todo;