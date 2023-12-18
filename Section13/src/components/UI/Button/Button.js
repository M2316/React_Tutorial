import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {

  console.log('props에 함수+객체+배열 등이 넘어온다면 memo는 정상작동 하지 않는다.')
  return (
    <button
      type={props.type || 'button'}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default React.memo(Button);
