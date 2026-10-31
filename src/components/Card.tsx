import type { ReactNode } from 'react';
import { cn } from '../lib/utils';

interface CardProps {
  as?: 'section' | 'article';
  className?: string;
  children: ReactNode;
}
export function Card({
  as: Tag = 'section',
  className,
  children,
  ...rest
}: CardProps) {
  return (
    <Tag
      className={cn(
        'flex flex-col gap-2 rounded-2xl border border-stone-200 p-4',
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
