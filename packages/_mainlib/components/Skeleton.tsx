import React, { CSSProperties } from 'react';
import clsx from 'clsx';
import './assets/styles/skeleton.css';

interface SkeletonProps {
  show?: boolean;
  block?: boolean;
  className?: string;
  style?: CSSProperties;
  width?: string | number;
  height?: string | number;
  boxHeight?: string | number;
  children?: React.ReactNode;
}

const Skeleton: React.FC<SkeletonProps> = ({
  style,
  width,
  height,
  children,
  className,
  show = true,
  boxHeight = height,
}) => {
  const shouldAutoSize = !!children && !(width || height);

  // Defaults
  width = width || 24;
  height = height || 24;
  boxHeight = boxHeight || height;

  return (
    <span
      className={clsx('skeleton', className, {
        ['show']: show,
        ['wrapper']: shouldAutoSize,
        ['loaded']: !shouldAutoSize && !!children,
      })}
      style={
        shouldAutoSize
          ? {}
          : {
              minWidth: `${width}px`,
              minHeight: `${height}px`,
              marginBottom: `calc(${boxHeight}px - ${height}px)`,
              ...style,
            }
      }>
      {children}
    </span>
  );
};

export default Skeleton;
