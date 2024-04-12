import React, {FC} from 'react';
import './Button.scss';

type Size = 'small' | 'medium' | 'large';

type Props = {
  size: Size,
  children?: string,
}

const Button: FC <Props> = (props) => {

  const {
    size,
    children = 'click'
  } = props;

  return (
    <button className={size}>
      <span>
        {children}
      </span>
    </button>
  )
}

export default Button;