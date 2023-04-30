import clsx from 'clsx';
import { ReactNode } from 'react';

interface ProseProps {
  children: ReactNode;
  className?: string;
}

export function Prose({ children, className }: ProseProps): JSX.Element {
  return (
    <div className={clsx(className, 'prose dark:prose-invert')}>{children}</div>
  );
}
