import clsx from 'clsx';
import React, { ReactNode, AllHTMLAttributes, forwardRef, Ref } from 'react';

import './assets/styles/text.css';

export const Typography = {
  T1: { fontSize: 30, lineHeight: 1.333, borderRadius: '8px' },
  T2: { fontSize: 26, lineHeight: 1.345, borderRadius: '7px' },
  T3: { fontSize: 22, lineHeight: 1.41, borderRadius: '6px' },
  T4: { fontSize: 20, lineHeight: 1.45, borderRadius: '6px' },
  T5: { fontSize: 17, lineHeight: 1.5, borderRadius: '5.5px' },
  T6: { fontSize: 15, lineHeight: 1.5, borderRadius: '5px' },
  T7: { fontSize: 13, lineHeight: 1.5, borderRadius: '5px' },

  ST1: { fontSize: 29, lineHeight: 1.31, borderRadius: '8px' },
  ST2: { fontSize: 28, lineHeight: 1.321, borderRadius: '7px' },
  ST3: { fontSize: 27, lineHeight: 1.333, borderRadius: '7px' },
  ST4: { fontSize: 25, lineHeight: 1.36, borderRadius: '7px' },
  ST5: { fontSize: 24, lineHeight: 1.375, borderRadius: '7px' },
  ST6: { fontSize: 23, lineHeight: 1.391, borderRadius: '7px' },
  ST7: { fontSize: 21, lineHeight: 1.429, borderRadius: '6px' },
  ST8: { fontSize: 19, lineHeight: 1.474, borderRadius: '6px' },
  ST9: { fontSize: 18, lineHeight: 1.5, borderRadius: '6px' },
  ST10: { fontSize: 16, lineHeight: 1.5, borderRadius: '5px' },
  ST11: { fontSize: 14, lineHeight: 1.5, borderRadius: '5px' },
  ST12: { fontSize: 12, lineHeight: 1.5, borderRadius: '5px' },
  ST13: { fontSize: 11, lineHeight: 1.5, borderRadius: '5px' },
} as const;

export type TypographyValue = keyof typeof Typography;

export interface BaseProps {
  children?: ReactNode;
  className?: string;
  typography?: TypographyValue;
  ellipsisAfterLines?: number;
  stringToJSX?: boolean;
  /**
   * @description word-break: keep-all을 적용할지 여부를 나타냅니다.
   * @default true
   */
  wordBreak?: boolean;
  /**
   * @deprecated
   */
  spanAttributes?: AllHTMLAttributes<any>;
}

export type Props = BaseProps;

type TextProps<Element extends keyof JSX.IntrinsicElements = 'span'> =
  BaseProps & {
    as?: Element;
  } & Omit<AllHTMLAttributes<Element>, 'as'>;

function Text<Element extends keyof JSX.IntrinsicElements = 'span'>(
  props: TextProps<Element>,
  ref: Ref<HTMLElement>,
) {
  const {
    as: Component = 'span',
    className,
    children,
    ellipsisAfterLines,
    typography = 'T5',
    stringToJSX,
    style,
    spanAttributes,
    wordBreak = true,
    role,
    ...rest
  } = props as TextProps;

  const isSingleLine =
    ellipsisAfterLines !== undefined && ellipsisAfterLines === 1;
  const isMultiLine =
    ellipsisAfterLines !== undefined && ellipsisAfterLines > 1;

  return (
    <Component
      ref={ref}
      role={role ?? (Component === 'span' ? 'text' : undefined)}
      {...rest}
      {...(spanAttributes as any)}
      className={clsx(className, 'text', {
        'one-line': isSingleLine,
        'two-line': isMultiLine,
        'word-break': isSingleLine ? false : wordBreak,
        [`text--as`]: Component !== 'span',
      })}
      style={{
        fontSize: Typography[typography].fontSize,
        lineHeight: Typography[typography].lineHeight,
        WebkitLineClamp: isMultiLine ? ellipsisAfterLines : undefined,
        ...style,
      }}>
      {stringToJSX === true && typeof children === 'string'
        ? convertNewLineToJSX(children)
        : children}
    </Component>
  );
}

export default forwardRef(Text);

function convertNewLineToJSX(str: string) {
  return str.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {index > 0 ? <br /> : ''}
      {line}
    </React.Fragment>
  ));
}
