'use client';

import { Form, FormField, FormSubmit } from '@/shared/ui/Form/Form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { button } from './LoginForm.css';

const accountFormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: 'Name must be at least 2 characters.',
    })
    .max(30, {
      message: 'Name must not be longer than 30 characters.',
    }),
});

type AccountFormValues = z.infer<typeof accountFormSchema>;

const defaultValues: Partial<AccountFormValues> = {
  name: '',
};

const LoginForm = () => {
  const form = useForm<AccountFormValues>({
    resolver: zodResolver(accountFormSchema),
    defaultValues,
    mode: 'onTouched',
  });
  const { control, handleSubmit } = form;

  // TODO: make this func async
  const onSubmit = (data: AccountFormValues) => {
    // console.log({ data });
    return data;
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      className="formRoot"
      {...form}
    >
      <FormField
        control={control}
        name="name"
        label="Name label"
        placeholder="Write your name"
        description="This is the name that will be displayed on your profile and in
        emails."
      />
      <FormSubmit className={button}>Submit action</FormSubmit>
    </Form>
  );
};

export default LoginForm;
