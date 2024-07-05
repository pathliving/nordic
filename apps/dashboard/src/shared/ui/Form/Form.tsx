import Input from '@/shared/ui/Input/Input';
import Label from '@/shared/ui/Label/Label';
import Text from '@/shared/ui/Text/Text';
import {
  Control as ControlUI,
  Field as FieldUI,
  Message as MessageUI,
  Root as RootUI,
  Submit as SubmitUI,
} from '@radix-ui/react-form';
import * as LabelPrimitive from '@radix-ui/react-label';
import {
  ComponentPropsWithoutRef,
  ElementRef,
  FormEventHandler,
  HTMLAttributes,
  Ref,
  forwardRef,
  useId,
} from 'react';
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  FormProvider,
  UseFormHandleSubmit,
  UseFormReturn,
  useFormContext,
} from 'react-hook-form';
import Button from '../Button/Button';

interface IForm<T extends FieldValues>
  extends UseFormReturn<T>,
    Omit<HTMLAttributes<HTMLFormElement>, 'reset' | 'onSubmit'> {
  formRef?: Ref<HTMLFormElement>;
  onSubmit: ReturnType<UseFormHandleSubmit<T>>;
}

const Form = <IFormValues extends FieldValues>({
  children,
  onSubmit,
  className,
  formRef,
  ...props
}: IForm<IFormValues>) => {
  return (
    <FormProvider {...props}>
      <RootUI
        ref={formRef}
        onSubmit={(e) =>
          onSubmit(e) as unknown as FormEventHandler<HTMLFormElement>
        }
        className={className}
      >
        {children}
      </RootUI>
    </FormProvider>
  );
};

const FormSubmit = forwardRef<
  ElementRef<typeof Button>,
  ComponentPropsWithoutRef<typeof Button>
>(({ ...props }, ref) => {
  return (
    <SubmitUI asChild>
      <Button
        ref={ref}
        {...props}
      />
    </SubmitUI>
  );
});
FormSubmit.displayName = 'FormSubmit';

const FormLabel = forwardRef<
  ElementRef<typeof LabelPrimitive.Root>,
  ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, id, ...props }, ref) => {
  return (
    <Label
      ref={ref}
      className={className}
      id={`${id}-form-label`}
      {...props}
    />
  );
});
FormLabel.displayName = 'FormLabel';

const FormDescription = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ children, id, className }, ref) => {
  return (
    <Text
      as="p"
      id={`${id}-form-description`}
      className={className}
      ref={ref}
    >
      {children}
    </Text>
  );
});
FormDescription.displayName = 'FormDescription';

const FormMessage = forwardRef<
  HTMLSpanElement,
  HTMLAttributes<HTMLSpanElement>
>(({ children, id, ...props }, ref) => {
  return (
    <MessageUI
      id={`${id}-form-message`}
      style={{ color: 'red' }}
      asChild
      {...props}
    >
      <Text
        as="span"
        ref={ref}
      >
        {children}
      </Text>
    </MessageUI>
  );
});
FormMessage.displayName = 'FormMessage';

interface IFormField {
  label?: string;
  placeholder?: string;
  description?: string;
}

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  name,
  label,
  placeholder,
  description,
  ...props
}: Omit<ControllerProps<TFieldValues, TName>, 'render'> & IFormField) => {
  const id = useId();

  const { getFieldState, formState } = useFormContext();

  const { error } = getFieldState(name, formState);
  const errorMessage = error?.message;

  return (
    <Controller
      {...props}
      name={name}
      render={({ field }) => (
        <FieldUI name={name}>
          <FormLabel
            id={id}
            htmlFor={id}
          >
            {label}
          </FormLabel>
          <ControlUI asChild>
            <Input
              id={id}
              placeholder={placeholder}
              {...field}
            />
          </ControlUI>
          {description && (
            <FormDescription id={id}>{description}</FormDescription>
          )}
          {errorMessage && <FormMessage id={id}>{errorMessage}</FormMessage>}
        </FieldUI>
      )}
    />
  );
};

export { Form, FormDescription, FormField, FormLabel, FormMessage, FormSubmit };
