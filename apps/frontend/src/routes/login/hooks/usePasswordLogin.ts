import { useRouter } from '@tanstack/react-router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { signIn } from '@/lib/auth-client';

const schema = z.object({
  email: z.email('正しいメールアドレスを入力してください'),
  password: z.string().min(8, 'パスワードは8文字以上で入力してください'),
});

type Schema = z.infer<typeof schema>;

export const usePasswordLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Schema>();

  const login = async (data: Schema) => {
    setLoading(true);
    setError(null);

    try {
      const result = await signIn.email({
        email: data.email,
        password: data.password,
        callbackURL: '/dashboard',
      });

      if (result.error) {
        setError('ログインに失敗しました');
        return;
      }

      router.navigate({ to: '/dashboard' });
    } catch (error: unknown) {
      console.error(error);
      setError('ログインに失敗しました');
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, register, handleSubmit, errors, login };
};
