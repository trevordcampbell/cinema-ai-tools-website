// NOTE: This componetn is used as an additive alteration to the Native NEXT JS <Image> Component, adding some stylign and a skeleton loader
// TODO - Check to see if this can handle the use of the 'priority' prop when used in a page or component, might need type adjustments. Also check 'fill' behavior...

import Image, { ImageProps } from 'next/image';
import * as React from 'react';

import clsxm from '@/lib/clsxm';

type NextImageProps = {
  useSkeleton?: boolean;
  imgClassName?: string;
  blurClassName?: string;
  priority?: boolean;
  unoptimized?: boolean;
  alt: string;
} & (
  | { width: string | number; height: string | number }
  | { fill: true; width?: string | number; height?: string | number }
) &
  ImageProps;

/**
//  *
//  * @description Must set width using `w-` className
//  * @param useSkeleton add background with pulse animation, don't use it if image is transparent
//  */
export default function NextImage({
  useSkeleton = false,
  src,
  width,
  height,
  alt,
  className,
  imgClassName,
  blurClassName,
  priority = false,
  unoptimized = false,
  ...rest
}: NextImageProps) {
  const [status, setStatus] = React.useState(
    useSkeleton ? 'loading' : 'complete'
  );
  const widthIsSet = className?.includes('w-') ?? false;

  return (
    <figure
      style={!widthIsSet ? { width: `${width}px` } : undefined}
      className={className}
    >
      <Image
        className={clsxm(
          imgClassName,
          status === 'loading' && clsxm('animate-pulse', blurClassName)
        )}
        src={src}
        width={width}
        height={height}
        alt={alt}
        priority={priority}
        unoptimized={unoptimized}
        onLoadingComplete={() => setStatus('complete')}
        {...rest}
      />
    </figure>
  );
}
