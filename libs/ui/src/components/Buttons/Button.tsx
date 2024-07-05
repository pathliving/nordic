'use client';

import clsx from 'clsx';
import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';
import style from './button.module.css';

import '@/styles/colors.css';
import '@/styles/font.css';
import '@/styles/spacing.css';
import '@/styles/transition.css';

export type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  /**
   * What content to add
   */
  children: ReactNode;
  /**
   * What additional styles to add
   */
  className?: string;
  /**
   * What size to use
   */
  size?: 's' | 'm' | 'l';
  /**
   * What background color to use
   */
  appearance?: 'primary' | 'secondary';
  /**
   * What icon to add on the left
   */
  leftIcon?: ReactNode;
  /**
   * What icon to add on the right
   */
  rightIcon?: ReactNode;
  /**
   * What loader to add
   */
  loader?: ReactNode;
  /**
   * What state of loader
   */
  isLoading?: boolean;
};

/**
 * Primary Button UI component for user interaction
 */
const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const {
    children,
    className,
    size = 'm',
    appearance = 'primary',
    type = 'button',
    leftIcon,
    rightIcon,
    loader = 'wait...',
    isLoading,
    disabled,
    ...rest
  } = props;

  const isDisabled = Boolean(disabled || isLoading);

  return (
    <button
      className={clsx(style.button, style[appearance], style[size], className)}
      type={type}
      disabled={isDisabled}
      {...(isDisabled && {
        'aria-disabled': true,
      })}
      ref={ref}
      {...rest}
    >
      <span className={style.content}>
        {leftIcon && <span aria-hidden="true">{leftIcon}</span>}
        {isLoading ? <span>{loader}</span> : children}
        {rightIcon && <span aria-hidden="true">{rightIcon}</span>}
      </span>
    </button>
  );
});

export default Button;
