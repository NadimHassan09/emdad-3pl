import { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { RefreshCw } from 'lucide-react';
import {
  fetchClientSettings,
  updateClientProfile,
  changeClientPassword,
  getSettingsErrorMessage,
} from '@/api/clientPortalSettings';

export function SettingsPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [savingAccount, setSavingAccount] = useState(false);
  const [savingPassword, setSavingPassword] = useState(false);

  const load = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchClientSettings();
      setFirstName(data.profile.firstName);
      setLastName(data.profile.lastName);
      setEmail(data.profile.email);
    } catch (e) {
      console.error(e);
      setError(getSettingsErrorMessage(e, 'تعذر تحميل إعدادات الحساب.'));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  const handleSaveAccount = async () => {
    try {
      setSavingAccount(true);
      setError(null);
      setMessage(null);
      const res = await updateClientProfile({ firstName, lastName, email });
      setFirstName(res.profile.firstName);
      setLastName(res.profile.lastName);
      setEmail(res.profile.email);
      setMessage('تم حفظ بيانات الحساب بنجاح.');
    } catch (e) {
      setError(getSettingsErrorMessage(e, 'تعذر حفظ بيانات الحساب.'));
    } finally {
      setSavingAccount(false);
    }
  };

  const handleChangePassword = async () => {
    if (newPassword !== confirmPassword) {
      setError('كلمة المرور الجديدة وتأكيد كلمة المرور غير متطابقين');
      return;
    }
    if (!newPassword || newPassword.length < 8) {
      setError('يجب أن تحتوي كلمة المرور الجديدة على 8 أحرف على الأقل.');
      return;
    }
    try {
      setSavingPassword(true);
      setError(null);
      setMessage(null);
      await changeClientPassword({ currentPassword, newPassword });
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
      setMessage('تم تغيير كلمة المرور بنجاح.');
    } catch (e) {
      setError(getSettingsErrorMessage(e, 'تعذر تغيير كلمة المرور.'));
    } finally {
      setSavingPassword(false);
    }
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-10 w-48" />
        <Skeleton className="h-40 w-full rounded-lg" />
        <Skeleton className="h-64 w-full rounded-lg" />
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-900">الإعدادات</h1>
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="gap-2"
          onClick={() => void load()}
          disabled={loading}
        >
          <RefreshCw className="w-4 h-4" />
          تحديث
        </Button>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertTitle>خطأ</AlertTitle>
          <AlertDescription className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <span>{error}</span>
            <Button type="button" variant="outline" size="sm" onClick={() => void load()}>
              إعادة المحاولة
            </Button>
          </AlertDescription>
        </Alert>
      )}

      {message && (
        <Alert className="border-green-200 bg-green-50 text-green-800">
          <AlertDescription>{message}</AlertDescription>
        </Alert>
      )}

      <Card className="border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">ملفي الشخصي</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <Avatar className="w-20 h-20 border-2 border-[#176C33]/20">
              <AvatarFallback className="bg-gradient-to-br from-[#176C33] to-[#104920] text-white text-2xl font-medium">
                {firstName[0] || ''} {lastName[0] || ''}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-lg font-bold text-gray-900">
                {firstName} {lastName}
              </p>
              <p className="text-sm text-gray-500">{email}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">الحساب</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">الاسم الأول</label>
              <Input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">اسم العائلة</label>
              <Input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                عنوان البريد الإلكتروني
              </label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="flex items-center justify-end pt-4">
              <Button
                onClick={() => void handleSaveAccount()}
                disabled={savingAccount}
                className="bg-gradient-to-r from-[#176C33] to-[#104920] hover:from-[#104920] hover:to-[#176C33] text-white"
              >
                {savingAccount ? 'جارِ الحفظ...' : 'حفظ'}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">كلمة المرور</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                كلمة المرور الحالية
              </label>
              <Input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="w-full"
                placeholder="أدخل كلمة المرور الحالية"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                كلمة المرور الجديدة
              </label>
              <Input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full"
                placeholder="أدخل كلمة المرور الجديدة"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                تأكيد كلمة المرور الجديدة
              </label>
              <Input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full"
                placeholder="أعد إدخال كلمة المرور الجديدة"
              />
            </div>
            <div className="flex items-center justify-end pt-4">
              <Button
                onClick={() => void handleChangePassword()}
                disabled={savingPassword}
                className="bg-gradient-to-r from-[#176C33] to-[#104920] hover:from-[#104920] hover:to-[#176C33] text-white"
              >
                {savingPassword ? 'جارِ التغيير...' : 'تغيير كلمة المرور'}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
