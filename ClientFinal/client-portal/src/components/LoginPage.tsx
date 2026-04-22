import { Formik, type FormikHelpers } from 'formik';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { loginClient } from '@/lib/auth';
import { Building2, Mail, Lock, AlertCircle } from 'lucide-react';

interface LoginPageProps {
  onLoginSuccess: () => void;
}

export interface LoginFormValues {
  email: string;
  password: string;
}

function validateLogin(values: LoginFormValues): Partial<Record<keyof LoginFormValues, string>> {
  const errors: Partial<Record<keyof LoginFormValues, string>> = {};
  const email = values.email.trim();
  if (!email) {
    errors.email = 'البريد الإلكتروني مطلوب.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'صيغة البريد الإلكتروني غير صالحة.';
  }
  if (!values.password) {
    errors.password = 'كلمة المرور مطلوبة.';
  } else if (values.password.length < 1) {
    errors.password = 'كلمة المرور مطلوبة.';
  }
  return errors;
}

export function LoginPage({ onLoginSuccess }: LoginPageProps) {
  const initialValues: LoginFormValues = { email: '', password: '' };

  const handleSubmit = async (
    values: LoginFormValues,
    { setStatus, setSubmitting }: FormikHelpers<LoginFormValues>,
  ) => {
    setStatus(undefined);
    try {
      await loginClient({ email: values.email.trim(), password: values.password });
      onLoginSuccess();
    } catch (err) {
      setStatus(err instanceof Error ? err.message : 'Login failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#176C33] to-[#104920] p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center space-y-2">
          <div className="flex justify-center mb-4">
            <div className="p-3 rounded-full bg-gradient-to-r from-[#176C33] to-[#104920]">
              <Building2 className="h-8 w-8 text-white" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold">تسجيل الدخول</CardTitle>
          <CardDescription>بوابة العملاء - نظام إدارة المستودعات</CardDescription>
        </CardHeader>
        <CardContent>
          <Formik
            initialValues={initialValues}
            validate={validateLogin}
            onSubmit={handleSubmit}
            validateOnBlur
            validateOnChange={false}
          >
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, status }) => (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {status && (
                  <div className="flex items-center gap-2 p-3 rounded-md bg-destructive/10 text-destructive text-sm border border-destructive/20">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    <span>{status}</span>
                  </div>
                )}

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    البريد الإلكتروني
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="client@example.com"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={isSubmitting}
                    dir="ltr"
                    className="text-left"
                    aria-invalid={touched.email && !!errors.email}
                  />
                  {touched.email && errors.email && (
                    <p className="text-sm text-destructive">{errors.email}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium flex items-center gap-2">
                    <Lock className="h-4 w-4" />
                    كلمة المرور
                  </label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    placeholder="••••••••"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={isSubmitting}
                    dir="ltr"
                    className="text-left"
                    aria-invalid={touched.password && !!errors.password}
                  />
                  {touched.password && errors.password && (
                    <p className="text-sm text-destructive">{errors.password}</p>
                  )}
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'جاري تسجيل الدخول...' : 'تسجيل الدخول'}
                </Button>

                <div className="text-center text-sm text-muted-foreground pt-4">
                  <p>بيانات تجريبية:</p>
                  <p className="font-mono text-xs mt-1">client1@acme.com / password123</p>
                </div>
              </form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </div>
  );
}
