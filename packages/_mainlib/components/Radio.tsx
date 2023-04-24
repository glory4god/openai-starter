// import { motion } from 'framer-motion';
import clsx from 'clsx';
import {
  ChangeEvent,
  Children,
  cloneElement,
  ComponentProps,
  InputHTMLAttributes,
  ReactElement,
  useCallback,
  useState,
} from 'react';

import useId from '../hooks/useId';
import RadioOption from './RadioOption';

type RadioOptionElement = ReactElement<ComponentProps<typeof RadioOption>>;

interface Props
  extends Pick<
    InputHTMLAttributes<HTMLInputElement>,
    'className' | 'disabled' | 'value' | 'defaultValue' | 'onChange' | 'name'
  > {
  children: RadioOptionElement | RadioOptionElement[];
}

function Radio2(props: Props) {
  const [value, setValue] = useState(props.defaultValue);

  const uncontrolled = props.value == null;
  const { children, ...otherProps } = props;

  return (
    <ControlledRadio
      {...otherProps}
      value={uncontrolled ? value : props.value}
      onChange={(event) => {
        props.onChange?.(event);

        if (uncontrolled) {
          setValue(event.target.value);
        }
      }}>
      {children}
    </ControlledRadio>
  );
}

function ControlledRadio({
  className,
  children,
  disabled,
  value,
  onChange,
  name,
}: Props) {
  const id = useId('radio');

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onChange?.(event);
    },
    [onChange],
  );

  const checkedIndex = Children.map(children, (child) => {
    return child.props;
  }).findIndex((p) => p.value === value);

  const checked = checkedIndex !== -1;

  const numberOfChildren = Children.count(children);

  return (
    <div className={clsx('radio', 'form-control', className)}>
      {/* <motion.div
        className="radio__indicator"
        style={{
          width: `calc((100% - 8px) / ${numberOfChildren})`,
        }}
        animate={checked ? 'checked' : 'unchecked'}
        variants={{
          checked: {
            opacity: 1,
            translateX: `${checkedIndex * 100}%`,
          },
          unchecked: {
            opacity: 0,
            translateX: 0,
          },
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 30, mass: 1 }}
      /> */}
      {Children.map(children, (child) => {
        return cloneElement(child, {
          name: name ?? id,
          disabled,
          checked: value === child.props.value,
          onChange: handleChange,
        });
      })}
    </div>
  );
}

Radio2.Option = RadioOption;

export default Radio2;
