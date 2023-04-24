import clsx from 'clsx';

export interface TextFieldLineContainerBaseProps {
  /**
   * 컴포넌트의 root element(`div`)에 추가되는 className입니다.
   */
  className?: string;

  label: string;

  /**
   * 에러 상태를 표시합니다.
   */
  hasError?: boolean;

  disabled?: boolean;

  /**
   * 입력값이 있을 떄 label이 위로 이동하는 대신 보통 placeholder 처럼 동작하게 만듭니다.
   */

  hasValue?: boolean;

  labelHtmlFor?: string;

  focused?: boolean;
}

export type Props<Element extends keyof JSX.IntrinsicElements = 'div'> =
  TextFieldLineContainerBaseProps & {
    as?: Element;
    value?: string | number | string[];
  } & Omit<
      JSX.IntrinsicElements[Element],
      keyof TextFieldLineContainerBaseProps | 'as'
    >;

function TextFieldLineContainer<T extends keyof JSX.IntrinsicElements = 'div'>(
  props: Props<T>,
) {
  const {
    as: component = 'div',
    className,
    label,
    hasError,
    disabled,
    style,
    hasValue,
    children,
    labelHtmlFor,
    value = '',
    focused,
    ...rest
  } = props;
  const Componnet = component as any;

  return (
    <Componnet
      className={clsx(
        'text-field-line',
        'font-size--22',
        { 'text-field-line--has-value': hasValue },
        { 'text-field-line--focused': focused },
        className,
      )}
      {...rest}>
      {children}

      <div className="text-field-line__label font-size--13">
        <label htmlFor={labelHtmlFor} aria-hidden>
          {label}
        </label>
      </div>

      <div className="text-field-line__input text-field-line__input-blank">
        {String(value)?.length !== 0 ? value : label}
      </div>
      <span className="text-field-line__bottom-line" />
    </Componnet>
  );
}

export default TextFieldLineContainer;
