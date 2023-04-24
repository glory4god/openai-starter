// import { motion } from 'framer-motion';
import clsx from 'clsx';
import { InputHTMLAttributes, Ref, useState } from 'react';

import './assets/styles/radio.css';

function Radio(
  {
    className,
    children,
    checked,
    id: elementId,
    ...rest
  }: Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>,
  forwardedRef: Ref<HTMLInputElement>,
) {
  return (
    <label>
      <input
        className="b-radio"
        type="radio"
        checked={checked}
        ref={forwardedRef}
        {...rest}
      />
      <span className={clsx(`${checked ? 'checked' : ''}`)}>{children}</span>
    </label>
  );
}

export default Radio;
