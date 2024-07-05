'use client';
/*
import * as LabelPrimitive from '@radix-ui/react-label';
// import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

// import { cn } from '@/lib/utils';

// const labelVariants = cva(
//   'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
// );

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
  //   & VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    // className={cn(labelVariants(), className)}
    className={className}
    {...props}
  />
));

Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
*/

import { Label as LabelUI } from '@radix-ui/react-form';
import * as React from 'react';

// import { cn } from '@/lib/utils';

// const labelVariants = cva(
//   'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
// );

const Label = React.forwardRef<
  React.ElementRef<typeof LabelUI>,
  React.ComponentPropsWithoutRef<typeof LabelUI>
  //   & VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelUI
    ref={ref}
    // className={cn(labelVariants(), className)}
    className={className}
    {...props}
  />
));

Label.displayName = LabelUI.displayName;

export default Label;
